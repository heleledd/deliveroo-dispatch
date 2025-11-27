import { useState } from 'react'
import GameRunning from './game/Stages/GameRunning'
import GameEnd from './game/stages/GameEnd.jsx'
import initialRiders from '../data/riders.js';

function Main() {
    const [gameState, setGameState] = useState("start")
	const [riders, setRiders] = useState(initialRiders);
	const [foodBusinessEarnings, setFoodBusinessEarnings] = useState(0);
	const [deliverooEarnings, setDeliverooEarnings] = useState(0);
	const [totalOrderValue, setTotalOrderValue] = useState(0);

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
				riders={riders}
				setRiders={setRiders}
				setFoodBusinessEarnings={setFoodBusinessEarnings}
				deliverooEarnings={deliverooEarnings}
				setDeliverooEarnings={setDeliverooEarnings}
				setTotalOrderValue={setTotalOrderValue}
			/>
		)
	}

	if (gameState === "ended") {
		// calculate final earnings and how much you made as the deliveroo algorithm
		
		return (
			<GameEnd 
				riders={riders}
				deliverooEarnings={deliverooEarnings}
				foodBusinessEarnings={foodBusinessEarnings}
				totalOrderValue={totalOrderValue}
			/>
		);
	}

}

export default Main