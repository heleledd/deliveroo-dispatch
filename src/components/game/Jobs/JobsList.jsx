import jobs from '../../../data/jobs.js';
import riders from '../../../data/riders.js';
import JobCard from './JobCard.jsx';
import '../../../styles/JobsList.css';

export default function JobsList() {
    const jobEntries = jobs.map((job) => (
                <JobCard 
                    key={job.id}
                    {...job}
                    riders={riders}
                />
            ))
    
    return (
        <div className="jobs-list">
            <h2>Available Jobs</h2>
            {jobEntries}
        </div>
    )

}