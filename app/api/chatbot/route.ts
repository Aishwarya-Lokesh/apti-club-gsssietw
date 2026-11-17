import { NextRequest, NextResponse } from 'next/server';
import { queryKnowledgeBase } from '@/lib/chatbot-rag';

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { success: false, message: 'A valid text query is required' },
        { status: 400 }
      );
    }

    // Run local self-contained RAG retrieval
    const result = queryKnowledgeBase(query);

    return NextResponse.json({
      success: true,
      query,
      answer: result.answer,
      source: result.source,
      confidence: result.confidence,
      category: result.category,
      actionUrl: result.actionUrl,
      actionText: result.actionText,
      suggestedQuestions: result.suggestedQuestions,
      engine: 'APTI CLUB Local RAG Engine v2.0 (On-Premises)'
    });
  } catch (error: any) {
    console.error('[Chatbot API Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Chatbot retrieval failed' },
      { status: 500 }
    );
  }
}
