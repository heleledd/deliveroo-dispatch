import JobCard from './JobCard.jsx';
import '../../../styles/JobsList.css';

export default function JobsList({riders, jobs, setJobs, setRiders, clock}) {
    
    function handleSelectRider(riderId, jobId) {
        const theRiderId = parseInt(riderId)
        
        // retrieve job and rider
        const job = jobs.find(j => j.id === jobId);
        const rider = riders.find(r => r.id === theRiderId)

        // get job duration and the rider's speed
        const distance = job.distance;
        const speed = rider.speed;
        const duration = distance * speed;
        const finishTime = clock + duration
        
        // Update the selected rider's availability to false and assign them the job ID
        setRiders(prev =>
            prev.map(r =>
                r.id === parseInt(riderId)
                ? { ...r, isAvailable: false, jobAssigned: jobId, availableAt: finishTime }
                : r
            )
        );

        setJobs(prev =>
            prev.map(j => 
                j.id === jobId
                ? { ...j, assignedTo: theRiderId, status: 'In Progress' }
                : j
            )
        );
    }
    
    const jobEntries = jobs
        .filter(job => job.status !== 'Completed')
        .map(job => (
            <JobCard 
            key={job.id}
            {...job}
            riders={riders}
            onSelectRider={handleSelectRider}
            />
        ));
    
    return (
        <div className="jobs-list">
            <h2>Available Jobs</h2>
            {jobEntries}
        </div>
    );

}