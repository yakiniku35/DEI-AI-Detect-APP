import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json(
        { error: '請提供有效的文本內容' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: '服務配置錯誤：缺少 API 密鑰' },
        { status: 500 }
      )
    }

    // 使用 OpenAI GPT-4 進行 AI 內容檢測分析
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `你是一個專業的 AI 內容檢測專家。分析給定的文本，判斷它是否由 AI 生成。

請基於以下特徵進行分析：
1. 語言模式的一致性和流暢度
2. 詞彙選擇的多樣性
3. 句子結構的複雜度
4. 是否存在 AI 生成內容的典型特徵（如過度正式、缺乏個人化語氣、重複模式等）
5. 邏輯連貫性和創造性

請以 JSON 格式回覆，包含：
{
  "isAI": boolean,  // true 表示可能是 AI 生成，false 表示可能是人類撰寫
  "confidence": number,  // 0-100 的信心度分數
  "details": string,  // 詳細的分析說明（繁體中文）
  "indicators": string[]  // 判斷依據的關鍵指標列表
}`,
        },
        {
          role: 'user',
          content: `請分析以下文本是否由 AI 生成：\n\n${text}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    })

    const analysisResult = completion.choices[0]?.message?.content

    if (!analysisResult) {
      throw new Error('無法獲取分析結果')
    }

    const result = JSON.parse(analysisResult)

    return NextResponse.json({
      isAI: result.isAI,
      confidence: result.confidence,
      details: result.details,
      indicators: result.indicators || [],
    })

  } catch (error: any) {
    console.error('AI 檢測 API 錯誤:', error)
    
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'API 密鑰無效' },
        { status: 401 }
      )
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'API 請求頻率超限，請稍後再試' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { 
        error: '分析過程中發生錯誤',
        message: error.message || '未知錯誤'
      },
      { status: 500 }
    )
  }
}
