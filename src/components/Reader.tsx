import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

const pages: string[] = [
    'pages/0.2.png','pages/0.3.png','pages/0.4.png','pages/0.5.png','pages/0.6.png','pages/0.7.png','pages/0.8.png','pages/0.9.png',
    'pages/1.png','pages/2.png','pages/2.5.png','pages/3.png','pages/4.png','pages/5.png','pages/6.png','pages/7.png','pages/8.png','pages/9.png',
    'pages/10.png','pages/11.png','pages/12.png','pages/13.png','pages/14.png','pages/15.png','pages/16.png','pages/17.png','pages/18.png','pages/19.png',
    'pages/20.png','pages/21.png','pages/21.png','pages/23.png','pages/24.png','pages/25.png','pages/26.png','pages/27.png','pages/28.png','pages/29.png',
    'pages/30.png','pages/31.png','pages/32.png','pages/33.png','pages/34.png','pages/35.png','pages/36.png','pages/37.png','pages/38.png'
];

const Reader: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth * 0.8); // Default to 80% of the viewport width
    const [height, setHeight] = useState<number>(width * 1.5); // Maintain a 2:3 aspect ratio

    // Loading states
    const [loading, setLoading] = useState(false);
    // const [loadedPages, setLoadedPages] = useState<number>(0);

    // useEffect(() => {
    //     // Check if all pages are loaded
    //     if (loadedPages === pages.length) {
    //         setLoading(false); // All images are loaded
    //     }
    // }, [loadedPages]);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = Math.min(window.innerWidth * 0.8, 600); // Limit the max width to 600px
            setWidth(newWidth);
            setHeight(newWidth * 1.5);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const handlePageLoad = () => {
    //     console.log('loaded');
    //     setLoadedPages((prev) => prev + 1); // Increment loaded image count
    // };

    return (
        <div className="h-screen w-screen overflow-hidden">
            {loading ? (
                <div className="flex items-center justify-center h-full text-lg">
                    Loading...
                </div>
            ) : (
                <div className="h-full w-full flex justify-center drop-shadow-2xl">
                    <HTMLFlipBook width={width} height={height}>
                        {pages.map((image, index) => (
                            <div
                                key={index}
                                className="page bg-[#f5e7c4] flex justify-center items-center">
                                <img
                                    src={image}
                                    alt={`Page ${index + 1}`}
                                    className="mix-blend-multiply"
                                    onError={() => console.error(`Failed to load image: ${image}`)}/>
                            </div>
                        ))}
                    </HTMLFlipBook>
                </div>
            )}
        </div>
    );
};

export default Reader;
