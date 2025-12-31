import React, { useState, useEffect } from 'react';
import { Settings, X, Calendar, Clock, Car, Cookie, Zap, Flag, Coffee, Flame, Smile, ArrowRight, Sparkles, Terminal, MessageCircle, Anchor, Layers, Gauge } from 'lucide-react';

// ==============================================================================
// 1. UTILS (src/utils/...)
// ==============================================================================

// --- FILE: src/utils/themeStyles.js ---
const themeStyles = {
  car: {
    bg: 'bg-gray-900', // Default, but overridden by dynamic background
    textMain: 'text-white',
    textSub: 'text-cyan-400',
    modalBg: 'bg-gray-800 border-cyan-500',
    buttonSelected: 'bg-cyan-600 text-white',
    buttonUnselected: 'bg-gray-700 text-gray-300 hover:bg-gray-600',
    accentBorder: 'border-cyan-500/30',
    timerBlock: 'bg-gray-800/80 border-cyan-500/50 text-cyan-400 shadow-cyan-500/20',
    colon: 'text-gray-500',
    label: 'text-gray-400',
    timelineBg: 'bg-cyan-900/20',
    consoleBg: 'bg-black/50 border-cyan-500/50 text-cyan-300 font-mono',
  },
  mochi: {
    bg: 'bg-pink-50',
    textMain: 'text-gray-800',
    textSub: 'text-pink-500',
    modalBg: 'bg-white border-pink-300',
    buttonSelected: 'bg-pink-400 text-white',
    buttonUnselected: 'bg-pink-100 text-pink-400 hover:bg-pink-200',
    accentBorder: 'border-pink-300/50',
    timerBlock: 'bg-white/60 border-pink-400/50 text-pink-500 shadow-pink-500/20',
    colon: 'text-pink-300',
    label: 'text-pink-700',
    timelineBg: 'bg-pink-100/50',
    consoleBg: 'bg-white/80 border-pink-300 text-pink-600 font-sans',
  }
};

// --- FILE: src/utils/timelineMatrix.js ---
const TIMELINE_DATA = {
  // Phase 1: 11-12+ months (BMW / Prep)
  luxury: {
    car: { id: 'car_bmw', label: 'Executive Class', icon: Car, desc: 'Smooth cruising. Systems nominal.', bgAccent: 'from-blue-900/40 to-cyan-900/40' },
    mochi: { id: 'mochi_prep', label: 'Sifting Flour', icon: Coffee, desc: 'Selecting the finest rice flour.' }
  },
  // Phase 2: 9-10 months (Dodge / Mix)
  muscle: {
    car: { id: 'car_dodge', label: 'American Muscle', icon: Anchor, desc: 'Raw torque unleashed. Heavy lifting.', bgAccent: 'from-yellow-900/40 to-orange-900/40' },
    mochi: { id: 'mochi_mix', label: 'Heavy Mixing', icon: Layers, desc: 'Kneading the dough with energy!' }
  },
  // Phase 3: 6-8 months (Ferrari/Lambo / Rise)
  super: {
    car: { id: 'car_lambo', label: 'Super Velocity', icon: Zap, desc: 'Aerodynamics engaged. Speed increasing.', bgAccent: 'from-red-900/40 to-rose-900/40' },
    mochi: { id: 'mochi_rise', label: 'Dough Rising', icon: Smile, desc: 'The mochi is puffing up nicely.' }
  },
  // Phase 4: 3-5 months (Green Car / Shape)
  hyper: {
    car: { id: 'car_bugatti', label: 'Hyper Drive', icon: Gauge, desc: 'Breaking speed barriers. Maximum thrust.', bgAccent: 'from-green-900/40 to-emerald-900/40' },
    mochi: { id: 'mochi_shape', label: 'Shaping Form', icon: Cookie, desc: 'Molding the perfect round shapes.' }
  },
  // Phase 5: 0-2 months (Vector Car / Bake)
  final: {
    car: { id: 'car_pagani', label: 'The Final Lap', icon: Flag, desc: 'Engineering perfection. Ready for launch.', bgAccent: 'from-slate-900/60 to-purple-900/40' },
    mochi: { id: 'mochi_bake', label: 'Final Bake', icon: Flame, desc: 'High heat! Golden crust forming!' }
  }
};

