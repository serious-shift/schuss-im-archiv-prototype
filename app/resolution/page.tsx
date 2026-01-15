import ResolutionClient from "../../src/components/ResolutionClient";
import { Suspense } from "react";

export default function ResolutionPage() {
    return (
        <Suspense fallback={<div className="bg-black h-screen text-white flex items-center justify-center">Lade Analyse...</div>}>
            <ResolutionClient />
        </Suspense>
    );
}