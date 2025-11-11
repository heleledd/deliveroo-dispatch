import { useState } from 'react'
import RidersList from './game/Riders/RidersList.jsx'

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

        <div className="jobs-list-container">
          {/* <JobsList /> */}
          <p>Jobs List Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default Main