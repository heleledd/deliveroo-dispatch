export default function RiderCard(props) {
    return (
        <div className='rider-card'>
            <div className="rider-image-container">
                <img className='rider-image' src={props.profileImg.src} alt={props.profileImg.alt} />
            </div>
            <div className="rider-content">
                <p className='rider-name'>{props.name}</p>
                <p className='rider-vehicle'>{props.vehicle}</p>
            </div>
        </div>
    )
}