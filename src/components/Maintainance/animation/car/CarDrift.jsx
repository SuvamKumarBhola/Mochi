const CarDrift = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        <div className="absolute bottom-0 w-full h-4 bg-gray-700"><div className="w-full h-full border-t-2 border-dashed border-gray-500 animate-slide-left"></div></div>
        <div className="animate-drive relative w-48 h-24" style={{ transformOrigin: 'center' }}>
            <div className="animate-drift-tilt">
                <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl">
                    <path d="M10,70 L20,50 L60,40 L140,40 L170,50 L180,70 L180,85 L10,85 Z" fill="#8b5cf6" />
                    <path d="M35,50 L65,45 L130,45 L160,55 L130,55 L35,50" fill="#1f2937" />
                    <circle cx="20" cy="85" r="8" fill="#e5e7eb" opacity="0.6" className="animate-ping" />
                    <circle cx="45" cy="85" r="12" fill="#111" className="animate-spin-fast" />
                    <circle cx="155" cy="85" r="12" fill="#111" className="animate-spin-fast" />
                </svg>
            </div>
        </div>
    </div>
);

export default CarDrift;