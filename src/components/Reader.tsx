import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

const pages: string[] = [
    'pages/0.0.png', 'pages/0.2.png', 'pages/0.3.png', 'pages/0.4.png', 'pages/0.5.png', 'pages/0.6.png', 'pages/0.7.png', 'pages/0.8.png', 'pages/0.9.png',
    'pages/1.png', 'pages/2.png', 'pages/2.5.png', 'pages/3.png', 'pages/4.png', 'pages/5.png', 'pages/6.png', 'pages/7.png', 'pages/8.png', 'pages/9.png',
    'pages/10.png', 'pages/11.png', 'pages/12.png', 'pages/13.png', 'pages/14.png', 'pages/15.png', 'pages/16.png', 'pages/17.png', 'pages/18.png', 'pages/19.png',
    'pages/20.png', 'pages/21.png', 'pages/21.png', 'pages/23.png', 'pages/24.png', 'pages/25.png', 'pages/26.png', 'pages/27.png', 'pages/28.png', 'pages/29.png',
    'pages/30.png', 'pages/31.png', 'pages/32.png', 'pages/33.png', 'pages/34.png', 'pages/35.png', 'pages/37.png', 'pages/38.png', 'pages/39.png',
    'pages/40.png',
    'pages/41.png',
    'pages/42.png',
    'pages/43.png',
    'pages/44.png',
    'pages/45.png',
    'pages/46.png',
    'pages/49.png',
    'pages/50.png',
    'pages/51.png',
    'pages/52.png',
    'pages/53.png',
    'pages/54.png',
    'pages/55.png',
    'pages/56.png',
    'pages/57.png',
    'pages/58.png',
    'pages/59.png',
    'pages/60.png',
    'pages/61.png',
    'pages/62.png',
    'pages/63.png',
    'pages/64.png',
    'pages/65.png',
    'pages/66.png',
    'pages/67.png',
    'pages/68.png',
    'pages/69.png',
    'pages/71.png',
    'pages/72.png',
    'pages/73.png',
    'pages/74.png',
    'pages/75.png',
    'pages/76.png',
    'pages/77.png',
    'pages/78.png',
    'pages/79.png',
    'pages/80.png',
    'pages/81.png',
    'pages/82.png',
    'pages/85.png',
    'pages/86.png',
    'pages/87.png',
    'pages/88.png',
    'pages/89.png',
    'pages/90.png',
    'pages/91.png',
    'pages/92.png',
    'pages/93.png',
    'pages/94.png',
    'pages/95.png',
    'pages/96.png',
    'pages/97.png',
    'pages/99.png',
    'pages/100.png',
    'pages/101.png',
    'pages/102.png',
    'pages/103.png',
    'pages/104.png',
    'pages/105.png',
    'pages/106.png',
    'pages/107.png',
    'pages/108.png',
    'pages/110.png',
    'pages/111.png',
    'pages/112.png',
    'pages/113.png',
    'pages/114.png',
    'pages/115.png',
    'pages/116.png',
    'pages/117.png',
    'pages/118.png',
    'pages/119.png',
    'pages/120.png',
    'pages/121.png',
    'pages/122.png',
    'pages/123.png',
    'pages/126.png',
    'pages/127.png',
    'pages/128.png',
    'pages/129.png',
    'pages/130.png',
    'pages/131.png',
    'pages/132.png'
];

const Reader: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth * 0.8); // Default to 80% of the viewport width
    const [height, setHeight] = useState<number>(width * 1.5); // Maintain a 2:3 aspect ratio

    // Loading states
    // const [loading, setLoading] = useState(false);
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
            {/* {loading ? (
                <div className="flex items-center justify-center h-full text-lg">
                    Loading...
                </div>
            ) : ( */}
                <div className="h-full w-full flex justify-center drop-shadow-2xl animate-pan">
                    <HTMLFlipBook width={width} height={height}>
                        {pages.map((image, index) => (
                            <div
                                key={index}
                                className="bg-[#f5e7c4] flex justify-center items-center">
                                <img
                                    src={image}
                                    alt={`Page ${index + 1}`}
                                    className="mix-blend-multiply"
                                    onError={() => console.error(`Failed to load image: ${image}`)} />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </div>
            {/* )} */}
        </div>
    );
};

export default Reader;
