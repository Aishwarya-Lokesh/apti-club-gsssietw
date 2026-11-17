'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  RotateCcw,
  Minimize2,
  Maximize2,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  source?: string;
  confidence?: 'high' | 'medium' | 'low';
  actionUrl?: string;
  actionText?: string;
  timestamp: string;
}

export default function PlacementChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: "Hello! I am your **APTI CLUB Placement Intelligence Assistant**.\n\nAsk me about:\n- Campus drive eligibility & registration\n- Recruiting company patterns (*Deutsche Bank, Accenture, Infosys*)\n- High-frequency interview questions & coding topics\n- Standardized report templates & how to submit your experience",
      source: 'APTI CLUB On-Premises Placement Intelligence Engine',
      timestamp: 'Just now'
    }
  ]);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([
    'How do I register for a placement drive?',
    'What are the eligibility criteria for Deutsche Bank?',
    'What technical skills are commonly tested?',
    'How to upload my placement experience?'
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    const userMessage: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryText })
      });

      const data = await res.json();

      if (data.success) {
        const botMessage: Message = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: data.answer,
          source: data.source,
          confidence: data.confidence,
          actionUrl: data.actionUrl,
          actionText: data.actionText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);

        if (Array.isArray(data.suggestedQuestions) && data.suggestedQuestions.length > 0) {
          setSuggestedQuestions(data.suggestedQuestions);
        }
      } else {
        throw new Error(data.message || 'Error occurred');
      }
    } catch (err: any) {
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        sender: 'bot',
        text: "I am having trouble accessing the local placement knowledge base. Please check back shortly or consult the T&P office directly.",
        source: 'System Fallback',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'msg-welcome-reset',
        sender: 'bot',
        text: "Chat cleared. What can I help you find regarding campus placements?",
        source: 'APTI CLUB Local Knowledge Base',
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setIsMinimized(false); }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-amber-500 text-white font-medium shadow-2xl shadow-purple-950/70 hover:scale-105 active:scale-95 transition-all group border border-amber-400/30"
          aria-label="Open Placement AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Placement AI Assistant
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
            Local RAG
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div 
          className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 w-[95vw] sm:w-[420px] rounded-2xl bg-[#0c0724] border border-purple-500/40 shadow-2xl shadow-purple-950/90 flex flex-col overflow-hidden backdrop-blur-xl transition-all duration-200 ${
            isMinimized ? 'h-16' : 'h-[600px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#170a3c] via-[#200e52] to-[#170a3c] border-b border-purple-800/40 flex items-center justify-between select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-white tracking-wide">APTI Placement Intelligence</h3>
                  <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    Offline RAG
                  </span>
                </div>
                <p className="text-[10px] text-purple-200/70 font-medium">GSSSIETW Local Knowledge Base</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Maximize' : 'Minimize'}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-purple-900/40">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-700 to-purple-600 text-white shadow-md'
                          : 'bg-[#180e3b] text-slate-200 border border-purple-800/40 shadow-sm'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{m.text}</div>

                      {/* Source Citation badge for factual verified data */}
                      {m.source && (
                        <div className="mt-2 pt-2 border-t border-purple-800/40 flex items-center gap-1 text-[10px] text-amber-300/80 font-mono">
                          <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">Source: {m.source}</span>
                        </div>
                      )}

                      {/* Action Button if linked to a portal section */}
                      {m.actionUrl && (
                        <Link
                          href={m.actionUrl}
                          onClick={() => setIsOpen(false)}
                          className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/30 transition-colors"
                        >
                          <span>{m.actionText || 'View Details'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1 px-1">
                      {m.timestamp}
                    </span>
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#180e3b] border border-purple-800/40 w-fit">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                    <span className="text-xs text-purple-200 animate-pulse font-medium">Searching college knowledge base...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {suggestedQuestions.length > 0 && (
                <div className="px-4 py-2 bg-[#12082f]/80 border-t border-purple-900/30">
                  <div className="text-[10px] text-purple-300/80 font-medium mb-1.5 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 text-amber-400" />
                    <span>Suggested Prompts:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-16 overflow-y-auto">
                    {suggestedQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(q)}
                        disabled={loading}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-purple-950/60 hover:bg-purple-800/50 text-slate-300 hover:text-amber-200 border border-purple-800/50 transition-colors text-left truncate max-w-full"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input Field */}
              <div className="p-3 bg-[#0d0726] border-t border-purple-900/40">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about placement rounds, eligibility, tips..."
                    disabled={loading}
                    className="flex-1 bg-[#180c3e] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="p-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 disabled:opacity-40 transition-all"
                    aria-label="Send query"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <div className="mt-1.5 text-center">
                  <span className="text-[9px] text-purple-300/60 font-mono">
                    Zero API Fees • Runs Locally on College Server
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
