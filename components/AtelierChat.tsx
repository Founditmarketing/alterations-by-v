import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToV } from '../services/gemini';
import { ChatMessage } from '../types';

const AtelierChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Welcome to the Digital Atelier. I am V's virtual assistant. How may I advise you on your garment inquiries today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    history.push({ role: 'user', text: userMsg.text });

    try {
      const responseText = await sendMessageToV(history, userMsg.text);
      
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "I'm having trouble connecting to the atelier. Please try again."
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-stone-900 text-white p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={20} className="text-amber-200" />
        <span className="font-serif tracking-wide pr-1">Ask V</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-96 h-[80vh] md:h-[600px] bg-white shadow-2xl rounded-t-2xl md:rounded-2xl z-50 flex flex-col overflow-hidden border border-stone-100 animate-fade-in">
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center border border-amber-600/50">
                <span className="font-serif text-xl italic text-amber-100">V</span>
              </div>
              <div>
                <h3 className="font-serif text-lg tracking-wide">Virtual Concierge</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-stone-200 text-stone-900 rounded-br-none'
                      : 'bg-white text-stone-800 border border-stone-200 shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-stone-200 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex items-center bg-stone-50 rounded-full px-4 py-2 border border-stone-200 focus-within:border-amber-600 transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about fabrics, fit, or pricing..."
                className="flex-1 bg-transparent focus:outline-none text-stone-800 placeholder-stone-400 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="ml-2 p-2 bg-stone-900 text-white rounded-full hover:bg-amber-600 disabled:bg-stone-300 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-center text-stone-400 mt-2">
              AI-generated advice. Please consult in-person for final quotes.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AtelierChat;
