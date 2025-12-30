const MochiBounce = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute bottom-8 w-24 h-4 bg-pink-300/40 rounded-full blur-sm animate-shadow-pulse-fast"></div>
        <div className="animate-shake-crazy relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                <path d="M10,80 Q10,10 50,10 Q90,10 90,80 Q90,95 50,95 Q10,95 10,80" fill="#f9a8d4" />
                <path d="M30,50 L40,55 M70,50 L60,55" stroke="#444" strokeWidth="3" strokeLinecap="round" />
                <path d="M40,70 Q50,60 60,70" stroke="#444" strokeWidth="2" fill="none" />
            </svg>
        </div>
    </div>
);

export default MochiBounce;