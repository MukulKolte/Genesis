import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import AdminNav from './AdminNav';


export default function UserRegistration() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [mobileNumberError, setMobileNumberError] = useState("");

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMobileNumber = (mobile_number) => /^(7|8|9)\d{9}/.test(mobile_number);

    const handleEmailChange = (event) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail);
        setEmailError(isValidEmail(enteredEmail) ? "" : "Invalid email format");
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;

        setPassword(newPassword);
        setPasswordError(
            newPassword.length >= 8
                ? ""
                : "Password must be at least 8 characters long"
        );
    };

    const handleMobileNumberChange = (event) => {
        const newMobileNumber = event.target.value;

        setMobileNumber(newMobileNumber);
        setMobileNumberError(isValidMobileNumber(newMobileNumber) ? "" : "Invalid mobile number.");
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let form = document.getElementById("user_registration_form");

        console.log(form.elements["name"].value);
        
        axios.post('http://localhost:8080/user_registration', {
            name: form.elements["name"].value,
            password: form.elements["pass"].value,
            user_role: form.elements["role"].value,
            mobile_number: form.elements["mobile"].value,
            email: form.elements["email"].value,
            date_of_birth: form.elements["dob"].value,
            address: form.elements["addr"].value,
            city: form.elements["city"].value,
            state: form.elements["state"].value
        })
        .then(res => {
            console.log(res);
            navigate('/login');
        })
        .catch(err => console.log('This is error'));
    }

    return (
        <div>
            <Header/>
            <AdminNav/>
            <div id='for-full-page'>
                <div id='container-register'>
                <form id='user_registration_form' onSubmit={handleSubmit}>
                    <label>Name:</label><br />
                    <input type="text" id="name" name="name" /><br />

                    <label>Password:</label><br />
                    <input type="password" onChange={handlePasswordChange} pattern=".{8,}" id="pass" name="pass" /><br />
                    <span>{passwordError && (
                            <p style={{ color: "red" }}>{passwordError}</p>
                        )}</span>

                    <label>User Role:</label><br />
                    <select name="role" id="role">
                        <option value="admin">Admin</option>
                        <option value="organizer">Organizer</option>
                        <option value="participant">Participant</option>
                        <option value="teacher">Teacher</option>
                    </select><br />

                    <label>Mobile number:</label><br />
                    <input type="text" onChange={handleMobileNumberChange} minlength="10" maxlength="10" id="mobile" name="mobile" /><br />
                    <span>{mobileNumberError && (
                            <p style={{ color: "red" }}>{mobileNumberError}</p>
                        )}</span>

                    <label>Email:</label><br />
                    <input type="email" onClick={handleEmailChange} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" id="email" name="email" /><br />
                    <span>{emailError && (
                            <p style={{ color: "red" }}>{emailError}</p>
                        )}</span>

                    <label>Date of Birth:</label><br />
                    <input type="date" id="dob" name="dob" /><br />

                    <label>Address:</label><br />
                    <textarea id="addr" name="addr" rows="4" cols="50" /><br />

                    <label>City:</label><br />
                    <select name="city" id="city">
                        <option value="Nashik">Nashik</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                    </select><br />
                    
                    <label>State:</label><br />
                    <select name="state" id="state">
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Punjab">Punjab</option>
                    </select><br /><br />

                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
           
            <Footer/>
        </div>
    )
}