const getPhase = (months) => {
  if (months <= 2) return 'final';
  if (months <= 5) return 'hyper';
  if (months <= 8) return 'super';
  if (months <= 10) return 'muscle';
  return 'luxury';
};

// ==============================================================================
// 2. HOOKS (src/hooks/...)
// ==============================================================================

// --- FILE: src/hooks/useCountdown.js ---
const useCountdown = (targetDateString) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [monthsRemaining, setMonthsRemaining] = useState(12);

  useEffect(() => {
    const targetDate = new Date(targetDateString);
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
        setMonthsRemaining(Math.floor(days / 30));
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setMonthsRemaining(0);
      }
    };
    const timer = setInterval(calculateTime, 1000);
    calculateTime();
    return () => clearInterval(timer);
  }, [targetDateString]);

  return { timeLeft, monthsRemaining };
};

// ==============================================================================
// 3. LAYOUT (src/components/layout/...)
// ==============================================================================

// --- FILE: src/components/layout/Background.jsx ---
// Updated to accept 'activeData' to set dynamic gradients based on the car
const Background = ({ theme, activeData }) => {
  const carGradient = activeData?.bgAccent || 'from-gray-900 to-black';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000 bg-gradient-to-br ${theme === 'car' ? carGradient : 'from-pink-50 to-white'}`}>
      {theme === 'car' ? (
        <>
          {/* Dynamic Glow Spotlights based on car color */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] mix-blend-overlay animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] mix-blend-overlay animate-pulse delay-1000"></div>

          {/* Speed Lines */}
          <div className="absolute inset-0 opacity-10" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)' }}></div>
        </>
      ) : (
        <>
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        </>
      )}
    </div>
  );
};

// --- FILE: src/components/layout/GlobalStyles.jsx ---
const GlobalStyles = () => (
  <style>{`
    @keyframes drive-image { 0% { transform: translateY(0px) rotate(0deg); } 25% { transform: translateY(-1px) rotate(0.5deg); } 50% { transform: translateY(1px) rotate(0deg); } 75% { transform: translateY(-1px) rotate(-0.5deg); } 100% { transform: translateY(0px) rotate(0deg); } }
    @keyframes wheel-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes road-move { 0% { background-position: 0px 0px; } 100% { background-position: -100px 0px; } }
    
    /* Mochi Animations */
    @keyframes bounce-soft { 0%, 100% { transform: translateY(0) scaleY(1); } 50% { transform: translateY(-20px) scaleY(1.1); } }
    @keyframes shake-crazy { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-5deg); } 20% { transform: translate(-3px, 0px) rotate(5deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(5deg); } 50% { transform: translate(-1px, 2px) rotate(-5deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-5deg); } }
    @keyframes shadow-pulse-fast { 0%, 100% { transform: scaleX(1); opacity: 0.5; } 50% { transform: scaleX(0.8); opacity: 0.2; } }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes squash-stretch { 0%, 100% { transform: scale(1, 1); } 50% { transform: scale(1.1, 0.9); } }

    .animate-drive-image { animation: drive-image 0.5s linear infinite; }
    .animate-road-move { animation: road-move 0.2s linear infinite; }
    .animate-flicker { animation: flicker 0.1s infinite; }
    .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }
    .animate-shake-crazy { animation: shake-crazy 0.5s linear infinite; }
    .animate-shadow-pulse-fast { animation: shadow-pulse-fast 0.5s ease-in-out infinite; }
    .animate-fade-in { animation: fade-in 0.5s ease-out; }
    .animate-squash { animation: squash-stretch 1s ease-in-out infinite; }
  `}</style>
);


const CarImageBase = ({ src, alt, speed = 'normal' }) => (
  <div className="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden">

    <div className="absolute bottom-6 w-full h-24 bg-gray-800/50 blur-sm transform skew-x-12">
      <div
        className="w-[200%] h-full border-t-2 border-dashed border-gray-500/50 animate-road-move"
        style={{ animationDuration: speed === 'fast' ? '0.1s' : '0.2s' }}
      ></div>
    </div>

    <img
      src={src}
      alt={alt}
      className={`relative z-10 w-[95%] md:w-[85%] h-auto max-h-[90%] object-contain drop-shadow-2xl animate-drive-image`}
      style={{
        filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))',
        animationDuration: speed === 'fast' ? '0.3s' : '0.6s'
      }}
      // Fallback in case image is missing in local dev
      onError={(e) => {
        e.target.onerror = null;
        e.target.style.display = 'none';
        e.target.parentNode.innerHTML += `<div class="text-white">Image not found: ${src}</div>`
      }}
    />

    {speed === 'fast' && (
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-20 h-1 bg-white blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-1 bg-white blur-sm animate-pulse delay-75"></div>
      </div>
    )}
  </div>
);

const CarBMW = () => (
  <CarImageBase src="/Mochi/BMW.png" alt="BMW Luxury" speed="normal" />
);
const CarDodge = () => (
  <CarImageBase
    src="/Mochi/ChevroletCamaro.png"
    alt="Muscle Car"
    speed="normal"
  />
);
const CarLambo = () => (
  <CarImageBase src="/Mochi/FERRARI.png" alt="Super Car" speed="fast" />
);
const CarBugatti = () => (
  <CarImageBase src="/Mochi/green.png" alt="Hyper Car" speed="fast" />
);
const CarPagani = () => (
  <CarImageBase src="/Mochi/CarSide.png" alt="Final Evolution" speed="fast" />
);



const MochiPrep = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    <div className="absolute bottom-8 w-24 h-4 bg-gray-400/20 rounded-full blur-sm animate-pulse"></div>
    <div className="animate-bounce-soft relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
        <path d="M20,80 Q20,30 50,30 Q80,30 80,80 Q80,95 50,95 Q20,95 20,80" fill="#fdf2f8" />
        <circle cx="40" cy="60" r="3" fill="#666" />
        <circle cx="60" cy="60" r="3" fill="#666" />
        <path d="M45,70 Q50,73 55,70" stroke="#666" strokeWidth="1" fill="none" />
      </svg>
    </div>
  </div>
);

const MochiMix = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    <div className="absolute bottom-8 w-24 h-4 bg-pink-200/40 rounded-full blur-sm animate-pulse"></div>
    <div className="animate-shake-crazy relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
        <path d="M15,85 Q15,40 50,40 Q85,40 85,85 Q85,95 50,95 Q15,95 15,85" fill="#fce7f3" />
        <path d="M35,60 L45,65 M65,60 L55,65" stroke="#444" strokeWidth="2" />
        <path d="M20,50 L10,40" stroke="#3b82f6" strokeWidth="2" className="animate-bounce" />
      </svg>
    </div>
  </div>
);

const MochiRise = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    <div className="absolute bottom-8 w-24 h-4 bg-pink-300/40 rounded-full blur-sm animate-shadow-pulse-fast"></div>
    <div className="animate-bounce-soft relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
        <path d="M10,80 Q10,10 50,10 Q90,10 90,80 Q90,95 50,95 Q10,95 10,80" fill="#fbcfe8" />
        <path d="M30,50 L40,55 M70,50 L60,55" stroke="#444" strokeWidth="3" strokeLinecap="round" />
        <path d="M40,70 Q50,60 60,70" stroke="#444" strokeWidth="2" fill="none" />
      </svg>
    </div>
  </div>
);

const MochiShape = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    <div className="absolute bottom-8 w-24 h-4 bg-pink-400/40 rounded-full blur-sm animate-pulse"></div>
    <div className="animate-squash relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
        <path d="M5,85 Q5,25 50,25 Q95,25 95,85 Q95,95 50,95 Q5,95 5,85" fill="#f9a8d4" />
        <circle cx="35" cy="60" r="4" fill="#444" />
        <circle cx="65" cy="60" r="4" fill="#444" />
        <circle cx="30" cy="70" r="4" fill="#fbcfe8" opacity="0.8" />
        <circle cx="70" cy="70" r="4" fill="#fbcfe8" opacity="0.8" />
      </svg>
    </div>
  </div>
);

const MochiBake = () => (
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


const ANIMATION_REGISTRY = {
  'car_bmw': CarBMW,
  'car_dodge': CarDodge,
  'car_lambo': CarLambo,
  'car_bugatti': CarBugatti,
  'car_pagani': CarPagani,
  'mochi_prep': MochiPrep,
  'mochi_mix': MochiMix,
  'mochi_rise': MochiRise,
  'mochi_shape': MochiShape,
  'mochi_bake': MochiBake,
};


const AIStatusConsole = ({ theme, monthsRemaining, phase }) => {
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(false);

  const activeStyle = themeStyles[theme];

  const generateStatus = async () => {
    setLoading(true);
    setLog(null);

    const apiKey = ""; 
    const role = theme === 'car' ? "a futuristic cyber-mechanic AI" : "a cute, fluffy master baker AI";
    const context = theme === 'car' ? "upgrading a high-performance vehicle system" : "baking the ultimate mochi";
    const tone = theme === 'car' ? "technical, cool, cryptic, sci-fi" : "warm, bubbly, excited, cute";
    const prompt = `Act as ${role}. We are currently ${context}. The launch is in ${monthsRemaining} months (Phase: ${phase}). Write a one-sentence status log entry about the current progress. Tone: ${tone}. Keep it under 25 words.`;

    const delays = [1000, 2000, 4000, 8000, 16000];
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    try {
      let result = null;
      for (let i = 0; i <= delays.length; i++) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
          });
          if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
          result = await response.json();
          break; // Success
        } catch (err) {
          if (i === delays.length) throw err;
          await new Promise(r => setTimeout(r, delays[i]));
        }
      }

      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      setLog(text || "System unreachable. Try again.");
    } catch (error) {
      console.error("AI Error:", error);
      setLog("Connection failed. Offline mode active.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-2xl mt-4 p-4 rounded-xl border-2 border-dashed transition-all duration-300 ${activeStyle.consoleBg} relative overflow-hidden`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {theme === 'car' ? <Terminal size={18} /> : <MessageCircle size={18} />}
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">
            {theme === 'car' ? 'AI_SYSTEM_LOG_V2.5' : 'Baker\'s Diary AI'}
          </span>
        </div>
      </div>

      <div className="min-h-[60px] flex items-center justify-center text-center">
        {loading ? (
          <div className="flex items-center gap-2 animate-pulse">
            <Sparkles size={16} className={theme === 'car' ? 'text-cyan-400' : 'text-pink-400'} />
            <span className="text-sm font-medium">Generating update...</span>
          </div>
        ) : log ? (
          <p className="text-sm md:text-base font-medium leading-relaxed animate-fade-in">
            "{log}"
          </p>
        ) : (
          <p className="text-sm opacity-50 italic">
            {theme === 'car' ? 'System idle. Request manual log update.' : 'Oven is quiet. Check on the baking status?'}
          </p>
        )}
      </div>

      <button
        onClick={generateStatus}
        disabled={loading}
        className={`w-full mt-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all 
          ${theme === 'car'
            ? 'bg-cyan-900/50 hover:bg-cyan-800 text-cyan-300 border border-cyan-700'
            : 'bg-pink-100 hover:bg-pink-200 text-pink-600 border border-pink-300'}
          disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
      >
        <Sparkles size={14} />
        {theme === 'car' ? 'Generate ✨ System Report' : '✨ Check Oven Status'}
      </button>
    </div>
  );
};

const Colon = ({ theme }) => (
  <span className={`text-2xl md:text-5xl font-bold pt-3 md:pt-4 mx-0 md:mx-2 ${themeStyles[theme].colon}`}>:</span>
);

const TimerDisplay = ({ timeLeft, theme, activeStyle }) => {
  const units = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center items-start">
        {units.map((unit, index) => (
          <React.Fragment key={unit}>
            <div className="flex flex-col items-center mx-1 md:mx-3">
              <div className={`flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${themeStyles[theme].timerBlock}`}>
                <span className="text-xl md:text-3xl font-mono font-bold">{String(timeLeft[unit]).padStart(2, '0')}</span>
              </div>
              <span className={`mt-2 text-[10px] md:text-xs font-semibold tracking-wider uppercase ${themeStyles[theme].label}`}>{unit}</span>
            </div>
            {index < units.length - 1 && <Colon theme={theme} />}
          </React.Fragment>
        ))}
      </div>
      <div className={`mt-6 flex items-center justify-center gap-2 text-sm font-medium ${activeStyle.textSub}`}>
        <Calendar size={16} /><span>Target Date: August 9, 2026</span>
      </div>
    </div>
  );
};

const TimelinePreview = ({ monthsRemaining, theme, activeStyle }) => {
  const currentPhase = getPhase(monthsRemaining);
  const nextPhase = getPhase(monthsRemaining - 3); 

  const currentData = TIMELINE_DATA[currentPhase] ? TIMELINE_DATA[currentPhase][theme] : TIMELINE_DATA.luxury[theme];
  const nextData = TIMELINE_DATA[nextPhase] ? TIMELINE_DATA[nextPhase][theme] : TIMELINE_DATA.luxury[theme];

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

const ThemeModal = ({ isOpen, onClose, currentTheme, setTheme }) => {
  if (!isOpen) return null;
  const activeStyle = themeStyles[currentTheme];
  const modalColors = currentTheme === 'car'
    ? { iconBg: 'bg-cyan-500/20 text-cyan-400', title: 'text-white', textBody: 'text-gray-300' }
    : { iconBg: 'bg-pink-100 text-pink-500', title: 'text-gray-800', textBody: 'text-gray-600' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl border-2 transform transition-all scale-100 ${activeStyle.modalBg} ${activeStyle.accentBorder}`}>
        <div className="absolute top-4 right-4"><button onClick={onClose}><X size={20} className={modalColors.title} /></button></div>

        <div className="text-center mb-8">
          <div className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center ${modalColors.iconBg}`}><Clock size={24} /></div>

          <h2 className={`text-2xl font-bold mb-4 ${modalColors.title}`}>Maintenance Ongoing</h2>
          <p className={`text-sm md:text-base font-medium leading-relaxed italic ${modalColors.textBody}`}>
            "Please Wait patiently I'm doing my best and i'll give you the best experience on your next birthday.... maintenance ongoing"
          </p>
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
        <button onClick={onClose} className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg ${activeStyle.buttonSelected}`}>Enter Site</button>
      </div>
    </div>
  );
};


