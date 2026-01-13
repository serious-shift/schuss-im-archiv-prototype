"use client";

import { useRef } from 'react';
import { AnalysisBlock } from '@/src/types';
import { useIsomorphicLayoutEffect } from '@/src/lib/useIsomorphicLayoutEffect';
import gsap from 'gsap';

type AnalysisBlockViewProps = {
    block: AnalysisBlock;
};

export default function AnalysisBlockView({ block }: AnalysisBlockViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const lines = gsap.utils.toArray<HTMLElement>(container.querySelectorAll('.log-line'));

        const ctx = gsap.context(() => {
            gsap.set(lines, { autoAlpha: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            });

            lines.forEach(line => {
                tl.to(line, {
                    autoAlpha: 1,
                    duration: 0.5,
                }, '+=0.5')
            });
        }, container);

        return () => ctx.revert();
    }, [block]);

    return (
        <div ref={containerRef} className="font-mono bg-black/80 border border-cyan-400/30 rounded-lg p-4 md:p-6 shadow-[0_0_15px_rgba(77,208,225,0.2)] backdrop-blur-sm">
            <h4 className="text-cyan-300 text-lg mb-4 border-b border-cyan-400/30 pb-2">{`// ${block.title}`}</h4>
            <ul className="space-y-2 list-none p-0">
                {Array.isArray(block.items) && block.items.map((item, index) => (
                    <li key={index} className="log-line">
                        <span className="text-green-400">{item.label}</span>
                        <span className="ml-2 text-gray-200">{item.value}</span>
                        {Array.isArray(item.subItems) && (
                            <ul className="list-none p-0 mt-1 pl-6">
                                {item.subItems.map((subItem: string, subIndex: number) => (
                                    <li key={subIndex} className="log-line text-gray-400 before:content-['>_'] before:text-green-400 before:mr-2">
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}

            </ul>
        </div>
    )
}