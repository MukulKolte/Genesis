import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

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
            navigate('/login');
        })
        .catch(err => console.log('This is error'));
    }

    return (
        <div>
            <h1>This is login page.</h1>

            <h2>Get yourselves logged in!!</h2>

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
        </div>
    )
}

export default Login
