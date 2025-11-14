import { useState, useEffect } from "react";


export default function useGameClock(isPaused) {
    const [clock, setClock] = useState(0);
    
    useEffect(() => {
		if (isPaused) return;
		
		const interval = setInterval(() => {
		setClock(prev => prev + 1); // advance 2.375 game minutes per real second 
		}, 1000); // every real second

		// set to 2.375 because 19 hours×60 min/hour÷480 seconds=2.375 game-minutes per real second.

		return () => clearInterval(interval);
    }, [isPaused]);

    return clock;
}