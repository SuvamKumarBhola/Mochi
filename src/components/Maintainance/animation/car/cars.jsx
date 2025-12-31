import React from 'react';

const CarImageBase = ({ src, alt, speed }) => (
    <img src={src} alt={alt} className="h-40 animate-drive-image" />
);

export const CarBMW = () => <CarImageBase src="/BMW-removebg-preview.png" alt="BMW" />;
export const CarDodge = () => <CarImageBase src="/camaro.png" alt="Muscle" />;
export const CarLambo = () => <CarImageBase src="/ferrari.png" alt="Super" speed="fast" />;
export const CarBugatti = () => <CarImageBase src="/green.png" alt="Hyper" speed="fast" />;
export const CarPagani = () => <CarImageBase src="/vector.png" alt="Final" speed="fast" />;
