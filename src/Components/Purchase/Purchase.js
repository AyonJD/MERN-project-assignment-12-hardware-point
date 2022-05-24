import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { image, name, availableQuantity, price, details, minOrderQuantity, _id } = tool;
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [quantity, setQuantity] = useState(minOrderQuantity);
    const [user] = useAuthState(auth);
    const [userInputData, setuserInputData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id, tool])

    //handle quantity change
    const handleQuantity = e => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        if (inputQuantity > availableQuantity) {
            alert('We dont have enough quantity');
        } else if (inputQuantity < minOrderQuantity) {
            alert(`Minimum order quantity is ${minOrderQuantity}`);
        } else {

            setQuantity(inputQuantity)

        }
        e.target.quantity.value = '';

    }

    //handle submit
    const handleSubmitParam = (data, e) => {

        const userName = user?.displayName;
        const userInput = {
            userName,
            email: user?.email,
            number: data?.number,
            address: data?.address,
            quantity: quantity,
            price: quantity * price,
            image,
            productName: name,
            details,
        }
        setuserInputData(userInput);

        //post quantity to database
        if (!quantity) {
            alert("Quantity field can't be empty.");
        } else {
            const newQuantity = parseInt(availableQuantity) - parseInt(quantity)
            const newQuantityObj = { newQuantity }
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantityObj)
            })
                .then(res => res.json())
                .then(data => {

                    alert('Purchase Successful')
                    e.target.reset()
                })

            //post order to database
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInput)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }



    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mb-20 py-16 mt-10">
            <div className='md:w-1/2 md:px-10'>
                <figure><img className='w-2/3' src={image} alt="Album" /></figure>
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price: ${price}</p>
                <p>Stock: {availableQuantity}</p>
                <form onSubmit={handleQuantity}>
                    <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                        required=""
                    />
                    <button type='submit' className=" text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Proceed</button>
                </form>
            </div>

            <div className="card-body">


                <PurchaseForm handleSubmitParam={handleSubmitParam} tool={tool} quantity={quantity}></PurchaseForm>

            </div>
        </div>
    );
};

export default Purchase;