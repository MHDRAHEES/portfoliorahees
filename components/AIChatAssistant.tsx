
// import React, { useState, useRef, useEffect } from 'react';
// // import { askResumeQuestion } from '../geminiService';

// interface Message {
//   role: 'user' | 'assistant';
//   text: string;
// }

// export const AIChatAssistant: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { role: 'assistant', text: "Hi! I'm Muhammed's AI assistant. Ask me anything about his experience or skills!" }
//   ]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;
    
//     const userMsg = input.trim();
//     setInput('');
//     setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
//     setIsLoading(true);

//     // const response = await askResumeQuestion(userMsg);
//     // setMessages(prev => [...prev, { role: 'assistant', text: response }]);
//     setIsLoading(false);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
//       >
//         {isOpen ? (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
//         ) : (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
//         )}
//         <span className="absolute right-16 bg-zinc-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-700">
//           Chat with my AI
//         </span>
//       </button>

//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-80 md:w-96 glass-morphism rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-zinc-700/50">
//           <div className="bg-blue-600 p-4 flex items-center justify-between">
//             <h3 className="font-semibold flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//               Resume AI Assistant
//             </h3>
//           </div>
//           <div 
//             ref={scrollRef}
//             className="flex-1 p-4 h-80 overflow-y-auto space-y-4 bg-zinc-900/50"
//           >
//             {messages.map((m, i) => (
//               <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-200'}`}>
//                   {m.text}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-zinc-800 text-zinc-400 px-3 py-2 rounded-xl text-sm animate-pulse">
//                   AI is thinking...
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//               placeholder="Ask about my experience..."
//               className="flex-1 bg-zinc-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
