import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ApplicantList() {
    const [applicationList, setApplicationList] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedExprience, setSelectedExperience] = useState("");

    useEffect(() => {
        loadApplication();
    }, []);

    useEffect(() => {
        setSelectedExperience("");
    }, [selectedPosition]);

    const loadApplication = async () => {
        const response = await axios.get("http://localhost:8080/application/getAllApplications");
        setApplicationList(response.data);
    };

    const totalPositions = [...new Set(applicationList.map(application => application.jobModel.jobTitle))];

    const totalExperienceType = [...new Set(applicationList.map(application => selectedPosition.length === 0 ? application.experienceType : selectedPosition === application.jobModel.jobTitle ? application.experienceType : null))];

    const selectPosition = (event) => {
        setSelectedPosition(event.target.value);
    };

    const selectExperience = (event) => {
        setSelectedExperience(event.target.value);
    };

    return (
        <div className='container mx-auto p-4'>
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
                    <select id="experience" name="selectedExperience" value={selectedExprience} onChange={selectExperience} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select Experience Level</option>
                        {totalExperienceType.map((level, index) => (
                            <option key={index} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.NO.</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Highest Education</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied for</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {applicationList.slice().reverse().map((application, index) => (
                            (selectedExprience.length === 0 || selectedExprience === application.experienceType) &&
                            (selectedPosition.length === 0 || selectedPosition === application.jobModel.jobTitle) && (
                                <tr key={application.applicantId}>
                                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{application.applicantFullName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{application.highestEducation}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{application.degreeName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{application.jobModel.jobTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{application.experienceType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                                        <NavLink to={`/application/${application.applicantId}`}>View application</NavLink>
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

export default ApplicantList;
