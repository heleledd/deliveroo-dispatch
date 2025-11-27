import { useState, useEffect } from 'react'
import jobPricer from '../helpers/jobPricer.js'

export default function useUpdateRidersJobs(
        clock, 
		riders, 
		setRiders, 
		jobs, 
		setJobs, 
		setDeliverooEarnings, 
		setFoodBusinessEarnings,
        setTotalOrderValue
    ) {
    
    useEffect(() => {
        let deliverooTotal = 0;
        let foodBusinessTotal = 0;
        let orderValue = 0;

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
            if (!c) return j;

            return {
                ...j,
                status: "Completed"
            }
        });

        
        // 4. Add earnings
        const finalRiders = newRiders.map(r => {
            const c = completedJobs.find(x => x.riderId === r.id);
            if (!c) return r;

            const job = jobs.find(j => j.id === c.jobId);

            // get pricing for this job
            const { 
                rider_earnings, 
                deliveroo_earnings, 
                food_business_earnings, 
                tip,
                orderValue 
            } = jobPricer(job);

            // accumulate global totals (not in the rider object)
            deliverooTotal += deliveroo_earnings;
            foodBusinessTotal += food_business_earnings;

            return {
                ...r,
                earningsToday: (r.earningsToday || 0) + rider_earnings,
                tipsEarned: (r.tipsEarned || 0) + tip,
            };
        });


        // 5. Apply updates ONCE
        setRiders(finalRiders);
        setJobs(newJobs);
        setDeliverooEarnings(prev => prev + deliverooTotal)
        setFoodBusinessEarnings(prev => prev + foodBusinessTotal)
        setTotalOrderValue(prev => prev + orderValue)

    }, [clock]);

}