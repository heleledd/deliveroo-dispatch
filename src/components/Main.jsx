import { useState } from 'react'
import RidersList from './game/Riders/RidersList.jsx'
import JobsList from './game/Jobs/JobsList.jsx'
import initialJobs from '../data/jobs.js';
import initialRiders from '../data/riders.js';
import '../styles/Main.css'

function Main() {
    const [clock, setClock] = useState(0);
    const [riders, setRiders] = useState(initialRiders);
    const [jobs, setJobs] = useState(initialJobs);

    return (
      <div className="game-container">
        <div className="game-stats-container">
          <p>⏰ Game Clock: {clock}s</p>
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
          />
        </div>
      </div>
    );
}

export default Main