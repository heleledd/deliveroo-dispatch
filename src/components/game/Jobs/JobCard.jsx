import { useDraggable } from "@dnd-kit/core";

export default function JobCard(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `job-${props.id}`
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    function handleSubmit(event) {
        console.log("Submitted")
        // event.preventDefault();
        // const selectedRiderId = event.target.selectedRider.value;
        // props.onSelectRider(selectedRiderId, props.id);
    }
    
    return (
        <div 
            ref={setNodeRef} {...listeners} {...attributes} 
            style={style} 
            className={`job-card ${props.justCompleted ? 'flash-green' : ''}`}
        >
            {/* <div className="job-image-container">
                <img className='job-image' src={props.img.src} alt={props.img.alt} />
            </div> */}
            <div className="job-content">
                <p className='job-name'>{props.description}</p>
                <p className='job-distance'>Distance: {props.distance} km</p>
                <p className='job-pay'>Pay: £{props.pay}</p>
                <p className='job-status'>Status: {props.status}</p>
            </div>
            
        </div>
    )
}