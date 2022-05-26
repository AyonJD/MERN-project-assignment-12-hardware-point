import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import loader from '../../Assets/Images/smallLoader.gif'
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const MyProfile = () => {
    const [signedUser, loading, error] = useAuthState(auth);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    // console.log(user)
    if (loading) {
        return <img src={loader} alt="" />
    }

    // useEffect(() => {
    const getItems = async () => {
        const email = signedUser?.email
        const url = `https://stormy-bayou-62598.herokuapp.com/user/${email}`
        // console.log(url);
        try {
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            // console.log(data, "data");
            setUser(data)

        } catch (error) {
            // console.log(error);
            if (error.response.status === 403 || error.response.status === 401) {
                signOut(auth)
                navigate('/login')
            }
            // alert(error.message)
        }
    }
    getItems()
    return (
        <div>
            {
                user?.map(singleUser => <ProfileCard singleUser={singleUser} key={singleUser._id}></ProfileCard>)
            }
        </div>
    );
};

export default MyProfile;