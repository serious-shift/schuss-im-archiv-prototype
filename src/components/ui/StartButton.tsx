"use client";

import Link from "next/link";
import { useVisitedChapters } from "@/src/lib/useVisitedChapters";

export default function StartButton() {
    const { visitedChapters, clearChapters } = useVisitedChapters();

    const handleNewGame = () => {
        clearChapters();
    };

    const hasSaveGame = visitedChapters.length > 0;
    const lastChapterId = hasSaveGame ? visitedChapters[visitedChapters.length - 1] : null;

    return (
        <div className="flex flex-col gap-4">
            <Link
                href="/chapter/einfuehrung"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
                onClick={handleNewGame}
            >
                Neues Spiel
            </Link>
            <Link
                href={lastChapterId ? `/chapter/${lastChapterId}` : '#'}
                className={`
                    inline-block text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300
                    ${hasSaveGame
                        ? 'bg-red-700 hover:bg-red-800 hover:scale-105'
                        : 'bg-gray-500 cursor-not-allowed'
                    }
                `}
                onClick={(e) => !hasSaveGame && e.preventDefault()}
            >
                Spiel laden
            </Link>
        </div>
    )
}