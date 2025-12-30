const TimelinePreview = ({ monthsRemaining, theme, activeStyle }) => {
    const currentPhase = getPhase(monthsRemaining);
    const nextPhase = getPhase(monthsRemaining - 4); // Logic to look ahead to next phase

    const currentData = TIMELINE_DATA[currentPhase][theme];
    // Safe fallback if next phase undefined
    const nextData = TIMELINE_DATA[nextPhase] ? TIMELINE_DATA[nextPhase][theme] : TIMELINE_DATA.early[theme];

    const CurrentIcon = currentData.icon;
    const NextIcon = nextData.icon;

    return (
        <div className={`w-full max-w-2xl mt-6 p-6 rounded-xl border ${activeStyle.accentBorder} ${themeStyles[theme].timelineBg} backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500`}>
            {/* Current */}
            <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                <div className={`p-4 rounded-full ${activeStyle.buttonSelected} shadow-lg flex-shrink-0`}>
                    <CurrentIcon size={24} className="animate-pulse" />
                </div>
                <div className="text-left">
                    <p className={`text-xs uppercase font-bold tracking-wider opacity-70 ${activeStyle.textSub}`}>Current Phase</p>
                    <h3 className={`text-xl font-bold ${activeStyle.textMain}`}>{currentData.label}</h3>
                    <p className={`text-sm opacity-60 ${activeStyle.textMain}`}>{currentData.desc}</p>
                </div>
            </div>

            {/* Divider */}
            <div className={`hidden md:flex items-center justify-center opacity-50 ${activeStyle.textSub}`}><ArrowRight size={20} /></div>
            <div className="w-full h-px bg-current opacity-10 md:hidden"></div>

            {/* Next */}
            <div className="flex items-center gap-4 flex-1 justify-end w-full md:w-auto opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-right">
                    <p className={`text-xs uppercase font-bold tracking-wider ${activeStyle.textSub}`}>Next Phase</p>
                    <h3 className={`text-base font-bold ${activeStyle.textMain}`}>{nextData.label}</h3>
                </div>
                <div className={`p-3 rounded-full border-2 border-dashed ${activeStyle.accentBorder} ${activeStyle.textMain}`}><NextIcon size={20} /></div>
            </div>
        </div>
    );
};

export default TimelinePreview;