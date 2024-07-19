import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function ViewJob() {
    const [job, setJob] = useState({});
    const jobId = useParams();

    useEffect(() => {
        loadJob();
    }, []);

    const loadJob = async () => {
        const response = await axios.get(`http://localhost:8080/jobs/getJobById/${jobId.id}`);
        setJob(response.data);
    };

    return (
        <div className='flex flex-col items-center px-4 py-5 md:px-8 lg:px-16'>
            <div className='text-xl font-medium mb-2'>Job Title: {job.jobTitle}</div>
            <div className='text-sm text-gray-600 mb-2'>Post Date: {job.dateOfPost}</div>
            <div className='text-sm text-gray-600 mb-2'>Required Skills: {job.requiredSkills}</div>
            <div className='text-sm text-gray-600 mb-2'>Experience Level: {job.experienceLevel}</div>
            <div className='text-sm text-gray-600 mb-2'>Required Degree: {job.requiredDegree}</div>
            <div className='text-xl font-semibold mt-4 mb-2'>Job Description:</div>
            <p className='text-sm text-gray-700 leading-6 text-justify'>{job.jobDescription}</p>
            <div className='flex justify-center items-center w-full mt-6'>
                <NavLink className='px-4 py-2 rounded-lg bg-blue-300 text-blue-800 font-semibold hover:bg-blue-800 hover:text-white transition-all' to={`/apply/${job.jobId}`}>Apply For this job</NavLink>
            </div>
        </div>
    );
}

export default ViewJob;
