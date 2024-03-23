import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FileUpload() {

    const [file, setFile] = useState();
    const [data, setData] = useState([]);

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
                if(res.data.Status === "Success"){
                    console.log("Uploaded successfully");
                }else{
                    console.log("Some error occurred while uploading image.")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>

            <input type='file' onChange={handleFile} />
            <button onClick={handleUpload}>Upload</button> <br /><br />

            <img src={`http://localhost:8080/images/` + data.image} alt='This is image' />


            <form>

                <label>Competition Title:</label><br />
                <input type="text" id="title" name="title" /><br />

                <label>Competition theme:</label><br />
                <input type="text" id="theme" name="theme" /><br />

                <label>Competition Status:</label><br />
                <input type="text" id="status" name="status" /><br />

                <label>Min guests:</label><br />
                <input type="number" id="min_guests" name="min_guests" /><br />

                <label>Max guests:</label><br />
                <input type="number" id="max_guests" name="max_guests" /><br />

                <label>Date:</label><br />
                <input type="date" id="date_of_comp" name="date_of_comp" /><br /><br />

                <label>Description:</label><br />
                <textarea id="descr_of_comp" name="descr_of_comp" rows="4" cols="50" /><br />

                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default FileUpload
