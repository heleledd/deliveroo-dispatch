import {useState, useEffect} from 'react'
import getSpawnChance from '../helpers/getSpawnChance'

export default function useJobSpawner() {
    useEffect(() => {
        if (jobPool.length === 0) return; // no more jobs left

        const spawnChance = getSpawnChance(clock);

        if (Math.random() < spawnChance) {
            // pick a random job from pool
            const index = Math.floor(Math.random() * jobPool.length);
            const newJob = jobPool[index];

            // move job from pool → active jobs
            setJobs(prev => [...prev, newJob]);

            // remove from pool
            setJobPool(prev => prev.filter((_, i) => i !== index));
        }
    }, [clock, jobPool]);

}