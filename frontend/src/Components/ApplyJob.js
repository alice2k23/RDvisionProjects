import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApplyJob() {
    const navigate = useNavigate()
    const jobId = useParams();
    const [applicationDetails, setApplicationDetails] = useState({
        applicantFullName: "",
        email: "",
        highestEducation: "",
        collegeName: "",
        mobileNumber: "",
        degreeName: "",
        graduationYear: "",
        cgpaGraduation: "",
        resumeLink: "",
        introVideoLink: "",
        portfolioLink: "",
        currentLocation: "",
        experienceType: "", // Note: Check if this state is needed or if it's a typo (should be experience instead of experienceType)
        experienceInYear: "",
        about: "",
        jobModel: {
            jobId: jobId.id
        }
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setApplicationDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:8080/application/addApplication", applicationDetails)
        console.log(response)
        if (response.status === 200) {
            handleOnClick()
            setApplicationDetails({
                applicantFullName: "",
                email: "",
                highestEducation: "",
                collegeName: "",
                mobileNumber: "",
                degreeName: "",
                graduationYear: "",
                cgpaGraduation: "",
                resumeLink: "",
                introVideoLink: "",
                portfolioLink: "",
                currentLocation: "",
                experienceType: "", // Note: Check if this state is needed or if it's a typo (should be experience instead of experienceType)
                experienceInYear: "",
                about: "",
                jobModel: {
                    jobId: jobId.id
                }
            })
            setTimeout(() => {
                navigate("/postedJobs")
            }, 3000)
        }
    };

    const handleOnClick = () => toast("Application Submitted");

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Apply for Frontend Developer</h1>
                    </div>
                    <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="applicantFullName" className="leading-7 text-sm text-gray-600">Full Name</label>
                                    <input onChange={handleOnChange} type="text" id="name" name="applicantFullName" value={applicationDetails.applicantFullName} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="mobileNumber" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                                    <input onChange={handleOnChange} type="text" id="mobileNumber" name="mobileNumber" value={applicationDetails.mobileNumber} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input onChange={handleOnChange} type="email" id="email" name="email" value={applicationDetails.email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="highestEducation" className="leading-7 text-sm text-gray-600">Highest Education</label>
                                    <input onChange={handleOnChange} type="text" id="highestEducation" name="highestEducation" value={applicationDetails.highestEducation} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="degreeName" className="leading-7 text-sm text-gray-600">Degree Name</label>
                                    <input onChange={handleOnChange} type="text" id="degreeName" name="degreeName" value={applicationDetails.degreeName} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="collegeName" className="leading-7 text-sm text-gray-600">College Name</label>
                                    <input onChange={handleOnChange} type="text" id="collegeName" name="collegeName" value={applicationDetails.collegeName} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="cgpaGraduation" className="leading-7 text-sm text-gray-600">CGPA in Graduation</label>
                                    <input onChange={handleOnChange} type="number" id="cgpaGraduation" name="cgpaGraduation" value={applicationDetails.cgpaGraduation} step="0.1" max="10" min="5" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="graduationYear" className="leading-7 text-sm text-gray-600">Graduation Year</label>
                                    <input onChange={handleOnChange} type="text" placeholder="Example: 2022" id="graduationYear" name="graduationYear" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="resumeLink" className="leading-7 text-sm text-gray-600">Resume (Google Drive Link)</label>
                                    <input onChange={handleOnChange} type="text" id="resumeLink" name="resumeLink" value={applicationDetails.resumeLink} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="experienceType" className="leading-7 text-sm text-gray-600">Experience Type</label>
                                    <select onChange={handleOnChange} id="experienceType" name="experienceType" value={applicationDetails.experienceType} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        <option value="">Select Experience Type</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="Experienced">Experienced</option>
                                    </select>
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="experienceInYear" className="leading-7 text-sm text-gray-600">Experience in Years in Required Field</label>
                                    <input onChange={handleOnChange} type="number" id="experienceInYear" name="experienceInYear" value={applicationDetails.experienceInYear} min="0" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full ">
                                <div className="relative">
                                    <label htmlFor="introVideoLink" className="leading-7 text-sm text-gray-600">Intro-video (Google Drive Link)</label>
                                    <input onChange={handleOnChange} type="text" id="introVideoLink" name="introVideoLink" value={applicationDetails.introVideoLink} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="portfolioLink" className="leading-7 text-sm text-gray-600">Portfolio Link (Optional)</label>
                                    <input onChange={handleOnChange} type="text" id="portfolioLink" name="portfolioLink" value={applicationDetails.portfolioLink} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="currentLocation" className="leading-7 text-sm text-gray-600">Current Location</label>
                                    <input onChange={handleOnChange} type="text" id="currentLocation" name="currentLocation" value={applicationDetails.currentLocation} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="about" className="leading-7 text-sm text-gray-600">Tell us about you</label>
                                    <textarea onChange={handleOnChange} id="about" name="about" value={applicationDetails.about} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply Now</button>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
            <ToastContainer />
        </div>
    );
}

export default ApplyJob;
