export const preloadImage = (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = (err) => reject(err);
    });
};

export const preloadVideo = (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
        video.muted = true;
        video.playsInline = true;

        video.onloadeddata = () => resolve(src);
        video.onerror = (err) => reject(err);

        video.load();
    });
};