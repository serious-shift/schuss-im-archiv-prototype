import { useState, useEffect, useCallback } from 'react';
import { isBrowser } from './isBrowser';

const VISITED_CHAPTERS_KEY = 'visitedChapters';

// visitedChapters abrufen
const getVisitedChapters = (): string[] => {
    if (!isBrowser) {
        return [];
    }
    try {
        const item = window.localStorage.getItem(VISITED_CHAPTERS_KEY);
        return item ? JSON.parse(item) : [];
    } catch (error) {
        console.error('Error getting visited chapters from localStorage:', error);
        return [];
    }
};

// visitedChapters speichern
const addVisitedChapter = (chapterId: string) => {
    if (!isBrowser) {
        return;
    }
    try {
        const currentVisited = getVisitedChapters();
        if (!currentVisited.includes(chapterId)) {
            const newVisited = [...currentVisited, chapterId];
            window.localStorage.setItem(VISITED_CHAPTERS_KEY, JSON.stringify(newVisited));
            window.dispatchEvent(new Event('storage'));
        }
    } catch (error) {
        console.error('Error adding visited chapter to localStorage:', error);
    }
};

// clear visitedChapters
const clearStorage = () => {
    if (!isBrowser) {
        return;
    }
    try {
        window.localStorage.removeItem(VISITED_CHAPTERS_KEY);
        window.dispatchEvent(new Event('storage'));
    } catch (error) {
        console.error('Error clearing visited chapters from localStorage:', error);
    }
};

// Custom Hook
export const useVisitedChapters = () => {
    const [visitedChapters, setVisitedChapters] = useState<string[]>([]);

    useEffect(() => {
        setVisitedChapters(getVisitedChapters());
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            setVisitedChapters(getVisitedChapters());
        }

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    const addChapter = useCallback((chapterId: string) => {
        addVisitedChapter(chapterId);
        setVisitedChapters(prev => prev.includes(chapterId) ? prev : [...prev, chapterId]);
    }, []);

    const clearChapters = useCallback(() => {
        clearStorage();
        setVisitedChapters([]);
    }, []);

    return { visitedChapters, addChapter, clearChapters }
};

