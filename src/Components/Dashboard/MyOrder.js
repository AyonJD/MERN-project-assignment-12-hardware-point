import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import loader from '../../Assets/Images/smallLoader.gif'

const MyOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    // console.log(email)
    // const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${email}`, {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    // }).then(res => res.json()))

    // let loader;
    // if (isLoading) {
    //     loader = <div>
    //         <img src={loaderImage} alt="" />
    //     </div>
    // }

    if (loading) {
        return <img src={loader} alt="" />
    }

    // useEffect(() => {
        const getItems = async () => {
            const email = user?.email
            const url = `http://localhost:5000/order?email=${email}`
            // console.log(url);
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                // console.log(data, "data");
                setOrders(data)

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

    // }, [])

    //handle delete order
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`https://localhost/5000/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        const matched = orders.filter(e => e._id !== id);
                        setOrders(matched)
                    } else {
                        alert('nothing')
                    }
                })
        }

    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <h1>Order</h1>
                        </th>
                        <th>Product</th>
                        <th>Price & Quantity</th>
                        <th>Number</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row  --> */}
                    {
                        orders.map((order, index) => <OrderTable handleDelete={handleDelete} index={index} order={order} key={order._id}></OrderTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;