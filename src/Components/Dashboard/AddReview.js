import React from 'react';
import StarRating from './Review/StarRating';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [customRating, setCustomRating] = React.useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmitReview = data => {
        const userReview = {
            customRating,
            review: data.review,
            user
        }
        fetch('http://localhost:5000/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }
            );

    }
    return (
        <div className='text-center'>
            <h1>Please leave a review</h1>
            <StarRating setCustomRating={setCustomRating}></StarRating>
            <form onSubmit={handleSubmit(onSubmitReview)}>
                <textarea class="textarea textarea-bordered w-1/2" placeholder="Your Review"
                    {...register("review", { required: true, minLength: 10 })}
                ></textarea>
                <div className='text-center'>
                    <input type="submit" className='btn btn-outline btn-primary mx-auto w-32 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;