const MochiPanic = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute bottom-8 w-24 h-4 bg-red-300/40 rounded-full blur-sm animate-shadow-pulse-fast"></div>
        <div className="animate-shake-crazy relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                <path d="M10,80 Q10,10 50,10 Q90,10 90,80 Q90,95 50,95 Q10,95 10,80" fill="#fda4af" />
                <circle cx="35" cy="50" r="5" fill="#fff" />
                <circle cx="35" cy="50" r="2" fill="#000" />
                <circle cx="65" cy="50" r="5" fill="#fff" />
                <circle cx="65" cy="50" r="2" fill="#000" />
                <path d="M40,75 Q45,70 50,75 Q55,80 60,75" stroke="#444" strokeWidth="2" fill="none" />
                <path d="M85,30 Q85,40 90,45" stroke="#3b82f6" strokeWidth="2" fill="none" className="animate-bounce" />
            </svg>
        </div>
        <div className="absolute top-4 text-pink-600 font-bold animate-pulse">ALMOST READY!</div>
    </div>
);

export default MochiPanic;