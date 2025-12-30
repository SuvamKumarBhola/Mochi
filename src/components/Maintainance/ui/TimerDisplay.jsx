const TimerDisplay = ({ timeLeft, theme, activeStyle }) => (
    <div className="mb-8">
        <div className="flex flex-wrap justify-center items-start">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center mx-1 md:mx-3">
                    <div className={`flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${themeStyles[theme].timerBlock}`}>
                        <span className="text-xl md:text-3xl font-mono font-bold">{String(value).padStart(2, '0')}</span>
                    </div>
                    <span className={`mt-2 text-[10px] md:text-xs font-semibold tracking-wider uppercase ${themeStyles[theme].label}`}>{unit}</span>
                </div>
            ))}
        </div>
        <div className={`mt-6 flex items-center justify-center gap-2 text-sm font-medium ${activeStyle.textSub}`}>
            <Calendar size={16} /><span>Target Date: August 9, 2026</span>
        </div>
    </div>
);
export default TimerDisplay;