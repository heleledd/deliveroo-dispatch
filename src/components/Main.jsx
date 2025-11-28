import { useState } from 'react'
import GameStart from './game/stages/GameStart.jsx'
import GameRunning from './game/stages/GameRunning'
import GameEnd from './game/stages/GameEnd.jsx'
import initialRiders from '../data/riders.js';
import Header from './Header.jsx';

function Main() {
    const [gameState, setGameState] = useState("start")
	const [riders, setRiders] = useState(initialRiders);
	const [foodBusinessEarnings, setFoodBusinessEarnings] = useState(0);
	const [deliverooEarnings, setDeliverooEarnings] = useState(0);
	const [totalOrderValue, setTotalOrderValue] = useState(0);

	// function for restarting the game
	const restartGame = () => {
        setGameState("start");
        setRiders(initialRiders);
        setFoodBusinessEarnings(0);
        setDeliverooEarnings(0);
        setTotalOrderValue(0);
    };


	if (gameState === "start") {
		return (
			<>
				<Header restartGame={restartGame} />
				<GameStart setGameState={setGameState} />
			</>
		);
	}

	if (gameState === "playing") {
		return (
			<>
				<Header restartGame={restartGame} />
				<GameRunning 
					setGameState={setGameState}
					riders={riders}
					setRiders={setRiders}
					setFoodBusinessEarnings={setFoodBusinessEarnings}
					deliverooEarnings={deliverooEarnings}
					setDeliverooEarnings={setDeliverooEarnings}
					setTotalOrderValue={setTotalOrderValue}
				/>
			</>
		)
	}

	if (gameState === "ended") {
		// calculate final earnings and how much you made as the deliveroo algorithm
		
		return (
			<>
				<Header restartGame={restartGame} />
				<GameEnd 
					riders={riders}
					deliverooEarnings={deliverooEarnings}
					foodBusinessEarnings={foodBusinessEarnings}
					totalOrderValue={totalOrderValue}
				/>
			</>
		);
	}

}

export default Main