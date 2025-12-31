import React from 'react';
import { Calendar } from 'lucide-react';

import themeStyles from '../utils/themeStyles';

const Colon = ({ theme }) => (
    <span
        className={`text-2xl md:text-5xl font-bold mx-2 ${themeStyles[theme].colon}`}
    >
        :
    </span>
);

const TimerDisplay = ({ timeLeft, theme }) => {
    const units = ['days', 'hours', 'minutes', 'seconds'];

    return (
        <div className="mb-10">
            <div className="flex flex-wrap justify-center items-center">
                {units.map((unit, idx) => (
                    <React.Fragment key={unit}>
                        <div className="flex flex-col items-center mx-2">
                            <div
                                className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 flex items-center justify-center ${themeStyles[theme].timerBlock}`}
                            >
                                <span className="text-xl md:text-3xl font-mono font-bold">
                                    {String(timeLeft[unit]).padStart(2, '0')}
                                </span>
                            </div>
                            <span
                                className={`mt-2 text-xs uppercase ${themeStyles[theme].label}`}
                            >
                                {unit}
                            </span>
                        </div>
                        {idx < units.length - 1 && <Colon theme={theme} />}
                    </React.Fragment>
                ))}
            </div>

            <div
                className={`mt-6 flex items-center justify-center gap-2 text-sm ${themeStyles[theme].textSub}`}
            >
                <Calendar size={16} />
                <span>Target Date: August 9, 2026</span>
            </div>
        </div>
    );
};

export default TimerDisplay;
