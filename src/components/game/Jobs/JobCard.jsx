import { useDraggable } from "@dnd-kit/core";
import { ReceiptText } from 'lucide-react';

export default function JobCard(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `job-${props.id}`
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    
    return (
        <div 
            ref={setNodeRef} {...listeners} {...attributes} 
            style={style} 
            className="job-card"
        >
            <div className="job-icon-container">
                <ReceiptText size={60} />
            </div>
            <p className='job-name'>{props.description}</p>
            <div className="job-details">
                <div className="distance-content">
                    <p className='graphic-detail'>{props.distance} km</p>
                </div>
                <div className="money-content">
                    <p className='graphic-detail'>£{props.customer_paid.toFixed(2)}</p>
                </div>
            </div>

        </div>
    )
}