import React, { useState, useRef, useEffect } from 'react';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message || "I am sorry, I could not retrieve a response for your inquiry." }]);
      }
    } catch (error) {
      console.error("AI Assistant Fetch Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I am unable to connect to the assistant at the moment." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center shadow-2xl border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 group"
          aria-label="AETHER Institutional Assistant"
        >
          <svg className="w-8 h-8 transition-transform group-hover:scale-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
      ) : (
        <div className="w-80 md:w-96 bg-brand-parchment border border-brand-navy/10 shadow-[0_30px_60px_-15px_rgba(10,26,47,0.3)] rounded-sm flex flex-col h-[550px] overflow-hidden animate-[slideUp_0.5s_ease-out]">
          {/* Header */}
          <div className="p-6 bg-brand-navy text-brand-parchment">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-[10px] font-sans font-semibold uppercase tracking-[0.5em] text-brand-gold">
                  Inquiry Desk
                </h4>
                <p className="text-xl font-serif font-bold tracking-tight">AETHER Assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-parchment/50 hover:text-brand-gold transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-brand-parchment">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
                <div className="w-12 h-px bg-brand-gold/30"></div>
                <p className="text-[11px] text-brand-navy/60 font-sans font-semibold uppercase tracking-[0.3em] leading-relaxed">
                  Welcome to the AETHER Inquiry Desk. <br /> How may we assist your formation?
                </p>
                <div className="w-12 h-px bg-brand-gold/30"></div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-4 text-[13px] leading-relaxed ${msg.role === 'user'
                  ? 'bg-brand-navy text-brand-parchment rounded-sm font-sans font-medium'
                  : 'bg-white text-brand-navy border border-brand-stone rounded-sm font-serif italic'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-brand-stone p-4 rounded-sm flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-brand-gold rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-brand-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-brand-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-brand-navy/5 bg-white">
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Submit your inquiry..."
                className="w-full bg-brand-parchment/30 text-[13px] font-sans border-b border-brand-stone hover:border-brand-navy focus:border-brand-gold outline-none text-brand-navy placeholder:text-brand-navy/30 py-3 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="self-end text-[10px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy hover:text-brand-gold disabled:opacity-30 disabled:hover:text-brand-navy transition-colors flex items-center gap-3"
              >
                <span>Submit Inquiry</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default Assistant;