import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import UserRow from './UserRow';


const AllUser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://stormy-bayou-62598.herokuapp.com/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div >
            <h2 className='text-2xl'>Total User : {users.length}</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;