"use client";

import { Hotspot as HotspotType } from '@/src/types';
import Image from 'next/image';

type HotspotProps = {
    hotspot: HotspotType;
    onClick: (hotspot: HotspotType) => void;
};

export default function Hotspot({ hotspot, onClick }: HotspotProps) {
    const transformation = [
       `rotate(${hotspot.rotation || 0}deg)`,
        `skewX(${hotspot.skewX || 0}deg)`,
        `skewY(${hotspot.skewY || 0}deg)` 
    ].join(' ');

    return (
        <button
            onClick={() => onClick(hotspot)}
            className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
            style={{
                left: `${hotspot.position.x}%`,
                top: `${hotspot.position.y}%`,
            }}
            aria-label={`Hinweis: ${hotspot.title}`}
        >
            <Image
                src={hotspot.image}
                alt={hotspot.title}
                width={80}
                height={80}
                className="object-contain drop-shadow-lg"
                style={{
                    transform: transformation,
                }}
            />
        </button>
    );
}
