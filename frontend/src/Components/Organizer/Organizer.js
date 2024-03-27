import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios';

function Organizer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])


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

      <h1>This is Organizer page.</h1>
      <br /><br />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Theme</th>
            <th>Status</th>
            <th>Date</th>
            <th>Description</th>
            <th>Approval status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student, index) => {
            return <tr key={index}>
              <td>{student.id}</td>
              <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
              <td>{student.comp_title}</td>
              <td>{student.comp_theme}</td>
              <td>{student.status}</td>
              <td>{student.date_0f_competition}</td>
              <td>{student.description}</td>
              <td>{student.teacher_approval}</td>
            </tr>
          })}
        </tbody>
      </table>
      

      <Footer/>
    </div>
  )
}

export default Organizer
