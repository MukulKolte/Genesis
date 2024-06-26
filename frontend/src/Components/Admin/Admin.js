import React, { useEffect, useState } from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import AdminNav from './AdminNav';
import axios from 'axios';

export default function Admin() {

  const [userCount, setUserCount] = useState();
  const [activeCompetitionsCount, setActiveCompetitionsCount] = useState();

  useEffect(() => {

    axios.get('http://localhost:8080/total_users')
    .then(
      res => setUserCount(res.data[0].data)
    )
    .catch(
      err => console.log(err)
    )

    axios.get('http://localhost:8080/total_active_competitions')
    .then(
      res => setActiveCompetitionsCount(res.data[0].data)
    )
    .catch(
      err => console.log(err)
    )

  }, []);

  return (
    <div >
      <Header/>
      <AdminNav/>
      <div id='admin-home' >
      <div className='container'  >
          <h1>Hello Admin ! Welcome to the Admin Dashboard.</h1>
          <br/>
          <h3>Dashboard Overview</h3>
          <ul>
            <li>Total Users: {userCount}</li>
            <li>Active Competitions: {activeCompetitionsCount}</li>
          </ul>
          <h3>Quick Actions</h3>
          <ul>
            <li><a href='/user_register'>Create New User</a></li>
            <li><a href='/event_report'>View Event Report</a></li>
            <li><a href='/user_report'>View User Report</a></li>
            <li><a href='/enrollments'>View Enrollment Report</a></li>
            <li><a href='/fileupload'>Organize Competition</a></li>
          </ul>
      </div>
      </div>
      <Footer/>
    </div>
  )
}


