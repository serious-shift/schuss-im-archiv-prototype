import { useState, useEffect } from "react";
import { preloadImage, preloadVideo } from "../utils/assetLoader";

export const useAssetLoader = (images: string[], videos: string[]) => {
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;

        const loadAssets = async () => {
            const totalAssets = images.length + videos.length;
            let loadedCount = 0;

            const incrementProgress = () => {
                loadedCount++;
                if (isMounted) setProgress(Math.round((loadedCount / totalAssets) * 100));
            };

            const imagePromises = images.map((src) =>
                preloadImage(src).then(() => { incrementProgress(); return src; })
            );

            const videoPromises = videos.map((src) =>
                preloadVideo(src).then(() => { incrementProgress(); return src; })
            );

            try {
                await Promise.all([...imagePromises, ...videoPromises]);
                if (isMounted) setLoaded(true);
            } catch (error) {
                console.error("Error loading assets:", error);
                if (isMounted) setLoaded(true); 
            }
        };

        loadAssets();

        return () => { isMounted = false; };
    }, [images, videos]);

    return { loaded, progress };
}