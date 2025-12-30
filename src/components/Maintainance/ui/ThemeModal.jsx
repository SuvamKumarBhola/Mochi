const ThemeModal = ({ isOpen, onClose, currentTheme, setTheme }) => {
    if (!isOpen) return null;
    const activeStyle = themeStyles[currentTheme];
    const modalColors = currentTheme === 'car' ? { iconBg: 'bg-cyan-500/20 text-cyan-400', title: 'text-white' } : { iconBg: 'bg-pink-100 text-pink-500', title: 'text-gray-800' };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl border-2 transform transition-all scale-100 ${activeStyle.modalBg} ${activeStyle.accentBorder}`}>
                <div className="absolute top-4 right-4"><button onClick={onClose}><X size={20} className={modalColors.title} /></button></div>
                <div className="text-center mb-8">
                    <div className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center ${modalColors.iconBg}`}><Clock size={24} /></div>
                    <h2 className={`text-2xl font-bold mb-2 ${modalColors.title}`}>Appearance Settings</h2>
                    <p className="text-sm opacity-70">Switching themes will show the alternative animation for the current time phase.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button onClick={() => setTheme('car')} className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${currentTheme === 'car' ? 'border-cyan-500 bg-cyan-500/10' : 'bg-gray-100'}`}>
                        <Car size={32} className={`mb-2 ${currentTheme === 'car' ? 'text-cyan-400' : 'text-gray-500'}`} />
                        <span className={`font-bold ${currentTheme === 'car' ? 'text-cyan-400' : 'text-gray-600'}`}>Car Mode</span>
                    </button>
                    <button onClick={() => setTheme('mochi')} className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${currentTheme === 'mochi' ? 'border-pink-400 bg-pink-100' : 'bg-gray-100'}`}>
                        <Cookie size={32} className={`mb-2 ${currentTheme === 'mochi' ? 'text-pink-500' : 'text-gray-400'}`} />
                        <span className={`font-bold ${currentTheme === 'mochi' ? 'text-pink-600' : 'text-gray-400'}`}>Mochi Mode</span>
                    </button>
                </div>
                <button onClick={onClose} className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg ${activeStyle.buttonSelected}`}>Confirm</button>
            </div>
        </div>
    );
};

export default ThemeModal;