import React from 'react';

const CongratsMessage = ({ onDone }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
                <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Congratulations!</h2>
                <p className="text-lg mb-6">
                    You've successfully entered to the App!
                </p>
                <button
                    onClick={onDone}
                    className="px-6 py-2 bg-purple-600 text-white rounded-3xl hover:bg-pink-600 transition"
                >
                    Okay!
                </button>
            </div>
        </div>
    );
};

export default CongratsMessage;
