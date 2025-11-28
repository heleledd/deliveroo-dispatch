import RiderCard from './RiderCard.jsx';
import '../../../styles/RidersList.css';

export default function RidersList({riders, jobs, clock, handleViewProfile}) {
    const riderEntries = riders.map((rider) => (
                <RiderCard 
                    key={rider.id}
                    {...rider}  // spreads the individual rider's fields
                    jobs={jobs}
                    clock={clock}
                    onViewProfile={handleViewProfile}
                />
            ))
    
    return (
        <div className="riders-list">
            <h2 className="list-title">RIDERS</h2>
            <div className="rider-entries-container">
                {riderEntries}
            </div>
        </div>
    )

}