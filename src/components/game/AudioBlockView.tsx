"use client";

import { useState, useRef, useEffect } from "react";
import { AudioBlock } from "@/src/types";

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg">
        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
    </svg>
);

export function AudioBlockView({ block }: { block: AudioBlock }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Reset wenn Audio zu Ende ist
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => setIsPlaying(false);
        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, []);

    return (
        <div className="max-w-md">
            {/* Bild Container */}
            <div 
                className="relative aspect-square shadow-2xl w-full cursor-pointer group"
                onClick={togglePlay}
            >
                {/* Hintergrundbild */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${block.coverImage})` }}
                />
                
                {/* Play Button (Zentriert) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all transform group-hover:scale-110 border border-white/50">
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </div>
                </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={block.audioSrc} preload="metadata" />

            {/* Optional: Titel unter dem Bild */}
            {block.title && (
                <div className="p-4 bg-gray-900 text-center">
                    <p className="text-gray-300 font-mono text-sm tracking-widest uppercase">{block.title}</p>
                </div>
            )}
        </div>
    );
}