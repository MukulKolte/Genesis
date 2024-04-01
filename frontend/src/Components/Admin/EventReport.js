import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import Footer from '../Home/Footer';
import TeacherNav from '../Teacher/TeacherNav';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EventReport() {
  const loginRole = localStorage.getItem('user_role');
  console.log(localStorage.getItem('user_role'));
  console.log(loginRole);
 



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
      // navigate('/event_report');
      window.location.reload(false); //To refresh the page so that app.js will re-render
  })
  .catch(err => console.log('This is error'));
  }

  

  return (
    <div>
      <Header/>
      { loginRole === 'admin' ? <AdminNav/> : <TeacherNav/>}
      <div className='container' id='to-leave-some-margin'>
      <table class="table table-dark">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Theme</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Approval status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student, index) => {
            return <tr key={index} >
              {/* <td>{student.id}</td> */}
              <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
              <td>{student.comp_title}</td>
              <td>{student.comp_theme}</td>
              <td>{student.status}</td>
              <td>{student.date_0f_competition}</td>
              <td>{student.description}</td>
              <td style={{ color: student.teacher_approval === 'approved' ? 'green' : student.teacher_approval=== 'pending'? 'yellow' : 'red' }}>{student.teacher_approval}</td>
              <td><button onClick={e => handleClick('approved', student.id)} style={{backgroundColor:'green', color:'white'}}>approve</button>
                  <button onClick={e => handleClick('rejected', student.id)} style={{backgroundColor: 'red',color:'white' }}>Reject</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>
  )
}

