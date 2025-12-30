const CarRace = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute bottom-0 w-full h-4 bg-gray-700"><div className="w-full h-full border-t-2 border-dashed border-yellow-500 animate-slide-fast"></div></div>
        <div className="animate-vibrate-move relative w-48 h-24">
            <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl">
                <path d="M10,70 L30,50 L80,45 L140,45 L180,60 L190,70 L190,85 L10,85 Z" fill="#ef4444" />
                <path d="M35,50 L65,45 L130,45 L160,55 L130,55 L35,50" fill="#1f2937" />
                <path d="M5,75 Q-10,75 5,85" fill="#f59e0b" className="animate-flicker" />
                <circle cx="45" cy="85" r="12" fill="#111" className="animate-spin-fast" />
                <circle cx="155" cy="85" r="12" fill="#111" className="animate-spin-fast" />
            </svg>
        </div>
        <div className="absolute top-8 right-12 text-red-500 font-black italic animate-pulse transform -rotate-12">MAX SPEED</div>
    </div>
);

export default CarRace;