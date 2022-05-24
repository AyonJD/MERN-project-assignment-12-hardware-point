import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('SuccessFully make a admin')
                }
                else {
                    toast.error(`Sorry!!! You can't make anyone admin.Only admin can make other's admin`)
                }
            })

    }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role ? <span className='text-green-700 sp-style'>Already an Admin</span> : <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>

        </tr>

    );
};

export default UserRow;