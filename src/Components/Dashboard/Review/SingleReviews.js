import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import unknownImage from '../../../Assets/Images/unknown.jpg'

const SingleReviews = ({ singleReview }) => {
    // console.log(singleReview)
    const { user, customRating, review } = singleReview;

    // let myIcon;
    // if (customRating === 1) {
    //     myIcon = <> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //     </>
    // }
    // else if (customRating === 2) {
    //     myIcon = <> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //     </>
    // }
    // else if (customRating === 3) {
    //     myIcon = <> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //     </>
    // }
    // else if (customRating === 4) {
    //     myIcon = <>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>

    //     </>

    // }
    // else if (customRating === 5) {
    //     myIcon = <>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    //         <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>

    //     </>
    // }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className="w-1/2 rounded-full mx-auto" src={
                    user ? user?.photoURL : unknownImage
                } alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user?.displayName}</h2>
                {/* {myIcon} */}
                <p>{review}</p>



            </div>
        </div>
    );
};

export default SingleReviews;