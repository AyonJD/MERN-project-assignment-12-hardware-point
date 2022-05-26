import React from 'react';

const ToolsCard = ({ tool, handlePurchase }) => {
    const { image, name, availableQuantity, price, details, minOrderQuantity, _id } = tool;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm text-gray-500'>{details}</p>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <p className='font-medium'>Stock: {availableQuantity}</p>
                <div className="card-actions justify-end mb-5">
                    <button onClick={() => handlePurchase(_id)} className="text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms w-full font-medium hover:font-medium px-5 py-2 rounded-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;