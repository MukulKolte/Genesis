import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import HomeNav from "../Home/HomeNav";
import axios from "axios";
import './Register.css';
import { useState } from "react";

export default function Register(){
    
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
        let form = document.getElementById("registration_form");

        console.log(form.elements["name"].value);
        
        axios.post('http://localhost:8080/registration', {
            name: form.elements["name"].value,
            password: form.elements["pass"].value,
            user_role: "participant",
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
return(
    <>
    <Header/>
    <HomeNav/>
    <div id="for-full-page">
        <div>
        <h2 id='register-head'>Get started with Genesis by creating your account.</h2>
        </div>
    <div id='container-register'>   
        <form id='registration_form' onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input type="text" id="name" name="name" required /><br />

                <label>Password:</label><br />
                <input type="password" onChange={handlePasswordChange} pattern=".{8,}" id="pass" name="pass" required/><br />
                <span>{passwordError && (
                            <p style={{ color: "red" }}>{passwordError}</p>
                        )}</span>

                <label>Mobile number:</label><br />
                <input type="text" onChange={handleMobileNumberChange} minlength="10" maxlength="10" id="mobile" name="mobile" required /><br />
                <span>{mobileNumberError && (
                            <p style={{ color: "red" }}>{mobileNumberError}</p>
                        )}</span>

                <label>Email:</label><br />
                <input type="email" onClick={handleEmailChange} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" id="email" name="email" required/><br />
                <span>{emailError && (
                            <p style={{ color: "red" }}>{emailError}</p>
                        )}</span>

                <label>Date of Birth:</label><br />
                <input type="date" id="dob" name="dob" required/><br />

                <label>Address:</label><br />
                <textarea id="addr" name="addr" rows="4" cols="50" required/><br />

                <label>City:</label><br />
                <select name="city" id="city" required>
                    <option value="Nashik">Nashik</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                </select><br />
                
                <label>State:</label><br />
                <select name="state" id="state" required>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Punjab">Punjab</option>
                </select><br /><br />

                <input type="submit" value="Submit" />
        </form>
    </div>
    </div>
    <div >
    <Footer />  
    </div>
   
    </>

)
}