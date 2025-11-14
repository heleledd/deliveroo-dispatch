import { useEffect } from "react";

export default function useJobCompletedFlash(jobs, setJobs) {
    // make the job card flash green when a job is completed
	useEffect(() => {
		const t = setTimeout(() => {
			setJobs(prev =>
				prev.map(j =>
					j.justCompleted ? { ...j, justCompleted: false } : j
				)
			);
		}, 1000);

		return () => clearTimeout(t);
	}, [jobs]);
}