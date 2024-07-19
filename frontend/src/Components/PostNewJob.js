import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loader from '../Assests/loader.gif';

function PostNewJob() {
    const [loading, setLoading] = useState(false);
    const [jobDetails, setJobDetails] = useState({
        jobTitle: "",
        requiredDegree: "",
        experienceLevel: "",
        jobDescription: "",
        requiredSkills: "",
        hrModel: {
            id: 1
        }
    });

    const handleOnClick = () => toast("Job Posted Successfully");
    const infoForSignin = () => toast("Please login First");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setJobDetails(prevJobDetails => ({
            ...prevJobDetails,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (localStorage.getItem("loginDetails")) {
            setLoading(true);
            try {
                const response = await axios.post("http://localhost:8080/jobs/addJob", jobDetails);
                if (response.status === 200) {
                    handleOnClick();
                    setJobDetails({
                        jobTitle: "",
                        requiredDegree: "",
                        experienceLevel: "",
                        jobDescription: "",
                        requiredSkills: "",
                        hrModel: {
                            id: 1
                        }
                    });
                }
            } catch (error) {
                console.error("Error posting job:", error);
            }
            setLoading(false);
        } else {
            infoForSignin();
        }
    };

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Post New Job</h1>
                    </div>
                    <div className="lg:w-2/3 mx-auto">
                        <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="jobTitle" className="leading-7 text-sm text-gray-600">Job Title</label>
                                    <input
                                        required
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={jobDetails.jobTitle}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="experienceLevel" className="leading-7 text-sm text-gray-600">Experience Level</label>
                                    <input
                                        required
                                        type="text"
                                        id="experienceLevel"
                                        name="experienceLevel"
                                        value={jobDetails.experienceLevel}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="requiredSkills" className="leading-7 text-sm text-gray-600">Required Skills</label>
                                    <input
                                        required
                                        type="text"
                                        id="requiredSkills"
                                        name="requiredSkills"
                                        value={jobDetails.requiredSkills}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="requiredDegree" className="leading-7 text-sm text-gray-600">Required Degree</label>
                                    <input
                                        required
                                        type="text"
                                        id="requiredDegree"
                                        name="requiredDegree"
                                        value={jobDetails.requiredDegree}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="jobDescription" className="leading-7 text-sm text-gray-600">Job Description</label>
                                    <textarea
                                        id="jobDescription"
                                        name="jobDescription"
                                        value={jobDetails.jobDescription}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                {loading ? (
                                    <div className="flex justify-center">
                                        <img src={loader} alt="Loading..." className="w-10 h-10" />
                                    </div>
                                ) : (
                                    <button type="submit" className="w-full sm:w-auto flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        Post Job
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}

export default PostNewJob;
