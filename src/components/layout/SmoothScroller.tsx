"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroller() {
    useEffect(() => {
        const lenis = new Lenis({
            wrapper: document.body,
        });

        (window as any).lenis = lenis; 

        lenis.on('scroll', ScrollTrigger.update);

        const tickerCallback = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        // cleanup function
        return () => {
            delete (window as any).lenis;
            gsap.ticker.remove(tickerCallback);
            lenis.destroy();
        };
    }, []);

    return null;
}