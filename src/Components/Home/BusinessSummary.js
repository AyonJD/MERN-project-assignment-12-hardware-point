import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const BusinessSummary = ({ icon, end, title, image }) => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: end,
        duration: 7,

    });
    return (
        <div className="card w-96 bg-base-200 image-full mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title md:text-7xl mx-auto text-white">{icon}</h2>
                <div className='text-center text-5xl font-bold text-white' ref={countUpRef}></div>
                <p className='text-center text-2xl font-medium text-white'>{title}</p>
            </div>
        </div>


    );
};

export default BusinessSummary;