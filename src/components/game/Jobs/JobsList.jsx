import JobCard from './JobCard.jsx';
import '../../../styles/JobsList.css';

export default function JobsList({riders, jobs, setJobs, setRiders}) {
    function handleSelectRider(riderId) {
        // Update the selected rider's availability to false
        setRiders(prev =>
        prev.map(r =>
            r.id === parseInt(riderId)
            ? { ...r, isAvailable: false }
            : r
        )
        );
    }
    
    const jobEntries = jobs.map((job) => (
                <JobCard 
                    key={job.id}
                    {...job}
                    riders={riders}
                    onSelectRider={handleSelectRider}
                />
            ))
    
    return (
        <div className="jobs-list">
            <h2>Available Jobs</h2>
            {jobEntries}
        </div>
    )

}