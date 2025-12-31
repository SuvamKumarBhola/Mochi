import { Clock, X, Car, Cookie } from 'lucide-react';

import themeStyles from '../utils/themeStyles';

const ThemeModal = ({ isOpen, onClose, currentTheme, setTheme }) => {
    if (!isOpen) return null;

    const active = themeStyles[currentTheme];

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center p-4">
            <div
                className={`relative w-full max-w-md p-8 rounded-2xl border-2 ${active.modalBg}`}
            >
                <button className="absolute top-4 right-4" onClick={onClose}>
                    <X />
                </button>

                <div className="text-center mb-6">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-opacity-20">
                        <Clock />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                        Maintenance Ongoing
                    </h2>
                    <p className="text-sm italic opacity-80">
                        Please wait patiently — something special is coming.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={() => setTheme('car')}
                        className={`p-4 rounded-xl border-2 ${currentTheme === 'car' && 'border-cyan-500'
                            }`}
                    >
                        <Car className="mx-auto mb-2" />
                        Car Mode
                    </button>

                    <button
                        onClick={() => setTheme('mochi')}
                        className={`p-4 rounded-xl border-2 ${currentTheme === 'mochi' && 'border-pink-400'
                            }`}
                    >
                        <Cookie className="mx-auto mb-2" />
                        Mochi Mode
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className={`w-full py-3 rounded-xl font-bold ${active.buttonSelected}`}
                >
                    Enter Site
                </button>
            </div>
        </div>
    );
};

export default ThemeModal;
