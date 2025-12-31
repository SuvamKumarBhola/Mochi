import { useEffect, useState } from 'react';

const useCountdown = (targetDateString) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [monthsRemaining, setMonthsRemaining] = useState(12);

  useEffect(() => {
    const targetDate = new Date(targetDateString);

    const tick = () => {
      const diff = targetDate - new Date();
      if (diff <= 0) return setMonthsRemaining(0);

      const days = Math.floor(diff / 86400000);
      setMonthsRemaining(Math.floor(days / 30));
      setTimeLeft({
        days,
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, [targetDateString]);

  return { timeLeft, monthsRemaining };
};

export default useCountdown;