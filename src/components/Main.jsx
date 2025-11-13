import { useState, useEffect } from 'react'
import RidersList from './game/Riders/RidersList.jsx'
import JobsList from './game/Jobs/JobsList.jsx'
import initialJobs from '../data/jobs.js';
import initialRiders from '../data/riders.js';
import '../styles/Main.css'

function Main() {
    const [clock, setClock] = useState(0); // 0 = 5:00 AM, 19*60 = 1140 minutes = 0:00 AM
	const [isPaused, setIsPaused] = useState(false);
    const [riders, setRiders] = useState(initialRiders);
    const [jobs, setJobs] = useState(initialJobs);

    useEffect(() => {
		if (isPaused) return;
		
		const interval = setInterval(() => {
		setClock(prev => prev + 1); // advance 2.375 game minutes per real second 
		}, 1000); // every real second

		// set to 2.375 because 19 hours×60 min/hour÷480 seconds=2.375 game-minutes per real second.

		return () => clearInterval(interval);
    }, [isPaused]);

    // Update rider availability and job status when time advances
	useEffect(() => {
		setRiders(prevRiders => {
			const completedJobs = [];

			const updatedRiders = prevRiders.map(r => {
				if (!r.isAvailable && clock >= r.availableAt) {
					// Rider just became available — mark job as completed
					if (r.jobAssigned) {
						completedJobs.push({jobId: r.jobAssigned, riderId: r.id});
					}

					return { 
						...r, 
						isAvailable: true, 
						jobAssigned: null, 
						availableAt: null 
					};
				}
				return r;
			});

			// Update jobs *after* riders
			if (completedJobs.length > 0) {
			setJobs(prevJobs =>
				prevJobs.map(j => {
					const match = completedJobs.find(c => c.jobId === j.id);
					if (match) {
						// ✅ Add job pay to rider’s earnings
						setRiders(prevR =>
							prevR.map(r =>
								r.id === match.riderId
									? { ...r, earningsToday: (r.earningsToday || 0) + (j.pay || 0) }
									: r
							)
						);
						return { ...j, status: 'Completed' };
					}
					return j;
				})
			);
		}
			return updatedRiders;
		});
	}, [clock]);

	// End game after 19 in-game hours (1140 ticks)
	useEffect(() => {
		if (clock >= 1140) {
			alert("Game Over! It's midnight!");
			setIsPaused(true);
		}
	}, [clock]);

	// Format clock display: convert total minutes to readable time (HH:MM AM/PM)
	function formatGameTime(clockMinutes) {
		const totalMinutes = 5 * 60 + clockMinutes; // start from 5 AM
		const hours = Math.floor(totalMinutes / 60);
		const minutes = Math.floor(totalMinutes % 60);
		const ampm = hours >= 12 ? 'PM' : 'AM';
		const displayHour = ((hours + 11) % 12) + 1; // convert 0–23 → 1–12
		const paddedMinutes = minutes.toString().padStart(2, '0');
		return `${displayHour}:${paddedMinutes} ${ampm}`;
	}


	const togglePause = () => setIsPaused(prev => !prev);

	// for progress bar
	const progress = Math.min((clock / 1140) * 100, 100);

    return (
      <div className="game-container">
        <div className="game-stats-container">
			<p className="game-time">🕒 {formatGameTime(clock)}</p>

			<div className="progress-bar">
				<div className="progress-fill" style={{ width: `${progress}%` }} />
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

export default Main