import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import loader from '../../Assets/Images/smallLoader.gif'
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51L3PqJCnJiLLpGIeL4Uixr7K4bJ183L3tSUyFg2ENBX5ovRQKSQhaYTR8kG7WbcfvkvyuLa5RfB9eZlBJfohfpYd00PM7gqopw');
const Payment = () => {
    const { id } = useParams()
    const url = `https://stormy-bayou-62598.herokuapp.com/payment/${id}`
    const { data: myOrder, refetch, isLoading } = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <img src={loader} alt="" />
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-amber-700 font-bold text-4xl sp-style">Hey, {myOrder.userName
                    }</p>
                    <h2 className="sp-style text-2xl ">
                        Please Pay for purchasing :- <span className="text-blue-700"> {myOrder.productName}</span>
                    </h2>

                    <p className="text-xl sp-style font-bold">Please pay First: ${myOrder.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <PaymentForm myOrder={myOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;