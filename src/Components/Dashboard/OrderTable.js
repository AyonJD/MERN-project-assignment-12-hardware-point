import React from 'react';

const OrderTable = ({ index, order, handleDelete }) => {
    const { name, address, price, quantity, number, image, _id, details } = order;
    // console.log(order)
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div title={details} className="text-sm opacity-50">{details.slice(0, 30)}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className="badge badge-ghost badge-sm">Quantity: {quantity}</p>
                <br />
                <p className="badge badge-ghost badge-sm">Price: ${price}</p>
            </td>
            <td>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">Phone: {number}</div>
                <div className="text-sm opacity-50">{address}</div>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs">Remove</button>
                <button  className="btn bg-[#2CB23B] text-white btn-xs ml-5">Pay Now</button>
            </th>
        </tr>

    );
};

export default OrderTable;