import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function PostedJobs() {
    const [jobsData, setJobsData] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedExperience, setSelectedExperience] = useState("");

    const selectPosition = (event) => {
        setSelectedPosition(event.target.value);
    };

    const selectExperience = (event) => {
        setSelectedExperience(event.target.value);
    };

    useEffect(() => {
        loadApplications();
    }, []);

    useEffect(() => {
        setSelectedExperience("");
    }, [selectedPosition]);

    const loadApplications = async () => {
        try {
            const response = await axios.get("http://localhost:8080/jobs/getAllJobsPosted");
            setJobsData(response.data);
        } catch (error) {
            console.error("Error loading jobs:", error);
        }
    };

    const totalPositions = [...new Set(jobsData.map(job => job.jobTitle))];
    const totalExperienceType = [...(new Set(jobsData.map(job => selectedPosition.length === 0 ? job.experienceLevel : selectedPosition === job.jobTitle ? job.experienceLevel : null)))];

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:flex-row justify-around w-full max-w-screen-lg'>
                <div className="w-full md:w-1/3 m-1 p-2">
                    <label htmlFor="positions" className="block text-sm font-medium text-gray-700">Choose Position</label>
                    <select id="positions" name="selectedPosition" value={selectedPosition} onChange={selectPosition} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select Position</option>
                        {totalPositions.map((position, index) => (
                            <option key={index} value={position}>{position}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-1/3 m-1 p-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Choose Experience Level</label>
                    <select id="experience" name="selectedExperience" value={selectedExperience} onChange={selectExperience} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select Experience Level</option>
                        {totalExperienceType.map((level, index) => (
                            <option key={index} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='text-center w-full overflow-x-auto'>
                <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.NO.</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience Level</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Minimum required education level</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Post</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {jobsData.slice().reverse().map((job, index) => (
                            (selectedExperience === "" || selectedExperience === job.experienceLevel) &&
                            (selectedPosition === "" || selectedPosition === job.jobTitle) && (
                                <tr key={job.jobId}>
                                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.jobTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.experienceLevel}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.requiredDegree}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">16-07-2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                                        <NavLink to={`/job/${job.jobId}`}>View Job</NavLink>
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default PostedJobs;
