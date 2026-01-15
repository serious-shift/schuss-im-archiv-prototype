import { InfoBlock } from '@/src/types';

type InfoBlockViewProps = {
    block: InfoBlock;
};

export default function InfoBlockView({ block }: InfoBlockViewProps) {
    return (
        <div className="text-center p-4">
            <p className="text-xl text-gray-300">
                {block.text}
            </p>
        </div>
    );
}

