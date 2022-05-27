import React from 'react';
import loader from '../../Assets/Images/loading-white.gif'

const Loader = () => {
    return (
        <div className='loader-h-w flex items-center justify-center'>
            <img className='w-32' src={loader} alt="" />
        </div>
    );
};

export default Loader;