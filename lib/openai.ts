import OpenAI from 'openai'
import { EXECUTIVE_ORDERS_CONTEXT } from '@/utils/executiveOrders'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

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

export interface PolicyAdviceResult {
  answer: string
  citations?: string[]
}

/**
 * Analyze text for compliance with executive orders
 */
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

Please respond in the following JSON format:
{
  "verdict": "YES" or "NO",
  "violations": [
    {
      "text": "exact text excerpt that violates",
      "reason": "specific reason for violation",
      "section": "executive order section reference",
      "suggestion": "suggested correction"
    }
  ],
  "summary": "overall analysis summary"
}`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a legal compliance analyst. Always respond with valid JSON format.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.1,
      max_tokens: 2000,
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    // Parse the JSON response
    const result = JSON.parse(response) as AnalysisResult
    
    // Validate the response structure
    if (!result.verdict || !result.violations || !result.summary) {
      throw new Error('Invalid response format from OpenAI')
    }

    return result
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw new Error('Failed to analyze text')
  }
}

/**
 * Get policy advice based on user question
 */
export async function getPolicyAdvice(
  question: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<PolicyAdviceResult> {
  const systemPrompt = `You are a policy advisor specializing in executive orders and compliance requirements. You have access to the following executive orders:

${EXECUTIVE_ORDERS_CONTEXT}

Your role is to:
1. Answer questions about these executive orders accurately
2. Provide specific references to sections when relevant
3. Explain compliance requirements clearly
4. Suggest best practices for avoiding violations
5. Always cite the specific executive order and section when referencing requirements

Be helpful, accurate, and professional. If you cannot find information in the provided executive orders, clearly state that limitation.`

  const messages = [
    { role: 'system' as const, content: systemPrompt },
    ...history,
    { role: 'user' as const, content: question }
  ]

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      temperature: 0.3,
      max_tokens: 1500,
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    // Extract citations from the response
    const citations = extractCitations(response)

    return {
      answer: response,
      citations
    }
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw new Error('Failed to get policy advice')
  }
}

/**
 * Extract citations from AI response
 */
function extractCitations(text: string): string[] {
  const citationPattern = /(?:Section|Sec\.?)\s*(\d+[a-z]?)/gi
  const matches = text.match(citationPattern)
  return matches ? [...new Set(matches)] : []
}

/**
 * Parse AI analysis response (fallback method)
 */
export function parseAiAnalysis(response: string): AnalysisResult {
  try {
    // Try to parse as JSON first
    const parsed = JSON.parse(response)
    if (parsed.verdict && parsed.violations && parsed.summary) {
      return parsed
    }
  } catch {
    // If JSON parsing fails, try to extract information from text
  }

  // Fallback parsing logic
  const verdictMatch = response.match(/verdict[:\s]*["']?(YES|NO)["']?/i)
  const verdict = verdictMatch ? verdictMatch[1].toUpperCase() as 'YES' | 'NO' : 'NO'

  // Extract violations (simplified)
  const violations: Array<{
    text: string
    reason: string
    section: string
    suggestion: string
  }> = []

  // Extract summary
  const summaryMatch = response.match(/summary[:\s]*["']?([^"']+)["']?/i)
  const summary = summaryMatch ? summaryMatch[1] : 'Analysis completed'

  return {
    verdict,
    violations,
    summary
  }
}
