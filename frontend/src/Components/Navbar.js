import React from 'react'
import { json, NavLink, useNavigate } from 'react-router-dom'
import HrLoginPage from '../HrLoginPage'
import closeIcon from '../Assests/closeButton.jpg'
import logout from '../Assests/logout.png'

function Navbar() {
    const navigate = useNavigate()
    const openHrSignInForm = () => {
        document.getElementById("signInFormHr").showModal()
    }
    const logOut = () => {
        localStorage.clear()
        navigate("/postedJobs")
    }
    const closeDialogBox = () => {
        document.getElementById("signInFormHr").close()
    }
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl">Job Applications</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        {/* <NavLink className="mx-5 hover:text-gray-900 borxer-2 p-2 rounded-lg bg-gray-300" to="/">Home</NavLink> */}
                        {localStorage.getItem("loginDetails") ? <NavLink className="mx-5 my-1 hover:text-gray-900 borxer-2 p-2 rounded-lg bg-gray-300" to="/">Post New Job</NavLink> : ""}
                        {localStorage.getItem("loginDetails") ? <NavLink className="mx-5 my-1 hover:text-gray-900 borxer-2 p-2 rounded-lg bg-gray-300" to="/aplicantList">Received Applications</NavLink> : ""}
                        <NavLink className="mx-5 hover:text-gray-900 my-1 borxer-2 p-2 rounded-lg bg-gray-300" to="/postedJobs">Posted jobs</NavLink>
                    </nav>
                    {
                        localStorage.getItem("loginDetails") ? <button onClick={logOut} className=" bg-blue-200 font-semibold text-black hover:bg-blue-500 hover:text-white border-0 py-1 px-3  rounded  hover:scale-105 hover:shadow-lg transition-all">{localStorage.getItem("loginDetails") ? `${JSON.parse(localStorage.getItem("loginDetails")).userName} ➦` : ""}
                        </button> : <button onClick={openHrSignInForm} className=" bg-blue-200 font-semibold text-black hover:bg-blue-500 hover:text-white border-0 py-1 px-3  rounded  hover:scale-105 hover:shadow-lg transition-all">Hr Login</button>
                    }
                </div>
            </header>
            <dialog id="signInFormHr" className='rounded-lg w-96 bg-gray-50'>
                <div className='flex justify-end m-2 '>
                    <img src={closeIcon} onClick={closeDialogBox} className='h-6 w-6 hover:scale-105' />
                </div>
                <HrLoginPage closeFunction={closeDialogBox} />
            </dialog>
        </div>
    )
}

export default Navbar
