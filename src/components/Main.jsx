import { useState } from 'react'
import GameRunning from './game/Stages/GameRunning'

function Main() {
    const [gameState, setGameState] = useState("start")
	
	if (gameState === "start") {
		return (
			<div className="start-screen">
				<p>Welcome! Assign riders to jobs and manage time efficiently by dragging and dropping jobs to available riders.</p>
				<p>The day runs from 5 AM to midnight (19 hours).</p>
				<p>order value is the money that the customer paid - includes VAT, cost of the food and deliveroo fees</p>

				<button onClick={() => setGameState("playing")}>
					Start Game
				</button>
			</div>
		);
	}

	if (gameState === "playing") {
		return (
			<GameRunning 
				setGameState={setGameState}
			/>
		)
	}

	if (gameState === "ended") {
		// calculate final earnings and how much you made as the deliveroo algorithm
		
		return (
			<div className="end-screen">
				<h1>Day Complete!</h1>
				<p>You finished a full shift.</p>
				<h2>Total Earnings: £</h2>

				<button onClick={() => window.location.reload()}>
					Play Again
				</button>
			</div>
		);
	}

}

export default Main