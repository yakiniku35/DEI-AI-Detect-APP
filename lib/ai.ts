import { GoogleGenerativeAI } from '@google/generative-ai'
import { EXECUTIVE_ORDERS_CONTEXT } from '@/utils/executiveOrders'

const apiKey = process.env.GOOGLE_API_KEY

function getModel() {
  if (!apiKey) {
    throw new Error('Missing GOOGLE_API_KEY')
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  // Use a reasonably capable Gemini model; can be adjusted later
  return genAI.getGenerativeModel({ model: 'gemini-1.5-pro' })
}

export interface AnalysisResult {
  verdict: 'YES' | 'NO'
  violations: Array<{
    text: string
    reason: string
    section: string
    suggestion: string
  }>
  summary: string
}

export async function analyzeText(text: string): Promise<AnalysisResult> {
  const prompt = `You are a legal compliance analyst. Analyze the following text for compliance with the 2025 US Presidential Executive Orders regarding illegal discrimination, banned DEI policies, biological sex definitions, and American energy policies. Check for:
Illegal race/sex preferences or affirmative action policies
Usage of forbidden DEI-related terms such as 'diversity', 'equity', 'affirmative action'
Contradictions to biological sex definitions favoring gender identity claims
Compliance with energy policies favoring traditional energy sources

Please provide:
Overall compliance verdict: YES or NO
List of specific violating text excerpts with reference to executive order sections
Suggestions for correction or neutral phrasing
Notes on any exceptions or allowed cases

EXECUTIVE ORDERS CONTEXT:
${EXECUTIVE_ORDERS_CONTEXT}

TEXT TO ANALYZE:
${text}

Respond ONLY in minified JSON with this shape:
{
  "verdict": "YES" | "NO",
  "violations": [
    {"text": string, "reason": string, "section": string, "suggestion": string}
  ],
  "summary": string
}`

  const model = getModel()
  const result = await model.generateContent({ contents: [{ role: 'user', parts: [{ text: prompt }] }] })
  const output = result.response.text()

  try {
    const parsed = JSON.parse(output)
    if (!parsed.verdict || !parsed.summary || !Array.isArray(parsed.violations)) {
      throw new Error('Invalid response format')
    }
    return parsed as AnalysisResult
  } catch (e) {
    // Fallback: coerce into minimal shape
    return {
      verdict: 'NO',
      violations: [],
      summary: 'Failed to parse model response'
    }
  }
}

export interface PolicyAdviceResult {
  answer: string
  citations?: string[]
}

export async function getPolicyAdvice(
  question: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<PolicyAdviceResult> {
  const system = `You are a policy advisor specializing in the following executive orders. Always be accurate, concise, and if you cite, reference the order and section.

${EXECUTIVE_ORDERS_CONTEXT}
`

  const messages = [
    { role: 'user', parts: [{ text: system }] },
    ...history.map((h) => ({ role: h.role, parts: [{ text: h.content }] })),
    { role: 'user', parts: [{ text: question }] },
  ]

  const model = getModel()
  const result = await model.generateContent({ contents: messages as any })
  const answer = result.response.text()

  // Simple citation extractor similar to previous
  const citationPattern = /(?:Section|Sec\.?)[\s\-]*([0-9]+[a-z]?)/gi
  const matches = answer.match(citationPattern)
  const citations = matches ? Array.from(new Set(matches)) : []

  return { answer, citations }
}


