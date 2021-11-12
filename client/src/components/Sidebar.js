import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Sidebar = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className='drag relative min-h-screen md:flex'>
            {/* mobile menu bar */}
            <div>
                {/* build hanburger menu and dropdown */}
            </div>
            {/* sidebar */}
            <div className='sidebar absolute inset-y-0 left-0
                            w-48 pt-8 px-4
                            bg-white text-black
                            dark:bg-gray-600 dark:text-white
                            transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
                <h1 className='no-drag font-extrabold block py-2.5'>DoorSock</h1>
                {Auth.loggedIn() ? (
                    <>
                        <Link to="/dashboard">
                            <p className='no-drag py-2.5 px-4 rounded flex
                                    hover:bg-gray-100 dark:hover:bg-gray-700'>
                                {/* home svg */}
                                <svg className="w-5 h-5 text-green-300   mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <span>Dashboard</span>
                            </p>
                        </Link>
                        <Link to="/planner">
                            <p className='no-drag py-2.5 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex'>
                                {/* calender svg */}
                                <svg className="w-5 h-5 text-purple-300 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <span>Planner</span>
                            </p>
                        </Link>
                        <Link to="/login" onClick={logout}>
                            <p className='no-drag py-2.5 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex'>
                                {/* logout svg */}
                                <svg className="w-5 h-5 text-red-300 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                <span>Logout</span>
                            </p>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/signup">
                            <p className='no-drag py-2.5 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex'>
                                {/* logout svg */}
                                <svg className="w-5 h-5 text-red-300 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                <span>Signup</span>
                            </p>
                        </Link>
                        <Link to="/login">
                            <p className='no-drag py-2.5 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex'>
                                {/* Logout svg */}
                                <svg className="w-5 h-5 text-red-300 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                <span>Login</span>
                            </p>
                        </Link>
                    </>
                )}
                <nav>
                </nav>
            </div>
        </header>
    );
}

export default Sidebar;