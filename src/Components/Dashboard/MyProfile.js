import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import loader from '../../Assets/Images/smallLoader.gif'
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [signedUser, loading, error] = useAuthState(auth);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // console.log(user)
    if (loading) {
        return <img src={loader} alt="" />
    }

    // useEffect(() => {
    const getItems = async () => {
        const email = signedUser?.email
        const url = `http://localhost:5000/user?email=${email}`
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
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="card">
                <img src="img.jpg" alt="John" style={{ width: "100%" }} />
                <h1>John Doe</h1>
                <p className="title">CEO &amp; Founder, Example</p>
                <p>Harvard University</p>
                <a href="#">
                    <i className="fa fa-dribbble" />
                </a>
                <a href="#">
                    <i className="fa fa-twitter" />
                </a>
                <a href="#">
                    <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                    <i className="fa fa-facebook" />
                </a>
                <p>
                    <button>Contact</button>
                </p>
            </div>
        </div>
    );
};

export default MyProfile;