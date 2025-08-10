import React, { useEffect } from 'react';


import carTopLeft from '../assets/svgs/cars/bmwx6.svg';
import carBottomRight from '../assets/svgs/cars/bmw1.svg';
import chibiTopLeft from '../assets/svgs/chibis/shine_b1.svg';
import chibiBottomRight from '../assets/svgs/chibis/shine_b2.svg';

const MessageBoard = ({ category, messages, index, setIndex }) => {
 
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [messages.length, setIndex]);

   
    const icons = category === 'cars'
        ? { topLeft: carTopLeft, bottomRight: carBottomRight }
        : { topLeft: chibiTopLeft, bottomRight: chibiBottomRight };

    return (
        <div className="relative bg-white shadow-lg rounded-lg p-6 text-center w-96 h-48 flex flex-col justify-center items-center overflow-hidden">
            {/* Top-left icon */}
            <img
                src={icons.topLeft}
                alt="Top Left Icon"
                className="absolute top-2 left-2 w-16 h-16 "
            />

            {/* Message */}
            <p className="text-xl font-semibold">{messages[index]}</p>

            {/* Bottom-right icon */}
            <img
                src={icons.bottomRight}
                alt="Bottom Right Icon"
                className="absolute bottom-2 right-2 w-16 h-16 "
            />
        </div>
    );
};

export default MessageBoard;
