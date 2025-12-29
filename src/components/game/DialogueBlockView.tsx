import { DialogueBlock } from "@/src/types";

type DialogueBlockViewProps = {
    block: DialogueBlock;
};

export default function DialogueBlockView({ block }: DialogueBlockViewProps) {
    return (
      <div className="anim-child bg-black/30 p-4 rounded-lg">
        {block.lines.map((line, index) => (
            <p key={index} className="mb-2">
                <span className="font-bold text-red-400">{line.character}</span>{" "}
                <span className="italic">{line.text}</span>
            </p>
        ))}
      </div>                          
    );
}
