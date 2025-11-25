import { useState, useEffect } from "react";

export default function useGameClock(isPaused) {
    const [clock, setClock] = useState(0);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setClock(prev => prev + 2.4); 
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return clock;
}