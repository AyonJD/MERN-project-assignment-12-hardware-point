import { faBan, faCheck, faMoneyCheckAlt, faStar, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ o, index, refetch, sendEvent, setModal }) => {
    const { _id, img, isDeliverd, productName, number, price, quantity, address, transactionId } = o
    console.log(o);
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>

            <td><span className="font-bold">{productName}</span></td>
            <td><span className="font-bold">{price}</span></td>
            <td><span className="font-bold">{quantity}</span></td>
            <td><span className="font-bold">{address}</span></td>
            <td><span>{number}</span></td>
            <td>{transactionId
                ? <span className="text-amber-700 font-bold">{transactionId} </span> : <span className='text-red-700 sp-style font-bold text-xl'>Pay First </span>

            }


            </td>
            <td>{isDeliverd
                ? <span className='text-blue-700 sp-style font-bold text-xl'>Your Product is on the way. </span> : <span className='text-red-700 sp-style font-bold text-xl'>Pending.. </span>

            }


            </td>
            <td>
                {
                    (price && !o.paid) &&
                    <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Cancel
                        <FontAwesomeIcon className='pl-2' icon={faTrashRestoreAlt}></FontAwesomeIcon>

                    </label>


                }
                {(price && o.paid) && <span className='text-red-700 sp-style text-center text-xl font-bold' >
                    Can't Cancel
                    <FontAwesomeIcon className='pl-2' icon={faBan}></FontAwesomeIcon>
                </span>}

            </td>
            <td>
                {
                    (price && !o.paid) && <Link to={`/dashboard/payment/${_id}`}>

                        <button className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">


                            Payment
                            <FontAwesomeIcon className='pl-2' icon={faMoneyCheckAlt}></FontAwesomeIcon>

                        </button>
                    </Link>

                }

                {(price && o.paid) && <span className='text-green-700 sp-style text-center text-xl font-bold' >
                    Already  Paid <FontAwesomeIcon className='pl-2' icon={faCheck}></FontAwesomeIcon>
                </span>}
            </td>

        </tr>
    );
};

export default OrderCard;