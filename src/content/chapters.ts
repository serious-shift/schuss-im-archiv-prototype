import { Chapter } from "@/src/types";

export const chapters: Chapter[] = [
    {
        id: "1",
        title: "Einführung",
        scenes: [
            {
                id: "scene-0",
                title: "Rolle als Ermittler:in",
                video: "/videos/scene-0-transition-clean.mp4",
                content: [
                    {
                        type: 'narrative',
                        text: "Willkommen, Kommissar:in."
                    },
                    {
                        type: 'narrative',
                        text: "Ihr Team hat Sie zum Staatsarchiv für Zeitgeschichte gerufen. Der leitende Archivar, Dr. Martin Heller (58), wurde gestern Abend tot in seinem Büro aufgefunden. "
                    },
                    {
                        type: 'narrative',
                        text: "Die E-Mail ist kurz und prägnant: Zitat: „Dr. Martin Heller, 58, leitender Archivar im Staatsarchiv für Zeitgeschichte, wurde gestern Abend tot aufgefunden. Ermittlungen eingeleitet. Ihre Anwesenheit wird im Archiv erwartet. Keine sichtbaren Einbruchsspuren. Wir warten auf Sie."
                    }
                ]
            }
        ],
    }
]