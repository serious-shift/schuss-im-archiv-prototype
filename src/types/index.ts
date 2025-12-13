export type Scene = {
    id: string;
    title: string;
    image?: string;
    video?: string;
    content: SceneContent[];
}

export type Chapter = {
    id: string; 
    title: string; 
    scenes: Scene[];
}

export type SceneContent = NarrativeBlock | DialogueBlock;

export type NarrativeBlock = {
    type: "narrative";
    text: string;
}

export type DialogueBlock = {
    type: "dialogue";
    lines: DialogueLine[];
}

export type DialogueLine = {
    character: string;
    text: string;
}