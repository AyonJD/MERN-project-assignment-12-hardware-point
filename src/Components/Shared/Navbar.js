import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Assets/Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useAuthState(auth)
    // console.log(user[0]?.displayName);
    const navigate = useNavigate();
    //Signout------->
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Log Out successful", {
                    toastId: "signOutSuccess"
                });
                navigate('/login');
            })
        localStorage.removeItem('token');
    }
    return (
        <div className=' sticky top-0 z-50 shadow-sm'>
            <div className="bg-gradient-to-b from-primary to-secondary hidden md:block">
                <div className="flex justify-between items-center h-12 container mx-auto">
                    <div className=" text-white text-md">
                        <p>Get Free Shipping – Free 30 Day Money Back Guarantee</p>
                    </div>
                    <div className="right-icon flex text-white">
                        <Link to="https://www.facebook.com/ayon.jodder.75/"><BsFacebook className='ml-8 text-xl'></BsFacebook></Link>
                        <Link to="https://github.com/AyonJD"><BsTwitter className='ml-8 text-xl'></BsTwitter></Link>
                        <Link to="https://github.com/AyonJD"><BsInstagram className='ml-8 text-xl'></BsInstagram></Link>
                    </div>
                </div>
            </div>

            <nav className="bg-[#F5F5F5] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-fit">
                                <h1 onClick={() => navigate('/')}
                                    className="cursor-pointer uppercase text-xl md:text-2xl font-bold logo">
                                    Hardware Point.
                                </h1>
                            </div>
                            <div className="hidden md:flex justify-between items-center md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                    <CustomLink
                                        to="/"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </CustomLink>
                                    <CustomLink
                                        to="/tools"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Tools
                                    </CustomLink>

                                    {
                                        user[0] && (
                                            <>
                                                <CustomLink
                                                    to="/dashboard"
                                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    Dashboard
                                                </CustomLink>

                                                {/* <CustomLink
                                                    to="add-item"
                                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    Add Item
                                                </CustomLink> */}

                                                {/* <CustomLink
                                                    to="my-items"
                                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    My Items
                                                </CustomLink> */}
                                            </>
                                        )
                                    }

                                    <CustomLink
                                        to="/blog"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Blog
                                    </CustomLink>

                                    <CustomLink
                                        to="portfolio"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Portfolio
                                    </CustomLink>

                                    <CustomLink
                                        to="contact-us"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </CustomLink>
                                </div>
                                {
                                    user[0]?.displayName && <h1 className='cursor-pointer text-xl font-bold border border-gray-500 rounded-sm text-primary px-1' onClick={() => navigate(`dashboard/my-profile`)}>{user[0]?.displayName.split(' ')[0]}</h1>
                                }
                                {
                                    user[0] ? <button onClick={handleSignOut} className='md:ml-24 text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md'>Logout</button> : <button onClick={() => navigate('/login')} className='md:ml-24 text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary  transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md'>Login</button>
                                }
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {
                                user[0] ? <button onClick={handleSignOut} className='md:ml-24 text-sm md:hidden block text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-3 py-1 rounded-md'>Logout</button> : <button onClick={() => navigate('/login')} className='md:ml-24 text-sm md:hidden block text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-3 py-1 rounded-md'>Login</button>
                            }
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-800 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <CustomLink
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </CustomLink>
                                <CustomLink
                                    to="/tools"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Tools
                                </CustomLink>

                                {
                                    user[0] && (
                                        <>
                                            <CustomLink
                                                to="/dashboard"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                Dashboard
                                            </CustomLink>

                                            {/* <CustomLink
                                                to="/add-item"
                                                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                Add Item
                                            </CustomLink> */}

                                            {/* <CustomLink
                                                to="/my-items"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                My Items
                                            </CustomLink> */}
                                        </>
                                    )
                                }

                                <CustomLink
                                    to="/blog"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Blog
                                </CustomLink>

                                <CustomLink
                                    to="portfolio"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Portfolio
                                </CustomLink>

                                <CustomLink
                                    to="/contact-us"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </CustomLink>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Navbar;