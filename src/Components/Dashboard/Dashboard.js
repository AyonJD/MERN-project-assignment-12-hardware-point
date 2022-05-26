import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-primary my-5 text-center'>Welcome {user?.displayName}</h2>
                <div className="text-right">
                    <label htmlFor="dashboard-sidebar" className="btn btn-primary md:hidden mr-10 inline-block drawer-button text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms md:w-1/4 font-medium hover:font-medium px-5 py-2 rounded-md">Open Dashaboard</label>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        admin ? <>
                            <li className='text-primary sp-style font-bold text-xl'>
                                <Link to='/dashboard/user'>All User </Link></li>
                            <li className='text-primary sp-style font-bold text-xl'>
                                <Link to='/dashboard/manageOrder'>Manage-Order </Link></li>
                            <li className='text-primary sp-style font-bold text-xl'>
                                <Link to='/dashboard/manageTools'>Manage-Tools </Link></li>
                            <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/add'>Add Products </Link></li>


                        </>
                            :
                            <>

                                <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/myorder'>My Order </Link></li>

                                <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/add-review'>Add Review </Link></li>

                            </>
                    }
                    <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/my-profile'>My Profile </Link></li>

                </ul>


            </div>
        </div >
    );
};

export default Dashboard;