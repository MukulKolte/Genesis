import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import AdminNav from './AdminNav';
import OrganizerNav from '../Organizer/OrganizerNav';
import TeacherNav from '../Teacher/TeacherNav';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EnrollmentReport() {

    const loginRole = localStorage.getItem('user_role');


    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/enrollment_details', {
            user_id: localStorage.getItem('user_id')
        })
        .then(res => (setData(res.data)))
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
          <Header/>
          
         
                {loginRole=== 'admin' ? <AdminNav/> : loginRole=== 'organizer' ? <OrganizerNav/> : <TeacherNav/>}
          <div>
            <div className='container' id='to-leave-some-margin'>
                  {data.length ? 
            (<table class="table table-dark">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Competition Title</th>
                  <th scope="col">Date of Competition</th>
                  <th scope="col">Participant Names</th>
                </tr>
              </thead>

              <tbody>
                {data.map((comp, index) => {
                  return <tr key={index}>
                    <td>{comp.comp_id}</td>
                    <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
                    <td>{comp.comp_title}</td>
                    <td>{comp.date_0f_competition}</td>
                    <td>{comp.user_names}</td>
                  </tr>
                })}
              </tbody>
            </table>)
            : (<h1>There are no enrollments.</h1>)}
          </div>
          </div>
      <Footer/>
        </div>
    )
}