export default function App() {
  const { timeLeft, monthsRemaining } = useCountdown('2026-08-09T00:00:00');
  const [theme, setTheme] = useState('car');
  const [showModal, setShowModal] = useState(true); 

  useEffect(() => {
    const saved = localStorage.getItem('site_theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => { localStorage.setItem('site_theme', theme); }, [theme]);

  const activeStyle = themeStyles[theme];

  const phase = getPhase(monthsRemaining);
  const currentData = TIMELINE_DATA[phase] ? TIMELINE_DATA[phase][theme] : TIMELINE_DATA.luxury[theme]; // Fallback safety
  const AnimationComponent = ANIMATION_REGISTRY[currentData.id] || CarBMW; // Fallback safety

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-700 ${activeStyle.bg} overflow-hidden font-sans relative`}>
      <Background theme={theme} activeData={currentData} />
      <GlobalStyles />

      <main className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center py-10">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border ${activeStyle.accentBorder} backdrop-blur-md`}>
            <Settings size={16} className={activeStyle.textSub} />
            <span className={`text-xs font-medium uppercase tracking-widest ${activeStyle.textSub}`}>System Upgrade In Progress</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight ${activeStyle.textMain}`}>
            We'll be back <span className={activeStyle.textSub}>soon.</span>
          </h1>
        </div>

        <TimerDisplay timeLeft={timeLeft} theme={theme} activeStyle={activeStyle} />

        <div className={`w-full max-w-2xl h-64 rounded-2xl border-2 ${activeStyle.accentBorder} backdrop-blur-sm relative flex items-center justify-center overflow-hidden bg-opacity-30 transition-colors duration-500 ${theme === 'car' ? 'bg-black/40' : 'bg-white/40'}`}>
          <AnimationComponent />
        </div>

        <TimelinePreview monthsRemaining={monthsRemaining} theme={theme} activeStyle={activeStyle} />

        <AIStatusConsole theme={theme} monthsRemaining={monthsRemaining} phase={phase} />

        <button onClick={() => setShowModal(true)} className={`mt-10 px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors opacity-60 hover:opacity-100 ${activeStyle.buttonUnselected}`}>Customize Appearance</button>
      </main>


      <ThemeModal isOpen={showModal} onClose={() => setShowModal(false)} currentTheme={theme} setTheme={setTheme} />
    </div>
  );
}