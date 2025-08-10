import React, { useState } from 'react';

const EntryPanel = ({ onSubmit }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTheme, setSelectedTheme] = useState('blue');

    const handleSubmit = () => {
        if (!selectedCategory) {
            alert('Please select a category.');
            return;
        }
        onSubmit(selectedCategory, selectedTheme);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
            <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-md ">
                <h2 className="text-2xl font-bold mb-6 text-center">👋 Irasshaimase!</h2>

                {/* Category Selection */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Select Category</label>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setSelectedCategory('cars')}
                            className={`flex-1 py-2 rounded-xl border 
                ${selectedCategory === 'cars' ? 'bg-black text-white' : 'bg-gray-100'}
              `}
                        >
                            🚗 Cars
                        </button>
                        <button
                            onClick={() => setSelectedCategory('chibi')}
                            className={`flex-1 py-2 rounded-xl border 
                ${selectedCategory === 'chibi' ? 'bg-pink-500 text-white' : 'bg-gray-100'}
              `}
                        >
                            🐣 Chibi
                        </button>
                    </div>
                </div>

                {/* Theme Selection */}
                <div className="mb-6">
                    <label className="block font-medium mb-2">Choose Theme Color</label>
                    <select
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                        className="w-full p-2 border rounded-xl"
                    >
                        <option value="blue">Blue</option>
                        <option value="pink">Pink</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    className="w-full py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600"
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default EntryPanel;
