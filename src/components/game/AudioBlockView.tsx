/*import { useState } from 'react';
import { AudioBlock } from '@/src/types';
import ContentBlock from './ContentBlock';

type AudioBlockViewProps = {
    block: AudioBlock;
    onAudioPlay?: () => void;
}

export default function AudioBlockView({ block, onAudioPlay }: AudioBlockViewProps) {
    const [hasBeenPlayed, setHasBeenPlayed] = useState(false);

    const handlePlay = () => {
        if (!hasBeenPlayed && onAudioPlay) {
            onAudioPlay();
            setHasBeenPlayed(true);
        }
    }

    return (
        <ContentBlock>
            <div className="p-4 flex flex-col items-center gap-2">
                <audio controls src={block.src} onPlay={handlePlay} className="w-full rounded-lg bg-gray-800">
                    Your browser does not support the audio element.
                </audio>
                {block.caption && <p className="text-sm text-gray-400 italic mt-2">{block.caption}</p>}
            </div>
        </ContentBlock>
    )
}*/