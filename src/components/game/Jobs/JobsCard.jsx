export default function JobsCard(props) {
    return (
        <div className='job-card'>
            <div className="job-image-container">
                <img className='job-image' src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="job-content">
                <p className='job-name'>{props.name}</p>
                <p className='job-vehicle'>{props.vehicle}</p>
            </div>
        </div>
    )
}