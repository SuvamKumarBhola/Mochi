import React, { useEffect, useState } from 'react'

function useCountdown(targetDataString) {
    const [timeLeft, setTimeLeft]  = useState({
        days: 0, hours: 0,minutes: 0,seconds: 0,
    });
    const [isUrgent, setIsUrgent] = useState(false);

    useEffect(()=>{
        const targetDate = new Date(targetDataString).getTime();
        const difference = targetDate - Date.now();

        if(difference <= 0){
           setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(difference % (1000 * 60 * 60 * 24)),
            minutes: Math.floor(difference % (1000 * 60 * 60)),
            seconds: Math.floor(difference % (1000 * 60))
           })
        };

       
    })

  return (
    <div>useCountdown</div>
  )
}

export default useCountdown