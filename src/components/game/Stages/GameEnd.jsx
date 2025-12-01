import '../../../styles/GameEnd.css'

function GameEnd(
    {
        riders,
        deliverooEarnings,
        foodBusinessEarnings,
        totalOrderValue
    }
) {
    return (
        <div className="game-end-container">
            <h2>Game Over! - Thank you for playing!</h2>

            <div className="earnings-summary">
                {/* <p>The total order value includes VAT, cost of the food and deliveroo fees</p> */}

                {/* <p>Total value of today's orders: £{totalOrderValue.toFixed(2)}</p> */}
                <p>Deliveroo's final earnings: £{deliverooEarnings.toFixed(2)}</p>
                <p>Total food business earnings: £{foodBusinessEarnings.toFixed(2)}</p>

            </div>

            <div className="riders-summary">
                <h3>Riders Summary:</h3>
                {riders.map((rider) => (
                    <div key={rider.id} className="rider-summary">
                        <p><strong>{rider.name}</strong></p>
                        <p>Completed Jobs: {rider.jobsDone}</p>
                        <p>Earnings: £{rider.earningsToday.toFixed(2)}</p>
                        <p>Tips: £{rider.tipsEarned.toFixed(2)}</p>
                        <p>{rider.fullBio}</p> 
                    </div>
                ))}
            </div>
        </div>
    );    
}

export default GameEnd;