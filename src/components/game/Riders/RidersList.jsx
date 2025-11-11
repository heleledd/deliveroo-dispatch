import riders from '../../../data/riders.js';
import RiderCard from './RiderCard.jsx';
import '../../../styles/RidersList.css';

export default function RidersList() {
    const riderEntries = riders.map((rider) => (
                <RiderCard 
                    key={rider.id}
                    {...rider}
                />
            ))
    
    return (
        <div className="riders-list">
            {riderEntries}
        </div>
    )

}