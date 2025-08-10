import React, { useEffect, useState, useCallback } from 'react';

const GalleryViewer = ({ category }) => {
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let importedImages;

        if (category === 'cars') {
            importedImages = import.meta.glob('../assets/gallery/Cars/*.{jpg,jpeg,png,gif}', {
                eager: true,
                import: 'default',
            });
        } else if (category === 'chibi') {
            importedImages = import.meta.glob('../assets/gallery/Mochi/*.{jpg,jpeg,png,gif}', {
                eager: true,
                import: 'default',
            });
        } else {
            importedImages = {}; // fallback empty
        }

        const imageList = Object.values(importedImages);
        setImages(imageList);
        setIndex(0); // reset when category changes
    }, [category]);

    const next = useCallback(() => {
        if (images.length > 0) {
            setIndex((prev) => (prev + 1) % images.length);
        }
    }, [images.length]);

    const prev = useCallback(() => {
        if (images.length > 0) {
            setIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    }, [images.length]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, next, prev]);

    if (images.length === 0) return null;

    return (
        <>
            {/* Floating Preview Box */}
            <div
                className="fixed bottom-4 left-4 w-24 h-24 p-1 border-2 border-white shadow-lg bg-gray-200 rounded cursor-pointer z-30 hover:scale-105 transition-transform"
                onClick={() => {
                    setIsOpen(true);
                    setIndex(0);
                }}
            >
                <div className="w-full h-full grid grid-cols-2 gap-1">
                    {images.slice(0, 2).map((img, i) => (
                        <img key={i} src={img} alt={`preview ${i}`} className="object-cover rounded-sm" loading="lazy" />
                    ))}
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative bg-white rounded-lg p-4 w-[90%] max-w-md shadow-xl"
                        onClick={(e) => e.stopPropagation()} // stop closing on content click
                    >
                        {/* Lazy-loaded Main Image */}
                        <img
                            src={images[index]}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto rounded object-contain"
                            loading="lazy"
                            onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found')}
                        />

                        {/* Current Position */}
                        <p className="text-center text-sm text-gray-500 mt-2 mb-1">
                            {index + 1} of {images.length}
                        </p>

                        {/* Hover Controls */}
                        <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={prev}
                                className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full px-2 py-1"
                            >
                                ⬅️
                            </button>
                            <button
                                onClick={next}
                                className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full px-2 py-1"
                            >
                                ➡️
                            </button>
                        </div>

                        {/* Close Button (fixed click issue) */}
                        <button
                            className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                            onClick={(e) => {
                                e.stopPropagation(); // prevent background close firing
                                setIsOpen(false);
                            }}
                        >
                            ❌ Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryViewer;
