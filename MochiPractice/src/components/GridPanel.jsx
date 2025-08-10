import React from 'react';

const colors = {
    blue: {
        activeBg: 'bg-blue-500',
        activeText: 'text-white',
        hoverBg: 'hover:bg-blue-100',
    },
    red: {
        activeBg: 'bg-red-500',
        activeText: 'text-white',
        hoverBg: 'hover:bg-red-100',
    },
    green: {
        activeBg: 'bg-green-500',
        activeText: 'text-white',
        hoverBg: 'hover:bg-green-100',
    },
    purple:{
        activeBg: 'bg-purple-500',
        activeText: 'text-white',
        hoverBg: 'hover:bg-purple-100',
    },
    pink:{
        activeBg: 'bg-pink-500',
        activeText: 'text-white',
        hoverBg: 'hover:bg-pink-100',
    },
    orange:{
        activeBg: 'bg-orange-500',
        activeText: 'text-white',
        hoverBg: 'hover:bg-orange-100',
    }
    // add more themes as needed
};

const GridPanel = ({ messages, currentIndex, setCurrentIndex, theme }) => {
    const color = colors[theme] || colors.blue;

    return (
        <div className="bg-white rounded shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">🗂️ Jump to Message</h2>
            <div className="grid grid-cols-3 gap-2 shadow-md p-4 max-h-32 overflow-y-auto">
                {messages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`
              text-sm p-2 rounded transition
              ${color.hoverBg}
              ${currentIndex === idx ? `${color.activeBg} ${color.activeText}` : 'bg-gray-100'}
            `}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GridPanel;
