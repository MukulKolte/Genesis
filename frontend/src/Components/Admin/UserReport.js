import React, { useEffect, useState } from 'react'
import Header from '../Home/Header'
import axios from 'axios';

function UserReport() {

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
            <nav id="navbar">
                <div class="container">
                    <ul>
                        <li><a href="/admin">Home</a></li>
                        <li><a href="/event_report">Event Report</a></li>
                        <li><a href="/register">Register User</a></li>
                        <li><a href="/user_report">User Report</a></li>
                    </ul>
                </div>
            </nav>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Role</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                        <th>Action</th>
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
                            <td><button onClick={e => handleClick('approved', user.id)}>Edit</button><button onClick={e => handleClick('rejected', user.id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>


        </div>
    )
}

export default UserReport
