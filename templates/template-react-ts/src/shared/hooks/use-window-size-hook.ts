import { useEffect, useState } from 'react';

type Size = {
    width: number;
    height: number;
};

/**
 Custom hook that returns the dimensions of the current viewport when resized
 @returns values for width and height
 @default windowSize values would be width:1440 and height:900
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<Size>({
        width: 1440,
        height: 900,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}
