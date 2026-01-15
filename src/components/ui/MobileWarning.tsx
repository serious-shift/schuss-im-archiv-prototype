"use client";

import { useState, useEffect } from "react";

export default function MobileWarning() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenWarning = localStorage.getItem("mobile-warning-seen");
        
        const isMobile = window.innerWidth < 768;

        if (isMobile && !hasSeenWarning) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem("mobile-warning-seen", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 animate-fade-in">
            <div className="bg-gray-900 border border-red-500/50 rounded-xl max-w-sm w-full p-6 shadow-2xl relative">
                
                <div className="text-red-500 mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-2">
                    Mobile Optimierung
                </h3>
                
                <p className="text-gray-300 text-center text-sm leading-relaxed mb-6">
                    Diese Seite ist noch nicht vollständig für Smartphones optimiert. Es kann vorkommen, dass Inhalte abgeschnitten sind oder du an manchen Stellen nicht weiterkommst.
                    <br/><br/>
                    <span className="text-gray-500 italic">Wir arbeiten bereits an einer mobilen Version!</span>
                </p>

                <button
                    onClick={handleClose}
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-lg transition-colors"
                >
                    Verstanden, trotzdem versuchen
                </button>
            </div>
        </div>
    );
}