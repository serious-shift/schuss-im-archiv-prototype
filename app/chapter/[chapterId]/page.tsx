import { chapters } from "@/src/content/chapters";
import SceneSection from "@/src/components/SceneSection";
import { notFound } from "next/navigation";

type ChapterPageProps = {
    params: {
        chapterId: string;
    }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
    const { chapterId } = await params;

    // find chapter by id
    const chapter = chapters.find((c) => c.id === chapterId);
    
    if (!chapter) {
        notFound();
    }

    return (
        <main>
            {chapter.scenes.map((scene) => (
                <SceneSection
                    key={scene.id}
                    id={scene.id}
                    title={scene.title}
                    content={scene.content}
                    video={scene.video}
                />
            ))}
        </main>
    );
}