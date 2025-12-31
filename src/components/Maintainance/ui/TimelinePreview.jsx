import React from 'react';
import { ArrowRight } from 'lucide-react';

import { TIMELINE_DATA, getPhase } from '../utils/timeLineMatrix';
import themeStyles from '../utils/themeStyles';

const TimelinePreview = ({ monthsRemaining, theme }) => {
    const currentPhase = getPhase(monthsRemaining);
    const nextPhase = getPhase(monthsRemaining - 3);

    const current = TIMELINE_DATA[currentPhase][theme];
    const next = TIMELINE_DATA[nextPhase][theme];

    const CurrentIcon = current.icon;
    const NextIcon = next.icon;

    return (
        <div
            className={`w-full max-w-2xl mt-6 p-6 rounded-xl border ${themeStyles[theme].accentBorder} ${themeStyles[theme].timelineBg}`}
        >
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-full ${themeStyles[theme].buttonSelected}`}>
                        <CurrentIcon size={24} />
                    </div>
                    <div>
                        <p className="text-xs uppercase opacity-70">Current Phase</p>
                        <h3 className="text-lg font-bold">{current.label}</h3>
                        <p className="text-sm opacity-60">{current.desc}</p>
                    </div>
                </div>

                <ArrowRight className="opacity-40" />

                <div className="flex items-center gap-4 opacity-70">
                    <div className="text-right">
                        <p className="text-xs uppercase">Next Phase</p>
                        <h3 className="text-base font-bold">{next.label}</h3>
                    </div>
                    <div className="p-3 rounded-full border-2 border-dashed">
                        <NextIcon size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelinePreview;
