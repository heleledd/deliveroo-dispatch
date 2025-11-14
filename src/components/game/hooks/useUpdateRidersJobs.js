import { useState, useEffect } from 'react'
import initialJobs from '../../../data/jobs.js';
import initialRiders from '../../../data/riders.js';

export default function useUpdateRidersJobs(clock) {
    const [riders, setRiders] = useState(initialRiders);
    const [jobs, setJobs] = useState(initialJobs);

    useEffect(() => {
        const completedJobs = [];

        setRiders(prevRiders =>
            prevRiders.map(r => {
                if (!r.isAvailable && clock >= r.availableAt) {
                    if (r.jobAssigned) {
                        completedJobs.push({
                            jobId: r.jobAssigned,
                            riderId: r.id
                        });
                    }

                    return {
                        ...r,
                        isAvailable: true,
                        jobAssigned: null,
                        jobStartsAt: null,
                        availableAt: null
                    };
                }
                return r;
            })
        );

        // Update jobs in a *separate* state update
        if (completedJobs.length > 0) {
            setJobs(prevJobs =>
                prevJobs.map(j => {
                    const match = completedJobs.find(c => c.jobId === j.id);
                    if (match) {
                        // Update rider earnings *in a separate safe update*
                        setRiders(prevR =>
                            prevR.map(r =>
                                r.id === match.riderId
                                    ? { ...r, earningsToday: (r.earningsToday || 0) + (j.pay || 0) }
                                    : r
                            )
                        );

                        return {
                            ...j,
                            status: 'Completed',
                            justCompleted: true
                        };
                    }
                    return j;
                })
            );
        }

    }, [clock]);

    return { riders, setRiders, jobs, setJobs };
}