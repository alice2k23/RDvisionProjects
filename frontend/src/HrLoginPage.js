import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HrLoginPage = (props) => {
    const [logInDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setLoginDetails({
            ...logInDetails,
            [e.target.name]: e.target.value
        })
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:8080/user/signIn", logInDetails)
        if (response.data.userName) {
            // Assuming you have a response object containing data like this:

            // Store data in localStorage
            localStorage.setItem("loginDetails", JSON.stringify({
                userName: response.data.userName,
                email: response.data.email
            }));
            setLoginDetails({
                email: "",
                password: ""
            })
            props.closeFunction()
            navigate("/")

        } else if (!response.data) {
            console.log("Wrong password")

        } else if (!response.data.userName) {
            console.log("You email is not resisterd contact to admin")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in Hr Only</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={logInDetails.email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={logInDetails.password}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        {/* <div className="text-sm">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div> */}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HrLoginPage;
