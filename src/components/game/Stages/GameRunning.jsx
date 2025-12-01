import { useState, useEffect } from 'react'
import RidersList from '../Riders/RidersList.jsx'
import JobsList from '../Jobs/JobsList.jsx'
import RiderFullProfile from '../Riders/RiderFullProfile.jsx';
import initialJobs from '../../../data/jobPool.js';

import useGameClock from "../hooks/useGameClock.js";
import useUpdateRidersJobs from '../hooks/useAutoUpdateRidersJobs.js';
import formatGameTime from '../helpers/formatGameTime.js';
import useJobAssigner from '../hooks/useJobAssigner.js';
import useJobSpawner from '../hooks/useJobSpawner.js';
import useOnlineManager from '../hooks/useOnlineManager';

import {DndContext} from '@dnd-kit/core';
import toast, { Toaster } from 'react-hot-toast';

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

    const clock = useGameClock(isPaused);

	useOnlineManager(riders, setRiders, clock);

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

	useJobSpawner(jobPool, setJobPool, setJobs, clock);

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

		// retrieve job and rider
        const job = jobs.find(j => j.id === jobId);
        const rider = riders.find(r => r.id === riderId)

        // VALIDATION: Check if game is paused
        if (isPaused) {
			toast.error("Game is paused. Cannot assign jobs.");
			return;
		}

		if (!rider.isOnline) {
			toast.error("Rider is offline. Cannot assign jobs.");
			return;
		}

        // VALIDATION: Check if job is already assigned
        if (job.assignedTo !== null && job.assignedTo !== undefined) {
			toast.error("Job already assigned.");
			return;
		}

        // VALIDATION: Check if job is already completed
        if (job.status !== 'Uncompleted') return;

        // VALIDATION: Check if rider is available
        if (!rider.isAvailable) return;

		useJobAssigner(riderId, jobId, jobs, riders, clock, setJobs, setRiders, isPaused);
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
						
						<button className="pause-btn" onClick={togglePause}>
							{isPaused ? '▶ ' : '⏸ '}
						</button>

						<div className="game-progress-bar">
							<div className="game-progress-fill" style={{ width: `${progress}%` }} />
						</div>

						<p className="game-time">🕒 {formatGameTime(clock)}</p>

						<p className="earnings">💰 Deliveroo's Earnings: £{deliverooEarnings.toFixed(2)}</p>
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
					/>
					</div>
				</div>
			<Toaster />
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
