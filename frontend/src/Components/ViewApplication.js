import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loader from '../Assests/loader.gif';

function ViewApplication() {
    const id = useParams();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [application, setApplication] = useState({});

    useEffect(() => {
        loadApplication();
    }, []);

    const loadApplication = async () => {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/application/getApplicationById/${id.id}`);
        setLoading(false);
        setApplication(response.data);
        setTitle(response.data.jobModel.jobTitle);
    };

    return (
        <div className="py-8 px-4 bg-gray-100 min-h-screen">
            {localStorage.getItem("loginDetails") ? (
                <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="py-4">
                        <h2 className="text-2xl font-bold mb-4 text-green-800 font-semibold ml-1 text-center md:text-left">Application Details</h2>
                        {loading ? (
                            <div className='w-full flex justify-center'>
                                <img src={loader} alt="Loading..." />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8">
                                {/* Left Column */}
                                <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-700 text-center md:text-left">Personal Information</h3>
                                    <ul className="divide-y divide-gray-200">
                                        <ListItem label="Candidate Name" value={application.applicantFullName} />
                                        <ListItem label="Mobile Number" value={application.mobileNumber} />
                                        <ListItem label="Email Id " value={application.email} />
                                        <ListItem label="College Name" value={application.collegeName} />
                                        <ListItem label="Graduation Year" value={application.graduationYear} />
                                        <ListItem label="Highest Education" value={application.highestEducation} />
                                        <ListItem label="Degree Name" value={application.degreeName} />
                                        <ListItem label="CGPA in Graduation" value={application.cgpaGraduation} />
                                    </ul>
                                </div>

                                {/* Right Column */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-700 text-center md:text-left">Application Details</h3>
                                    <ul className="divide-y divide-gray-200">
                                        <ListItem label="Experience Level" value={application.experienceType} />
                                        <li className="py-2 flex">
                                            <span className="w-1/2 font-semibold text-gray-600">Resume link:</span>
                                            <a href={application.resumeLink} className="w-1/2 text-blue-500 hover:text-blue-700 font-semibold ml-2 break-all" target='_blank'>{application.resumeLink}</a>
                                        </li>
                                        <li className="py-2 flex">
                                            <span className="w-1/2 font-semibold text-gray-600">Intro video link:</span>
                                            <a href={application.introVideoLink} className="w-1/2 text-blue-500 hover:text-blue-700 font-semibold ml-2 break-all" target='_blank'>{application.introVideoLink}</a>
                                        </li>
                                        <li className="py-2 flex">
                                            <span className="w-1/2 font-semibold text-gray-600">Portfolio link:</span>
                                            <a href={application.portfolioLink} className="w-1/2 text-blue-500 hover:text-blue-700 font-semibold ml-2 break-all" target='_blank'>{application.portfolioLink}</a>
                                        </li>
                                        <ListItem label="Applied For" value={title} />
                                        <ListItem label="Experience in years" value={application.experienceInYear} />
                                        <ListItem label="Date of Application" value={application.dateOfApplication} />
                                        <li className="py-2 flex">
                                            <span className="w-1/2 font-semibold text-gray-600">About Applicant:</span>
                                            <p className="w-1/2 text-gray-700 break-words">{application.about}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className='text-3xl font-bold text-center mt-20'> Please Log in First </div>
            )}
        </div>
    );
}

function ListItem({ label, value }) {
    return (
        <li className="py-2 flex pl-5">
            <span className="w-1/2 font-semibold text-gray-600">{label}:</span>
            <span className="w-1/2 text-green-800 font-semibold ml-2 break-all overflow-wrap">{value}</span>
        </li>
    );
}

export default ViewApplication;
