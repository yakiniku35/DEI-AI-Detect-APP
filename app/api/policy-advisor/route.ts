import { NextRequest, NextResponse } from 'next/server'
import { getPolicyAdvice } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, history = [] } = body

    // Validate input
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required and must be a string' },
        { status: 400 }
      )
    }

    if (question.trim().length === 0) {
      return NextResponse.json(
        { error: 'Question cannot be empty' },
        { status: 400 }
      )
    }

    if (question.length > 1000) {
      return NextResponse.json(
        { error: 'Question is too long. Maximum 1,000 characters allowed.' },
        { status: 400 }
      )
    }

    // Validate history format
    if (!Array.isArray(history)) {
      return NextResponse.json(
        { error: 'History must be an array' },
        { status: 400 }
      )
    }

    // Validate history items
    for (const item of history) {
      if (!item.role || !item.content || 
          !['user', 'assistant'].includes(item.role) ||
          typeof item.content !== 'string') {
        return NextResponse.json(
          { error: 'Invalid history format' },
          { status: 400 }
        )
      }
    }

    // Get policy advice
    const result = await getPolicyAdvice(question, history)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Policy advisor API error:', error)
    
    // Return a generic error message to avoid exposing internal details
    return NextResponse.json(
      { error: 'Failed to get policy advice. Please try again.' },
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
