import { NarrativeBlock } from "@/src/types";

type NarrativeBlockViewProps = {
    block: NarrativeBlock;
};

export default function NarrativeBlockView({ block }: NarrativeBlockViewProps) {
    return (
        <p className="anim-child text-lg md:text-xl leading-relaxed">
            {block.text}
        </p>
    )
}