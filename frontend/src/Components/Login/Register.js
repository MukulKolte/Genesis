import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import HomeNav from "../Home/HomeNav";
import axios from "axios";
import './Register.css';

export default function Register(){
    const navigate = useNavigate();

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
                <input type="password" id="pass" name="pass" required/><br />

                <label>Mobile number:</label><br />
                <input type="number" id="mobile" name="mobile" required /><br />

                <label>Email:</label><br />
                <input type="email" id="email" name="email" required/><br />

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