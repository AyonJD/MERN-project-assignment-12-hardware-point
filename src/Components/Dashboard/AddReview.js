import React from 'react';
import StarRating from './Review/StarRating';

const AddReview = () => {
    return (
        <div className='text-center'>
            <h1>Please leave a review</h1>
            <StarRating></StarRating>
            <form>
                <textarea class="textarea textarea-bordered w-1/2" placeholder="Your Review"></textarea>
                <div className='text-center'>
                    <input type="submit" className='btn btn-outline btn-primary mx-auto w-32 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;