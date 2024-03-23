import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './Login.css';
import { Box } from '@mui/material';

function Login() {

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let form_login = document.getElementById('login_form');

        axios.post('http://localhost:8080/login', {
            email: form_login.elements['email'].value,
            password: form_login.elements['pass'].value,
            role: form_login.elements['role'].value
        })
        .then(res => {
            console.log(res);
            navigate('/participants');
        })
        .catch(err => console.log('This is error'));
    }

    return (
        <div>
            <Header/>
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

            <div id="login-head">
            <h2>Get yourselves logged in!!</h2>
            </div>
            <div id="container-login">
            <Box
                  height={200}
                  width={200}
                  my={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={4}
                  p={2}
                  sx={{ border: '2px solid grey' }}
                >
                
                
            <form id='login_form' onSubmit={handleSubmit}>

                <label for="email">Email:</label><br />
                <input type="text" id="email" name="email" /><br />

                <label for="pass">Password:</label><br />
                <input type="password" id="pass" name="pass" /><br />

                <label for="role">Role:</label><br />
                <select name="role" id="role">
                    <option value="admin">Admin</option>
                    <option value="organizer">Organizer</option>
                    <option value="participant">Participant</option>
                    <option value="teacher">Teacher</option>
                </select><br /><br />

                <input type="submit" value="Submit" />
            </form>
            </Box>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login
