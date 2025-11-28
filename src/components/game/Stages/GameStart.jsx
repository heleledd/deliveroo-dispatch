import { Play } from 'lucide-react';
import '../../../styles/GameStart.css'

export default function GameStart({ setGameState }) {
    return (
        <>
            <div className="start-card">
                <h1>Welcome!</h1>
                <p>Assign riders to jobs and manage time efficiently by dragging and dropping jobs to available riders.</p>
                <p>The day runs from 5 AM to midnight (19 hours).</p>
                <p>order value is the money that the customer paid - includes VAT, cost of the food and deliveroo fees</p>

                <h3>Ready to play? Click below to begin!</h3>
                <button className="start-play-button" onClick={() => setGameState("playing")}>
                    <Play size={40} />
                </button>
            </div>
        </>
    )
}