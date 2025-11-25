import { useState, useEffect } from 'react'
import RidersList from '../riders/RidersList.jsx'
import JobsList from '../jobs/JobsList.jsx'
import initialJobs from '../../../data/jobs.js';
import initialRiders from '../../../data/riders.js';

import useGameClock from "../hooks/useGameClock";
import useUpdateRidersJobs from '../hooks/useAutoUpdateRidersJobs.js';
import formatGameTime from '../helpers/formatGameTime.js';
import useJobAssigner from '../hooks/useJobAssigner.js';

import {DndContext} from '@dnd-kit/core';

import '../../../styles/GameRunning.css'

function GameRunning(props) {
	const [riders, setRiders] = useState(initialRiders);
    const [jobs, setJobs] = useState(initialJobs);
	const [isPaused, setIsPaused] = useState(false);
	const [deliverooEarnings, setDeliverooEarnings] = useState(0);
	const [foodBusinessEarnings, setFoodBusinessEarnings] = useState(0);
    

    const clock = useGameClock(isPaused)
    
	// checks every second for any jobs which have ended that second and does the admin
	useUpdateRidersJobs(
		clock, 
		riders, 
		setRiders, 
		jobs, 
		setJobs, 
		setDeliverooEarnings,  
		setFoodBusinessEarnings
	);

	// End game after 19 in-game hours (1140 ticks)
	useEffect(() => {
		if (clock >= 1140) {
			props.setGameState("ended")
		}
	}, [clock]);


	const togglePause = () => setIsPaused(prev => !prev);

	// for progress bar
	const progress = Math.min((clock / 1140) * 100, 100);


	function handleDragEnd(event) {
		const { active, over } = event;
		if (!over) return;

		const jobId = parseInt(active.id.replace("job-", ""));
		const riderId = parseInt(over.id.replace("rider-", ""));

		useJobAssigner(riderId, jobId, jobs, riders, clock, setJobs, setRiders);
	}

    return (
		<>
			<DndContext onDragEnd={handleDragEnd}>
				<div className="game-container">
					<div className="game-stats-container">
						<p className="game-time">🕒 {formatGameTime(clock)}</p>

						<div className="game-progress-bar">
							<div className="game-progress-fill" style={{ width: `${progress}%` }} />
						</div>

						<button className="pause-btn" onClick={togglePause}>
							{isPaused ? '▶ Resume' : '⏸ Pause'}
						</button>

						<p>💰 Deliveroo's Earnings: £{deliverooEarnings.toFixed(2)}</p>
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
			</DndContext>
		</>
    );
}

export default GameRunning