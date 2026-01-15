"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Chapter, Scene, SceneContent } from "@/src/types";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import SceneSection from "@/src/components/SceneSection";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useVisitedChapters } from '@/src/lib/useVisitedChapters'; 
import { useAssetLoader } from "../lib/useAssetLoader";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

type ChapterClientProps = {
    chapterData: Chapter;
}

export default function ChapterClient({ chapterData }: ChapterClientProps) {
    // State for the currently visible scenes
    const [visibleScenes, setVisibleScenes] = useState<Scene[]>([]);
    const { addChapter } = useVisitedChapters();
    const mainRef = useRef<HTMLElement>(null);

    const { allImages, allVideos } = useMemo(() => {
        const images = chapterData.scenes
            .map(s => s.image)
            .filter((url): url is string => !!url);
            
        const videos = chapterData.scenes
            .map(s => s.video)
            .filter((url): url is string => !!url);

        return { allImages: images, allVideos: videos };
    }, [chapterData]);

    const { loaded, progress } = useAssetLoader(allImages, allVideos);

    useEffect(() => {
        if (chapterData?.id) {
            addChapter(chapterData.id);
        }
    }, [chapterData?.id, addChapter]);

    useEffect(() => {
        if (chapterData && chapterData.scenes.length > 0) {
            setVisibleScenes([chapterData.scenes[0]]);
        }
    }, [chapterData]);

    useEffect(() => {
        if (loaded) {
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [loaded]);

    const handleDecision = useCallback((sceneId: string, followUpContent: SceneContent[]) => {
        setVisibleScenes(prevScenes =>
            prevScenes.map(scene => {
                if (scene.id === sceneId) {
                    const decisionBlockIndex = scene.content.findIndex(block => block.type === 'decision');
                    if (decisionBlockIndex !== -1) {
                        const newContent = [...scene.content];
                        newContent.splice(decisionBlockIndex, 1, ...followUpContent);
                        return {
                            ...scene,
                            content: newContent,
                        };
                    }
                }
                return scene;
            })
        );
    }, []);

    const handleNavigate = useCallback((targetSceneId: string) => {
        // Find the next scene in the entire chapter data
        const targetScene = chapterData.scenes.find(s => s.id === targetSceneId);

        if (targetScene) {
            // Add the new scene to the visible ones
            setVisibleScenes(prevScenes => {
                if (prevScenes.some(s => s.id === targetSceneId)) {
                    (async () => {
                        //const scroller = document.querySelector("#smooth-wrapper");
                        gsap.to(window, {
                            duration: 1.5,
                            scrollTo: { y: `#${targetSceneId}`, offsetY: 100 },
                            ease: "power2.inOut",
                        });
                    })();
                    return prevScenes;
                }
                return [...prevScenes, targetScene];
            });
        }
    }, [chapterData]);

    // handle scene completion (for not interactive scenes)
    const handleSceneComplete = useCallback((completedSceneId: string) => {
        const completedSceneIndex = chapterData.scenes.findIndex(s => s.id === completedSceneId);

        if (completedSceneIndex > -1 && completedSceneIndex + 1 < chapterData.scenes.length) {
            const nextScene = chapterData.scenes[completedSceneIndex + 1];
            handleNavigate(nextScene.id);
        }
    }, [chapterData, handleNavigate]);

    // scroll to newly added scene
    useEffect(() => {
        if (visibleScenes.length > 1) {
            const lastSceneId = visibleScenes[visibleScenes.length - 1].id;
            const targetElement = document.getElementById(lastSceneId);

            if (targetElement) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetElement.offsetTop,
                        autoKill: false,
                    },
                    ease: "power2.inOut",
                })
            }
        }
    }, [visibleScenes]);

    if (!loaded) {
        return (
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white h-screen w-screen">
                <h2 className="text-2xl mb-4 font-light tracking-widest">LOADING CHAPTER</h2>
                
                {/* Ladebalken Container */}
                <div className="w-64 h-1 bg-gray-800 overflow-hidden">
                    {/* Ladebalken Füllung */}
                    <div 
                        className="h-full bg-white transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="mt-2 text-xs text-gray-500">{progress}%</p>
            </div>
        );
    }

    return (
        <main
            ref={mainRef}
            className="opacity-0"
            style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
        >
            {visibleScenes.map((scene) => (
                <SceneSection
                    key={scene.id}
                    id={scene.id}
                    title={scene.title}
                    showTitleBanner={scene.showTitleBanner}
                    content={scene.content}
                    video={scene.video}
                    image={scene.image}
                    onNavigate={handleNavigate}
                    onSceneComplete={handleSceneComplete}
                    onDecision={handleDecision}
                    layout={scene.layout}
                />
            ))}
        </main>
    );
}