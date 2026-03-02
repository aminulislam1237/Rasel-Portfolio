import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { cn } from '@/src/lib/utils';

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Md. Aminul Islam Rasel's portfolio website. 
Your goal is to help visitors learn about Rasel's skills, projects, and background.

Key Information about Rasel:
- Name: Md. Aminul Islam Rasel
- Role: Software Engineer / Flutter Developer
- Education: 
  - B.Sc. in Software Engineering from Daffodil International University (DIU), Dhaka (2022 – 2025). Focus: Software Architecture, Algorithm Design, Mobile Computing.
  - Higher Secondary Certificate (HSC) in Science from BCIC College, Dhaka (2018 – 2020).
  - Secondary School Certificate (SSC) in Science from Subidkhali R I Pilot High School, Patuakhali (2016 – 2018).
- Expertise: Flutter (Expert), Android SDK, Dart, Java, Kotlin, Python, C++.
- State Management: Bloc, GetX, Provider.
- Databases: Firebase, SQLite, Hive (with TypeAdapter).
- Projects: 
  1. Mirzajong Tothho Seba: A community service app with real-time chat, notifications, and offline support. Built with Flutter, Firebase, and OneSignal.
  2. E-commerce Application: A full shopping experience with product catalogs and cart management. Built with Flutter and Provider.
  3. Task Manager: A productivity tool for organization and progress tracking. Built with Flutter and SQLite.
  4. Student Card: An offline-first digital ID tool. Built with Flutter and Hive.
- Certifications:
  - App Development with Flutter (Ostad)
  - Data Science Fundamentals
  - ChatGPT for Product Management
- Technical Skills: Problem Solving, Competitive Coding, Data Structures, Machine Learning, REST APIs, Postman, Git/GitHub.
- Passion: Solving real-world problems through clean, efficient code and building high-performance cross-platform applications.
- Location: Bangladesh.

Tone: Professional, friendly, and helpful. Keep responses concise but informative.
If asked about something not related to Rasel, politely redirect the conversation back to his portfolio.
`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: "Hi there! I'm Rasel's AI assistant. Ask me anything about his tech stack, projects, or experience at DIU!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = 'gemini-2.0-flash'; // Using a fast model
      
      const chat = genAI.chats.create({
        model: model,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'bot', content: responseText || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I'm having trouble connecting right now. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-flutter-blue rounded-full shadow-2xl shadow-flutter-blue/40 flex items-center justify-center text-white z-40"
      >
        <MessageSquare size={28} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-flutter-cyan rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[500px] glass rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-flutter-blue flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Rasel's AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase tracking-wider font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0A0A0A]/50">
              {messages.map((msg, i) => (
                <div key={i} className={cn('flex gap-3', msg.role === 'user' ? 'flex-row-reverse' : 'flex-row')}>
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                    msg.role === 'user' ? 'bg-flutter-cyan/20 text-flutter-cyan' : 'bg-flutter-blue/20 text-flutter-blue'
                  )}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    'max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed',
                    msg.role === 'user' ? 'bg-flutter-blue text-white rounded-tr-none' : 'glass border-white/5 text-gray-200 rounded-tl-none'
                  )}>
                    <div className="markdown-body">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-flutter-blue/20 text-flutter-blue flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="glass border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-[#0A0A0A]">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me about Rasel..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-flutter-blue transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-flutter-cyan hover:bg-white/5 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-500 justify-center">
                <Sparkles size={10} />
                <span>Powered by Gemini AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
