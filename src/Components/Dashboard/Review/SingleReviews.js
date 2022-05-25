import React from 'react';
import unknownImage from '../../../Assets/Images/unknown.jpg'

const SingleReviews = ({ singleReview }) => {
    // console.log(singleReview)
    const { user, customRating, review } = singleReview;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className="w-1/2 rounded-full mx-auto" src={
                    user ? user?.photoURL : unknownImage
                } alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{user?.displayName}</h2>
                <p>{customRating}</p>
                <p>{review}</p>

            </div>
        </div>
    );
};

export default SingleReviews;