import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Home/Header';

function EventReport() {

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
                                <li><a href="/admin">Home</a></li>
                                <li><a href="/eventreport">Event Report</a></li>
                                <li><a href="/register">Register User</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                    </div>
                </nav> 
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
          </tr>
        </thead>

        <tbody>
          {data.map((student, index) => {
            return <tr key={index}>
              <td>{student.id}</td>
              <td><img src={`http://localhost:8080/images/` + data[student.id - 1].image} alt='This is image' width={200} height={200} /></td>
              <td>{student.comp_title}</td>
              <td>{student.comp_theme}</td>
              <td>{student.status}</td>
              <td>{student.date_0f_competition}</td>
              <td>{student.description}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EventReport
