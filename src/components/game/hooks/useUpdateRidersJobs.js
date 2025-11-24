import { useState, useEffect } from 'react'

export default function useUpdateRidersJobs(clock, riders, setRiders, jobs, setJobs) {
    
    useEffect(() => {

        // 1. compute completed jobs AND new riders
        const completedJobs = [];
        const newRiders = riders.map(r => {
            if (!r.isAvailable && clock >= r.availableAt) {
                if (r.jobAssigned) {
                    completedJobs.push({ jobId: r.jobAssigned, riderId: r.id })
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
        });

        // 2. If no jobs completed, just update riders
        if (completedJobs.length === 0) {
            setRiders(newRiders);
            return;
        }

        // 3. Update jobs
        const newJobs = jobs.map(j => {
            const c = completedJobs.find(x => x.jobId === j.id);
            return c
                ? { ...j, status: "Completed", justCompleted: true }
                : j;
        });

        // 4. Add earnings
        const finalRiders = newRiders.map(r => {
            const c = completedJobs.find(x => x.riderId === r.id);
            if (!c) return r;

            const job = jobs.find(j => j.id === c.jobId);

            return {
                ...r,
                earningsToday: (r.earningsToday || 0) + (job?.pay || 0)
            };
        });

        // 5. Apply updates ONCE
        setRiders(finalRiders);
        setJobs(newJobs);

    }, [clock]);

}