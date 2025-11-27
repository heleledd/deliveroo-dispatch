import { useState, useEffect } from 'react'
import RidersList from '../riders/RidersList.jsx'
import JobsList from '../jobs/JobsList.jsx'
import RiderFullProfile from '../riders/RiderFullProfile.jsx';
import initialJobs from '../../../data/jobPool.js';

import useGameClock from "../hooks/useGameClock";
import useUpdateRidersJobs from '../hooks/useAutoUpdateRidersJobs.js';
import formatGameTime from '../helpers/formatGameTime.js';
import useJobAssigner from '../hooks/useJobAssigner.js';
import useJobSpawner from '../hooks/useJobSpawner.js';

import {DndContext} from '@dnd-kit/core';

import '../../../styles/GameRunning.css'

function GameRunning(
	{
		setGameState, 
		riders, 
		setRiders, 
		setFoodBusinessEarnings,
		deliverooEarnings,
		setDeliverooEarnings,
		setTotalOrderValue
	}
) {
	
    const [jobs, setJobs] = useState([]);
	const [isPaused, setIsPaused] = useState(false);
    const [jobPool, setJobPool] = useState(initialJobs);
	const [viewingRider, setViewingRider] = useState(null);

    const clock = useGameClock(isPaused)

	useJobSpawner(jobPool, setJobPool, setJobs, clock)
    
	// checks every second for any jobs which have ended that second and does the admin
	useUpdateRidersJobs(
		clock, 
		riders, 
		setRiders, 
		jobs, 
		setJobs, 
		setDeliverooEarnings,  
		setFoodBusinessEarnings,
		setTotalOrderValue
	);

	// End game after 12 in-game hours (720 ticks)
	useEffect(() => {
		if (clock >= 720) {
			setGameState("ended")
		}
	}, [clock]);


	const togglePause = () => setIsPaused(prev => !prev);

	// for progress bar
	const progress = Math.min((clock / 720) * 100, 100);


	function handleDragEnd(event) {
		const { active, over } = event;
		if (!over) return;

		const jobId = parseInt(active.id.replace("job-", ""));
		const riderId = parseInt(over.id.replace("rider-", ""));

		useJobAssigner(riderId, jobId, jobs, riders, clock, setJobs, setRiders);
	}

	function handleViewProfile(riderId) {
		setViewingRider(riderId);
		setIsPaused(true);
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
						handleViewProfile={handleViewProfile}
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
			{viewingRider !== null &&
				<RiderFullProfile 
					rider={riders.find(r => r.id === viewingRider)}
					setViewingRider={setViewingRider}
					setIsPaused={setIsPaused}
				/>
			}
		</>
    );
}

export default GameRunning
