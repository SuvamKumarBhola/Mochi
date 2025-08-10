import React from 'react';

const NavigationPanel = ({ category, theme }) => {
    const themeClasses = {
        red: 'bg-red-300',
        blue: 'bg-blue-300',
        green: 'bg-green-500',
        yellow: 'bg-yellow-400',
        purple: 'bg-purple-300',
        tress:''
    };
    const texts =
        category === 'cars'
            ? ['Vroom', 'into', 'the', 'Fast', 'Lane', '🏎️']
            : ['A', 'Warm', 'Welcome', 'to', 'my', 'Mochi', '😁'];

    return (
        <div className={`w-full fixed top-0 ${themeClasses[theme] || 'bg-gray-200'} text-black flex justify-center gap-2 py-4 shadow-md z-50`}>
            {texts.map((text, index) => (
                <span
                    key={index}
                    className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300 cursor-default"
                >
                    {text}
                </span>
            ))}
        </div>
    );
};

export default NavigationPanel;
