// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const ManageTable = ({ o, index, refetch, sendEvent, setModal }) => {
//     const navigate = useNavigate();
//     const { _id, image, productName, userName, email, number, price, quantity, address } = o
//     // console.log(o)
//     return (
//         <tr className='text-center'>
//             <th>{index + 1}</th>
//             <td><div className="avatar">
//                 <div className="w-20 rounded">
//                     <img src={image} alt="Tailwind-CSS-Avatar-component" />
//                 </div>
//             </div></td>

// <td>{userName}</td>
// <td>{email}</td>
// <td>{productName}</td>
// <td>{price}</td>
// <td>{quantity}</td>
// <td>{address}</td>
// <td>{number}</td>
//             <td>
//                 <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Delete</label></td>
//             <td> <button onClick={() => navigate(`/dashboard/tools/${_id}`)} className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Update</button></td>
//         </tr>
//     );
// };

// export default ManageTable;




import { faBan, faCheck, faMoneyCheckAlt, faShippingFast, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ManageTable = ({ o, index, refetch, sendEvent, setModal }) => {

    //console.log(o)

    const { _id, isDeliverd, transactionId, ship, paid, image, productName, userName, email, number, price, quantity, address } = o

    const [user] = useAuthState(auth)
    const makeShip = () => {
        fetch(`https://hardware-server.up.railway.app/ship/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ isDeliverd: true })
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('On the way for Delivery')
                }
                else {
                    toast.error(`Can't Shipped`)
                }
            })

    }
    // if (isLoading) {
    //     return <p>Please wait a moment</p>
    // }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>

            <td>{userName}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td>{number}</td>
            <td>{
                transactionId ? <span className='text-amber-700 font-bold'>{transactionId}</span>
                    :
                    <span className='text-xl sp-style text-red-700'> can't receive the money yet

                    </span>

            }</td>
            {
                paid ? <>

                    <td>
                        <p className='text-xl font-bold text-green-700 sp-style'>receive'd Money
                            <FontAwesomeIcon className='pl-2' icon={faCheck}></FontAwesomeIcon>
                        </p>
                    </td>
                    <td>
                        {
                            isDeliverd ? <p className='text-xl font-bold text-blue-700 sp-style'>Delivery Done
                                <FontAwesomeIcon className='pl-2' icon={faCheck}></FontAwesomeIcon>

                            </p> : <button onClick={makeShip} className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Ship

                                <FontAwesomeIcon className='pl-2' icon={faShippingFast}></FontAwesomeIcon>
                            </button>
                        }

                    </td>
                </>
                    :
                    <>
                        <td>
                            <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Delete
                                <FontAwesomeIcon className='pl-2' icon={faTrashRestoreAlt}></FontAwesomeIcon>
                            </label></td>
                        <td>
                            <p className='text-xl font-bold text-red-700 sp-style'>Not Paid Yet
                                <FontAwesomeIcon className='pl-2' icon={faBan}></FontAwesomeIcon>
                            </p>
                        </td>

                    </>
            }

        </tr>
    );
};

export default ManageTable;