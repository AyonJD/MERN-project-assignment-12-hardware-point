import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import unknownAvatar from '../../Assets/Images/unknown.jpg'
import Loader from '../Loader/Loader';

const ProfileCard = ({ singleUser }) => {
    const { displayName, email, photoURL, role, number, address, institute } = singleUser;
    const navigate = useNavigate()

    if (!singleUser) {
        return <Loader></Loader>
    }
    // console.log(singleUser)
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="card profile-card">
                {
                    photoURL ? <img src={photoURL} alt="John" style={{ width: "100%" }} /> : <img src={unknownAvatar} alt="John" style={{ width: "100%" }} />
                }
                <h1>Name: {displayName}</h1>
                <h1>Email: {email}</h1>
                <h1>Institute: {
                    institute ? institute : "N/A"
                }</h1>
                <h1>Number: {
                    number ? number : "N/A"
                }</h1>
                <h1>Address: {
                    address ? address : "N/A"
                }</h1>
                <p className="title">Role: {
                    role === 'admin' ? 'Admin' : 'General User'
                }</p>
                <div>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-dribbble" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-twitter" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-linkedin" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-facebook" />
                    </Link>
                </div>
                <p>
                    <button onClick={() => navigate(`/dashboard/my-profile/edit-profile`)}>Update Profile</button>
                </p>
            </div>
        </>
    );
};

export default ProfileCard;