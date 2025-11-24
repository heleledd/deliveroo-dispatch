import { useState, useEffect } from 'react'
import RidersList from '../riders/RidersList.jsx'
import JobsList from '../jobs/JobsList.jsx'
import initialJobs from '../../../data/jobs.js';
import initialRiders from '../../../data/riders.js';

import useGameClock from "../hooks/useGameClock";
import useUpdateRidersJobs from '../hooks/useUpdateRidersJobs.js';
import formatGameTime from '../helpers/formatGameTime.js';

import {DndContext} from '@dnd-kit/core';
import '../../../styles/GameRunning.css'

function GameRunning(props) {
	const [riders, setRiders] = useState(initialRiders);
    const [jobs, setJobs] = useState(initialJobs);
	const [isPaused, setIsPaused] = useState(false);
    

    const clock = useGameClock(isPaused)
    
	useUpdateRidersJobs(clock, riders, setRiders, jobs, setJobs);


	// End game after 19 in-game hours (1140 ticks)
	useEffect(() => {
		if (clock >= 1140) {
			props.setGameState("ended")
		}
	}, [clock]);


	const togglePause = () => setIsPaused(prev => !prev);

	// for progress bar
	const progress = Math.min((clock / 1140) * 100, 100);

	function assignJobToRider(riderId, jobId) {
        const theRiderId = parseInt(riderId)
        
        // retrieve job and rider
        const job = jobs.find(j => j.id === jobId);
        const rider = riders.find(r => r.id === theRiderId)

        // get job duration and the rider's speed
        const distance = job.distance;
        const speed = rider.speed;
        const duration = distance * speed;
        const startTime = clock;
        const finishTime = clock + duration;
        
        // Update the selected rider's availability to false and assign them the job ID
        setRiders(prev =>
            prev.map(r =>
                r.id === parseInt(riderId)
                ? { ...r, isAvailable: false, jobAssigned: jobId, jobStartsAt: startTime, availableAt: finishTime }
                : r
            )
        );

        setJobs(prev =>
            prev.map(j => 
                j.id === jobId
                ? { ...j, assignedTo: theRiderId, status: 'In Progress' }
                : j
            )
        );
    }


	function handleDragEnd(event) {
		const { active, over } = event;
		if (!over) return;

		const jobId = parseInt(active.id.replace("job-", ""));
		const riderId = parseInt(over.id.replace("rider-", ""));

		assignJobToRider(riderId, jobId);
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
			</DndContext>
		</>
    );
}

export default GameRunning