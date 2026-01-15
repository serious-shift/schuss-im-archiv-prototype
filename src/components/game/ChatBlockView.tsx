"use client";

import { ChatBlock } from "@/src/types";
import { useRef } from "react";
import Image from "next/image";

export function ChatBlockView({ block }: { block: ChatBlock }) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="w-full flex justify-center py-8 relative">
            <div className="relative w-full max-w-xxl">
                
                <Image 
                    src={block.phoneImage} 
                    alt="Smartphone"
                    width={400} 
                    height={800}
                    className="w-full h-auto object-contain drop-shadow-2xl z-0 relative"
                    priority
                />

                <div 
                    className="absolute inset-0 z-10 bg-white overflow-hidden flex flex-col"
                    style={{
                        top: '24%',    
                        bottom: '24%', 
                        left: '42%',    
                        right: '42%',   
                        borderRadius: '0px' 
                    }}
                >
                    {/* Chat Verlauf Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100 scrollbar-hide">
                        {block.messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`chat-bubble flex w-full ${msg.sender === 'Lena' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div 
                                    className={`
                                        max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm
                                        ${msg.sender === 'Lena' 
                                            ? 'bg-blue-500 text-white rounded-br-none' 
                                            : 'bg-gray-200 text-black rounded-bl-none'}
                                    `}
                                >
                                    <p className="leading-snug">{msg.text}</p>
                                    <p className={`text-xs mt-1 text-right ${msg.sender === 'Lena' ? 'text-white' : 'text-gray-500'}`}>{msg.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}