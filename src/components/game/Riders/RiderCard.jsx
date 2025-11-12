export default function RiderCard(props) {
    return (
        <div className={`rider-card ${!props.isAvailable ? 'unavailable' : ''}`}>
            <div className="rider-image-container">
                <img className='rider-image' src={props.profileImg.src} alt={props.profileImg.alt} />
            </div>
            <div className="rider-content">
                <p className='rider-name'>{props.name}</p>
                <p className='rider-vehicle'>Vehicle: {props.vehicle}</p>
            </div>
        </div>
    )
}