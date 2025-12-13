"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import { SceneContent } from "@/src/types";

type SceneSectionProps = {
    title: string;
    content: SceneContent[];
    id?: string;
    video?: string; 
};

export default function SceneSection({ title, content, id, video }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        const videoEl = videoRef.current;
        const sectionEl = sectionRef.current;
        if (!videoEl || !sectionEl) return; 

        let ctx: gsap.Context | undefined;

        videoEl.onloadedmetadata = () => {
            (async () => {
                const { default: gsap } = await import("gsap");
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                gsap.registerPlugin(ScrollTrigger);

                ctx = gsap.context(() => {
                    const elementsToAnimate = gsap.utils.toArray(sectionEl.querySelectorAll('.anim-child'));
                    gsap.from(elementsToAnimate, {
                        opacity: 0, y: 30, stagger: 0.2,
                        scrollTrigger: {
                            trigger: sectionEl,
                            start: "top 60%",
                            toggleActions: "play none none none",
                        }
                    });
                    
                    gsap.to(videoEl, {
                        currentTime: videoEl.duration,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionEl,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: true,
                        }
                    });
                }, sectionEl);
            })();
        };

        return () => {
            ctx?.revert();
        };
    }, [video])

    return (
        <section
        ref={sectionRef}
        id={id}
        className="relative h-[300vh]"
        >
            <div className="sticky top-0 h-screen w-full">
                {video && (
                <video
                    ref={videoRef}
                    key={video}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute top-0 left-0 w-full h-screen object-cover z-0">
                    <source src={video} type="video/mp4" />
                    </video>
            )}
            </div>
            
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <div className="max-w-2xl text-left space-y-6 text-white">
                    <h2 className="anim-child text-3xl md:text-5xl font-semibold text-center">{title}</h2>
                    {content.map((block, index) => {
                        if (block.type === 'narrative') {
                            return (
                                <p key={index} className="anim-child text-lg md:text-xl text-gray-300 italic">
                                    {block.text}
                                </p>
                            );
                        }
                        if (block.type === 'dialogue') {
                            return (
                                <div key={index} className="anim-child space-y-2 p-4 border border-gray-700 rounded-lg">
                                    {block.lines.map((line, lineIndex) => (
                                        <p key={lineIndex} className="text-lg">
                                            <span className="font-bold text-red-500">{line.character}:</span> {line.text}
                                        </p>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}