const MochiIdle = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute bottom-8 w-24 h-4 bg-gray-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="animate-bounce-soft relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                <path d="M10,80 Q10,20 50,20 Q90,20 90,80 Q90,95 50,95 Q10,95 10,80" fill="#fdf2f8" />
                <circle cx="35" cy="55" r="4" fill="#444" />
                <circle cx="65" cy="55" r="4" fill="#444" />
                <path d="M45,65 Q50,68 55,65" stroke="#f9a8d4" strokeWidth="2" fill="none" />
            </svg>
        </div>
    </div>
);

export default MochiIdle;