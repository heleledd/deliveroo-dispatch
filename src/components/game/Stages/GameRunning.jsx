import { useState, useEffect } from 'react'
import RidersList from '../riders/RidersList.jsx'
import JobsList from '../jobs/JobsList.jsx'

import useGameClock from "../hooks/useGameClock";
import useJobCompletedFlash from '../hooks/useJobCompletedFlash.js';
import useUpdateRidersJobs from '../hooks/useUpdateRidersJobs.js';
import formatGameTime from '../helpers/formatGameTime.js';

import '../../../styles/GameRunning.css'

function GameRunning(props) {
	const [isPaused, setIsPaused] = useState(false);
    

    const clock = useGameClock(isPaused)
    
	const { riders, setRiders, jobs, setJobs } = useUpdateRidersJobs(clock);

	useJobCompletedFlash(jobs, setJobs)

	// End game after 19 in-game hours (1140 ticks)
	useEffect(() => {
		if (clock >= 1140) {
			props.setGameState("ended")
		}
	}, [clock]);


	const togglePause = () => setIsPaused(prev => !prev);

	// for progress bar
	const progress = Math.min((clock / 1140) * 100, 100);

    return (
      <div className="game-container">
        <div className="game-stats-container">
			<p className="game-time">🕒 {formatGameTime(clock)}</p>

			<div className="game-progress-bar">
				<div className="game-progress-fill" style={{ width: `${progress}%` }} />
			</div>

			<button className="pause-btn" onClick={togglePause}>
            	{isPaused ? '▶ Resume' : '⏸ Pause'}
          	</button>

			<p>💰 Deliveroo's Earnings: £0.00</p>
		</div>

        <div className="game-grid">
          <RidersList 
            riders={riders}
            jobs={jobs}
			clock={clock}
          />
          <JobsList 
            riders={riders}
            jobs={jobs}
            setJobs={setJobs}
            setRiders={setRiders}
			clock={clock}
          />
        </div>
      </div>
    );
}

export default GameRunning