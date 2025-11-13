import RiderPicker from '../Riders/RiderPicker.jsx';

export default function JobCard(props) {
    
    function handleSubmit(event) {
        event.preventDefault();
        const selectedRiderId = event.target.selectedRider.value;
        props.onSelectRider(selectedRiderId, props.id);
    }
    
    return (
        <div className='job-card'>
            {/* <div className="job-image-container">
                <img className='job-image' src={props.img.src} alt={props.img.alt} />
            </div> */}
            <div className="job-content">
                <p className='job-name'>{props.description}</p>
                <p className='job-distance'>Distance: {props.distance} km</p>
                <p className='job-pay'>Pay: £{props.pay}</p>
                <p className='job-status'>Status: {props.status}</p>
            </div>
            {props.status == 'Uncompleted' &&
            <div className="job-actions">
                <form method="post" onSubmit={handleSubmit}>
                    <RiderPicker riders={props.riders} />
                    <button className='assign-job-button' type="submit">Assign Job</button>
                </form>
            </div>
            }
            
        </div>
    )
}