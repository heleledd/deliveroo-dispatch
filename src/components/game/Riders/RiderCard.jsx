import {useDroppable} from '@dnd-kit/core';

export default function RiderCard(props) {
    const { setNodeRef, isOver } = useDroppable({
        id: `rider-${props.id}`,
        disabled: !props.isAvailable
    });
    
    function findRiderProgress(startTime, finishTime, clock) {
        const jobLength = finishTime - startTime;
        const jobProgress = ((clock - startTime) / jobLength) * 100;
        return Math.min(Math.max(jobProgress, 0), 100);
    }

    function findJobName(jobId) {
        const job = props.jobs.find(j => j.id === jobId);
        if (!job) return ""; 

        const words = job.description.split(" ");
        const firstWord = words[0];

        // Add "ing" to the first word 
        const modifiedFirstWord = firstWord + "ing";

        // Rebuild the sentence
        return [modifiedFirstWord, ...words.slice(1)].join(" ");
    }
    
    return (
        <div 
            ref={setNodeRef}
            style={{
                background: isOver ? "#ffe500" : "white",
                cursor: "pointer"
            }}
            onClick={() => props.onViewProfile(props.id)}
            className={`rider-card ${!props.isAvailable  ? 'unavailable' : ''}${!props.isOnline  ? 'offline' : ''}`}
        >
            <div className="rider-image-container">
                <img className='rider-image' src={props.profileImg.src} alt={props.profileImg.alt} />
            </div>
            <div className="rider-content">
                <p className='rider-name'>{props.name}</p>
                <p className='rider-vehicle'>{props.vehicle}</p>
            </div>

            {props.jobAssigned != null &&
            <div className="rider-job-assigned-indicator">
                <p className="rider-job">{findJobName(props.jobAssigned)}</p>
                <div className="rider-progress-bar">
                    <div className="rider-progress-fill" style={{ width: `${findRiderProgress(props.jobStartsAt, props.availableAt, props.clock)}%` }} />
                </div>
            </div>
            }
            {!props.isOnline &&
            <div className="rider-offline-overlay">
                <p>Offline</p>
            </div>
            }
        </div>
    )
}