import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Home/Header';
import Footer from './Home/Footer';

function Competitions() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.post('http://localhost:8080/personal_enrollments', {
            user_id: localStorage.getItem('user_id')
        })
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, []);

    const handleClick = () => {
        navigate("/login");
    }

    return (
        <div>

            <Header />
            <nav id="navbar">
                <div class="container">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About</a></li>
                        <li><a href="/competitions">Competitions</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((comp, index) => {
                        return <tr key={index}>
                            <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
                            <td>  Title: {comp.comp_title}         <br />
                                Theme: {comp.comp_theme}         <br />
                                Status: {comp.status}            <br />
                                Date: {comp.date_0f_competition} <br />
                                Description: {comp.description}  <br />
                                <button onClick={handleClick}>Login to Enroll</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

            <Footer/>
        </div>
    )
}

export default Competitions
