import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import unknownImage from '../../../Assets/Images/unknown.jpg'

const SingleReviews = ({ singleReview }) => {
    // console.log(singleReview)
    const { user, customRating, review } = singleReview;

    let myIcon;
    if (customRating == 1) {
        myIcon = <div className='flex items-center'>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (customRating == 2) {
        myIcon = <div className='flex items-center'> <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>

        </div>
    }
    else if (customRating == 3) {
        myIcon = <div className='flex items-center'> <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (customRating == 4) {
        myIcon = <div className='flex items-center'>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color icon-color-empty mx-1' icon={faStar}></FontAwesomeIcon>

        </div>

    }
    else if (customRating == 5) {
        myIcon = <div className='flex items-center'>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color mx-1' icon={faStar}></FontAwesomeIcon>

        </div>
    }
    // console.log(myIcon)
    return (
        <div className="card w-96 bg-base-100 shadow-xl h-[450px] mr-0">
            <figure className="px-10 pt-10">
                <img className="w-1/2 rounded-full mx-auto" src={
                    user ? user?.photoURL : unknownImage
                } alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user?.displayName}</h2>
                {myIcon}
                <blockquote title={review} className='p-4 mt-3 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7'>{review.slice(0, 50)}</blockquote>



            </div>
        </div>
    );
};

export default SingleReviews;