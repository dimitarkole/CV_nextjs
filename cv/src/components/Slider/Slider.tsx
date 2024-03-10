"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
    imageClassName?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, imageClassName = "h-dvh w-full" }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative">
            <button
                className="absolute inset-y-0 left-0 z-10 px-4 py-2 bg-gray-800 text-white opacity-75 hover:opacity-100"
                onClick={goToPreviousSlide}
            >
                &lt;
            </button>
            <button
                className="absolute inset-y-0 right-0 z-10 px-4 py-2 bg-gray-800 text-white opacity-75 hover:opacity-100"
                onClick={goToNextSlide}
            >
                &gt;
            </button>
            <div className={imageClassName }>
                <Image
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
        </div>
    );
};

export default ImageSlider;
