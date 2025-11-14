import RiderCard from './RiderCard.jsx';
import '../../../styles/RidersList.css';

export default function RidersList({riders, jobs, clock}) {
    const riderEntries = riders.map((rider) => (
                <RiderCard 
                    key={rider.id}
                    {...rider}  // spreads the individual rider's fields
                    jobs={jobs}
                    clock={clock}
                />
            ))
    
    return (
        <div className="riders-list">
            <h2>Riders</h2>
            {riderEntries}
        </div>
    )

}