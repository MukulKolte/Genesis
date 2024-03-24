import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function FileUpload() {

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
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log("Uploaded successfully");
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
            console.log(res);
            // navigate('/admin');
        })
        .catch(err => console.log('This is error'));
    }

    return (
        <div>
            <Header/>
            <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/organizer">Home</a></li> 
                                <li><a href="/fileupload">Organise Competition</a></li>
                            </ul>
                    </div>
                </nav> 


            <form id='competition_form' onSubmit={handleSubmit}>

                <label>Competition Title:</label><br />
                <input type="text" id="title" name="title" /><br />

                <label>Competition theme:</label><br />
                <input type="text" id="theme" name="theme" /><br />

                <label>Competition Status:</label><br />
                <input type="text" id="status" name="status" /><br />

                <label>Date:</label><br />
                <input type="date" id="date_of_comp" name="date_of_comp" /><br />

                <label>Description:</label><br />
                <textarea id="descr_of_comp" name="descr_of_comp" rows="4" cols="50" /><br /><br />

                <input type="submit" value="Submit" />

            </form>

            <br /><br /><br />
            <input type='file' onChange={handleFile} />
            <button onClick={handleUpload}>Upload</button> <br /><br />

            {/* <img src={`http://localhost:8080/images/` + data.image} alt='This is image' /> */}
            
            <Footer/>
        </div>
    )
}

export default FileUpload
