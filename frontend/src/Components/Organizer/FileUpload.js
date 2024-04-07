import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import OrganizerNav from './OrganizerNav';
import './FileUpload.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from '../Admin/AdminNav';
import TeacherNav from '../Teacher/TeacherNav';

function FileUpload() {

    const loginRole = localStorage.getItem('user_role');

    const [success, setSuccess] = useState();
    const [file, setFile] = useState();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => {
                setData(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [])

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:8080/upload', formdata)
            .then(res => { console.log(res.data);
                if (res.data.Status === "Success.") {
                    // console.log("Uploaded successfully");
                    navigate('/fileuploadsuccess');
                } else {
                    console.log("Some error occurred while uploading image.")
                }
            })
            .catch(err => console.log(err));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let form_comp = document.getElementById("competition_form");
        
        axios.post('http://localhost:8080/competition_registration', {
            comp_title: form_comp.elements["title"].value,
            comp_theme: form_comp.elements["theme"].value,
            status: form_comp.elements["status"].value,
            date_of_competition: form_comp.elements["date_of_comp"].value,
            description: form_comp.elements["descr_of_comp"].value,
        })
        .then(res => {
            // console.log(res);
            setSuccess(true);
             
        })
        .catch(err => console.log('This is error'));
    }

    return (
        <div>
            <Header/>

            {loginRole=== 'admin' ? <AdminNav/> : loginRole=== 'organizer' ? <OrganizerNav/> : <TeacherNav/>}

            <div class="container">
            <div id='fileupload-head'>
                <h3> Welcome to our Competition Organization Form! Here, you can easily input all the necessary details to create and manage your competitions.</h3>
            </div>
            <h2>Step 1: Fill the details and click Submit</h2>

            <div id='container-competition-form'>
            <form id='competition_form' onSubmit={handleSubmit}>

                <label>Competition Title:</label><br />
                <input type="text" id="title" name="title" required/><br />

                <label>Competition theme:</label><br />
                <input type="text" id="theme" name="theme" required/><br />

                <label>Competition Status:</label><br />
                <input type="text" id="status" name="status" required/><br />

                <label>Date:</label><br />
                <input type="date" id="date_of_comp" name="date_of_comp" required/><br />

                <label>Description:</label><br />
                <textarea id="descr_of_comp" name="descr_of_comp" rows="4" cols="50" required /><br /><br />

                <span style={{color: "green"}}>{success ? "Organized successfully." : ""}</span>

                <input type="submit" value="Submit" />

            </form>
            </div>

            <h2>Step 2: Select the file and click upload</h2>
            
            <div id='container-competition-upload'>
                <div id='container-competition-upload-elements'>
                <input type='file' onChange={handleFile} required/>
                <button onClick={handleUpload} type="button" class="btn btn-primary">Upload</button> 
                </div>
            </div>

            {/* <img src={`http://localhost:8080/images/` + data.image} alt='This is image' /> */}
            </div>
            <Footer/>
        </div>
    )
}

export default FileUpload
