const TIMELINE_DATA = {
    // Phase 1: 12 months down to 10 months
    early: {
        car: { id: 'car_cruise', label: 'Engine Warmup', icon: Car, desc: 'Engines starting. System checks green.' },
        mochi: { id: 'mochi_idle', label: 'Sifting Flour', icon: Coffee, desc: 'Measuring ingredients with care.' }
    },
    // Phase 2: 9 months down to 5 months
    mid: {
        car: { id: 'car_race', label: 'Full Throttle', icon: Zap, desc: 'Picking up serious velocity on the straightaway.' },
        mochi: { id: 'mochi_bounce', label: 'Dough Rising', icon: Smile, desc: 'The dough is excited and taking shape!' }
    },
    // Phase 3: 4 months down to 0 months
    late: {
        car: { id: 'car_drift', label: 'Precision Drift', icon: Flag, desc: 'Handling the complex final curves.' },
        mochi: { id: 'mochi_panic', label: 'High Heat', icon: Flame, desc: 'Intense baking! Finishing touches being applied.' }
    }
};

// Helper to determine Phase based on Months Remaining
const getPhase = (months) => {
    if (months <= 4) return 'late';
    if (months <= 9) return 'mid';
    return 'early'; // Default for 10-12+
};

export { TIMELINE_DATA, getPhase };