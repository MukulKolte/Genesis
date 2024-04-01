import React, { useEffect, useState } from 'react'
import Header from '../Home/Header'
import axios from 'axios';
import AdminNav from './AdminNav';
import Footer from '../Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserReport() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/user_report')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    }, [])


    const handleClick = () => {

    }

    return (
        <div>
            <Header />
            <AdminNav/>
            <div id='for-full-page'>
            <div className='container' id='to-leave-some-margin'>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Address</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>

                <tbody>
                    {data.map((user, index) => {
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.user_role}</td>
                            <td>{user.mobile_number}</td>
                            <td>{user.email}</td>
                            <td>{user.date_of_birth}</td>
                            <td>{user.address}</td>
                            {/* <td><button onClick={e => handleClick('approved', user.id)}>Edit</button><button onClick={e => handleClick('rejected', user.id)}>Delete</button></td> */}
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
            </div>
            <Footer/>


        </div>
    )
}


