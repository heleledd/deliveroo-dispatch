export default function assignJobToRider(riderId, jobId, jobs, riders, clock, setJobs, setRiders, isPaused) {
        const theRiderId = parseInt(riderId)
        
        // retrieve job and rider
        const job = jobs.find(j => j.id === jobId);
        const rider = riders.find(r => r.id === theRiderId)

        // get job duration and the rider's speed
        const distance = job.distance;
        const speed = rider.speed;
        const duration = distance * speed;
        const startTime = clock;
        const finishTime = clock + duration;
        
        // Update the selected rider's availability to false and assign them the job ID
        setRiders(prev =>
            prev.map(r =>
                r.id === parseInt(riderId)
                ? { ...r, isAvailable: false, jobAssigned: jobId, jobStartsAt: startTime, availableAt: finishTime }
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