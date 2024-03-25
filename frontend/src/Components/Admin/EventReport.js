import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';

function EventReport() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleClick = (decision, id) => {
    
    axios.post('http://localhost:8080/teacher_approval', {
      decision: decision,
      id: id
    })
    .then(res => {
      // console.log(res);
      navigate('/teacher');
      window.location.reload(false); //To refresh the page so that app.js will re-render
  })
  .catch(err => console.log('This is error'));
  }

  return (
    <div>
      {/* <Header/>
      <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/admin">Home</a></li>
                                <li><a href="/event_report">Event Report</a></li>
                                <li><a href="/register">Register User</a></li>
                                <li><a href="/user_report">User Report</a></li>
                            </ul>
                    </div>
                </nav>  */}
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
            <th>Action</th>
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
              <td>{student.teacher_approval}</td>
              <td><button onClick={e => handleClick('approved', student.id)}>approve</button><button onClick={e => handleClick('rejected', student.id)}>Reject</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EventReport
