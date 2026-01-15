"use client";

import { Hotspot } from '@/src/types';
import Image from 'next/image';
import { AudioBlockView } from './AudioBlockView';

type ClueDetailProps = {
    hotspot: Hotspot;
    onClose: () => void;
};

export default function ClueDetail({ hotspot, onClose }: ClueDetailProps) {
    return (
        <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-gray-900 text-white rounded-lg shadow-2xl p-6 md:p-8 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} 
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-3xl font-bold leading-none z-10"
                    aria-label="Schliessen"
                >
                    &times;
                </button>
                
                <h3 className="text-3xl font-bold mb-6 text-red-500 pr-8">{hotspot.title}</h3>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* left: description text */}
                    <div className="md:w-1/2 space-y-4">
                        <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                            {hotspot.description}
                        </p>
                    </div>
                    
                    {/* right: audio/image */}
                    <div className="md:w-1/2 w-full">
                        {hotspot.audio ? (
                            <div className="w-full">
                                <AudioBlockView block={hotspot.audio} />
                            </div>
                        ) : hotspot.image ? (
                            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black/50 border border-gray-800 shadow-lg">
                                 <Image
                                    src={hotspot.image}
                                    alt={hotspot.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}