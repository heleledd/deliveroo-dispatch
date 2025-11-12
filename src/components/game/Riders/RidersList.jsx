import RiderCard from './RiderCard.jsx';
import '../../../styles/RidersList.css';

export default function RidersList(props) {
    const riderEntries = props.riders.map((rider) => (
                <RiderCard 
                    key={rider.id}
                    {...rider}
                />
            ))
    
    return (
        <div className="riders-list">
            <h2>Riders</h2>
            {riderEntries}
        </div>
    )

}