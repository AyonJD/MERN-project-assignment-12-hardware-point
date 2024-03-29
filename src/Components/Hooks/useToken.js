// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// const useJwtToken = user => {
//    // console.log(user,'555');
//     const [token, setToken] = useState('')
//     useEffect(() => {

//         const getToken = async () => {

//             const email = user?.user?.email
//            // console.log({ email });
//             if (email) {
//               //  const { data } = await axios.post('https://powerful-dawn-49608.herokuapp.com/signin', { email })
//                 const { data } = await axios.post('https://hardware-server.up.railway.app/signin', { email })
//                // console.log(data.getToken);
//                 setToken(data.getToken);
//                 localStorage.setItem('token', data.getToken);

//             }

//         }
//         getToken()
//     }, [user])
//     return [token]
// };

// export default useJwtToken;

// import axios from 'axios';
import React, { useEffect, useState } from 'react';
const useToken = (user, userName) => {
    // console.log(user,'555');
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = user?.email;
            const displayName = await userName || user?.displayName;
            // console.log(userName);
            const currentUser = { email: email, displayName: displayName, photoURL: user?.photoURL }
            if (email) {
                fetch(`https://hardware-server.up.railway.app/user/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        setToken(data.getToken);
                        localStorage.setItem('token', data.getToken);
                    })
                // console.log(data.getToken);
                // setToken(data.getToken);
                // localStorage.setItem('token', data.getToken);

            }

        }
        getToken()
    }, [user])
    return [token]
};

export default useToken;