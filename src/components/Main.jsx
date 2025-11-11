import { useState } from 'react'
import RidersList from './game/Riders/RidersList.jsx'
import JobsList from './game/Jobs/JobsList.jsx'
import '../styles/Main.css'

function Main() {
  const [clock, setClock] = useState(0);

  return (
    <div className="game-container">
      <div className="game-stats-container">
        <p>⏰ Game Clock: {clock}s</p>
        <p>💰 Deliveroo's Earnings: £0.00</p>
      </div>

      <div className="game-grid">
        <RidersList />
        <JobsList />
      </div>
    </div>
  );
}

export default Main