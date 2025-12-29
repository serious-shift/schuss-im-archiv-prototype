import { NavigationBlock } from '@/src/types';

type NavigationBlockViewProps = {
    block: NavigationBlock;
    onNavigate: (targetSceneId: string) => void;
};

export default function NavigationBlockView({ block, onNavigate }: NavigationBlockViewProps) {
    return (
        <div className="anim-child text-center pt-4">
            <button
                onClick={() => onNavigate(block.targetSceneId)}
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
                {block.buttonText}
            </button>
        </div>
    )
}