import { NextRequest, NextResponse } from 'next/server'
import { analyzeText } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text } = body

    // Validate input
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required and must be a string' },
        { status: 400 }
      )
    }

    if (text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text cannot be empty' },
        { status: 400 }
      )
    }

    if (text.length > 10000) {
      return NextResponse.json(
        { error: 'Text is too long. Maximum 10,000 characters allowed.' },
        { status: 400 }
      )
    }

    // Analyze the text
    const result = await analyzeText(text)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Analysis API error:', error)
    
    // Return a generic error message to avoid exposing internal details
    return NextResponse.json(
      { error: 'Failed to analyze text. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
