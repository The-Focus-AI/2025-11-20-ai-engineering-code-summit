import React, { useState, useRef, useEffect } from 'react';
import { X, Loader2, Terminal } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import type { ChatMessage } from '../types';
import { ARTICLES, SPEAKERS } from '../constants';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `SYSTEM READY.\nACCESSING CONFERENCE DATABASE...\n\nHello. I am the Horizon Interface. Ask me about speakers or topics.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    // Listen for toggle events
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-chat', handleToggle);

    return () => {
      window.removeEventListener('toggle-chat', handleToggle);
    };
  }, []);

  const getContext = () => {
    const articlesText = ARTICLES.map(a => `Title: ${a.title}\nAuthor: ${a.author}\nContent: ${a.content}`).join('\n\n');
    const speakersText = SPEAKERS.map(s => `Name: ${s.name}\nRole: ${s.role}\nBio: ${s.bio}`).join('\n\n');
    return `CONFERENCE DATA:\n\nARTICLES:\n${articlesText}\n\nSPEAKERS:\n${speakersText}`;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.PUBLIC_API_KEY;
      if (!apiKey) {
        throw new Error("API Key missing");
      }

      const ai = new GoogleGenAI({ apiKey });
      const context = getContext();
      const systemInstruction = `You are a retro-futuristic mainframe computer named 'Horizon Interface'.

      ${context}

      Rules:
      1. Answer ONLY based on the provided data.
      2. Style: Concise, robotic but helpful, slightly cryptic tech jargon.
      3. Use ALL CAPS for key entities or concepts sometimes.
      4. Format response in markdown but keeping it raw and terminal-like.
      `;

      const chatHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      chatHistory.push({ role: 'user', parts: [{ text: userMsg.text }] });

      const model = 'gemini-2.5-flash';
      const result = await ai.models.generateContent({
        model: model,
        contents: chatHistory,
        config: { systemInstruction: systemInstruction }
      });

      const responseText = result.response.text();
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "ERR: CONNECTION_LOST. RE-TRYING SEQUENCE..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-void text-terminal-green border border-terminal-green p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all z-40 flex items-center gap-3 pr-6 group"
        >
          <Terminal className="w-5 h-5 animate-pulse" />
          <span className="font-mono font-bold tracking-widest text-xs">TERM_ACCESS</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[450px] h-[600px] bg-void border-2 border-gray-800 flex flex-col z-50 overflow-hidden font-mono shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-300">

          {/* CRT Screen Effects */}
          <div className="absolute inset-0 pointer-events-none scanlines z-10 opacity-30"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,255,65,0.05)_0%,rgba(0,0,0,0.4)_100%)] z-10"></div>

          {/* Header */}
          <div className="bg-gray-900 border-b border-gray-800 p-3 flex justify-between items-center shrink-0 relative z-20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></div>
              <h3 className="text-terminal-green text-xs font-bold tracking-widest uppercase">Sys_Mainframe_V.2.0</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-terminal-green transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-void relative z-20 crt-flicker">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[9px] text-gray-600 uppercase mb-1">
                  {msg.role === 'user' ? 'USER_INPUT' : 'SYS_OUTPUT'}
                </span>
                <div className={`max-w-[90%] p-2 text-sm leading-relaxed border ${
                  msg.role === 'user'
                    ? 'border-gray-600 text-gray-300 bg-gray-900/50'
                    : 'border-transparent text-terminal-green'
                }`}>
                  <div className="whitespace-pre-wrap font-mono">
                    {msg.role === 'model' && <span className="mr-2">{'>'}</span>}
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-terminal-green text-xs p-2 animate-pulse">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>PROCESSING_DATA...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-void border-t border-gray-800 shrink-0 relative z-20">
            <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 p-2">
              <span className="text-terminal-green text-sm">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                className="flex-1 bg-transparent border-none text-terminal-green font-mono text-sm focus:ring-0 placeholder-gray-700 outline-none"
                placeholder="_"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
