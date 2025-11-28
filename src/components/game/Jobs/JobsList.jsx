import JobCard from './JobCard.jsx';
import '../../../styles/JobsList.css';

export default function JobsList({riders, jobs, setJobs, setRiders, clock}) {
    
    const jobEntries = jobs
        .filter(job => job.status == 'Uncompleted' )
        .map(job => (
            <JobCard 
            key={job.id}
            {...job}
            riders={riders}
            />
        ));
    
    return (
        <div className="jobs-list">
            <h2 className="list-title">JOBS</h2>
            {jobEntries}
        </div>
    );

}