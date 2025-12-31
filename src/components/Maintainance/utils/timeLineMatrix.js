import {
    Car, Coffee, Anchor, Layers, Zap, Smile,
    Cookie, Gauge, Flag, Flame
} from 'lucide-react';

const TIMELINE_DATA = {
    luxury: {
        car: { id: 'car_bmw', label: 'Executive Class', icon: Car, desc: 'Smooth cruising. Systems nominal.', bgAccent: 'from-blue-900/40 to-cyan-900/40' },
        mochi: { id: 'mochi_prep', label: 'Sifting Flour', icon: Coffee, desc: 'Selecting the finest rice flour.' }
    },
    muscle: {
        car: { id: 'car_dodge', label: 'American Muscle', icon: Anchor, desc: 'Raw torque unleashed.', bgAccent: 'from-yellow-900/40 to-orange-900/40' },
        mochi: { id: 'mochi_mix', label: 'Heavy Mixing', icon: Layers, desc: 'Kneading hard!' }
    },
    super: {
        car: { id: 'car_lambo', label: 'Super Velocity', icon: Zap, desc: 'Speed increasing.', bgAccent: 'from-red-900/40 to-rose-900/40' },
        mochi: { id: 'mochi_rise', label: 'Dough Rising', icon: Smile, desc: 'Puffing up.' }
    },
    hyper: {
        car: { id: 'car_bugatti', label: 'Hyper Drive', icon: Gauge, desc: 'Maximum thrust.', bgAccent: 'from-green-900/40 to-emerald-900/40' },
        mochi: { id: 'mochi_shape', label: 'Shaping', icon: Cookie, desc: 'Perfect form.' }
    },
    final: {
        car: { id: 'car_pagani', label: 'Final Lap', icon: Flag, desc: 'Ready for launch.', bgAccent: 'from-slate-900/60 to-purple-900/40' },
        mochi: { id: 'mochi_bake', label: 'Final Bake', icon: Flame, desc: 'Almost ready!' }
    }
};

 const getPhase = (months) => {
    if (months <= 2) return 'final';
    if (months <= 5) return 'hyper';
    if (months <= 8) return 'super';
    if (months <= 10) return 'muscle';
    return 'luxury';
};

export { TIMELINE_DATA, getPhase };