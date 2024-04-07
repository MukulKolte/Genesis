import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './Login.css';
import HomeNav from '../Home/HomeNav';


export default function Login() {

    const navigate = useNavigate();

    const [state, setState] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let form_login = document.getElementById('login_form');

        axios.post('http://localhost:8080/login', {
            email: form_login.elements['email'].value,
            password: form_login.elements['pass'].value,
        })
            .then(res => {
                if (res.data.length === 0) {
                    setState(true);
                }
                else {
                    localStorage.setItem('user_id', res.data[0].id);
                    localStorage.setItem('user_role', res.data[0].user_role);
                    localStorage.setItem('user_name', res.data[0].name);
                    const pageMapping = {
                        admin: "/admin",
                        participant: "/participants",
                        teacher: "/teacher",
                        organizer: "/organizer"
                    }
                    // alert('Login success!!');
                    // window.location.reload(false);
                    // setTimeout(3000);
                    navigate(pageMapping[localStorage.getItem('user_role')]);
                    window.location.reload(false);
                }
            })
            .catch(err => console.log('This is error'));
    }

    return (
        <div>
            <Header />
            <HomeNav />
            <div id='for-full-page'>
                <div id="login-head">
                    <h2>Get yourselves logged in!!</h2>
                    <b><a href='/register' className='reg-link' style={{ color: 'black', textDecoration: 'none' }}> New here ? <span style={{ color: 'red' }}>REGISTER</span> now</a></b>
                </div>
                <div id="container-login">



                    <form id='login_form' onSubmit={handleSubmit}>

                        <label for="email">Email:</label><br />
                        <input type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" id="email" name="email" required /><br />

                        <label for="pass">Password:</label><br />
                        <input type="password" pattern=".{8,}" id="pass" name="pass" required /><br />
                        
                        <span style={{color: "red"}}>{state ? "Invalid Credentials" : ""}</span>
                        <br />

                        <input style={{backgroundColor:"green", borderRadius: "5px", color: "white"}} type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

