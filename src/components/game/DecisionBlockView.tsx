import { DecisionBlock } from '@/src/types';

type DecisionBlockViewProps = {
    block: DecisionBlock;
    onNavigate: (targetSceneId: string) => void;
};

export default function DecisionBlockView({ block, onNavigate }: DecisionBlockViewProps) {
    return (
        <div className="anim-child text-center p-4 space-y-6">
            <p className="text-xl italic text-gray-300">
                {block.question}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                {block.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => onNavigate(choice.targetSceneId)}
                        className="bg-gray-800 hover:bg-red-700 border border-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex-1 text-left"
                    >
                        {choice.text}
                    </button>
                ))}

            </div>
        </div>
    )
}