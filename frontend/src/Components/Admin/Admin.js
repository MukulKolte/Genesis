import React from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import AdminNav from './AdminNav';

export default function Admin() {


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
            <li>Total Users: </li>
            <li>Active Competitions:</li>
          </ul>
          <h3>Quick Actions</h3>
          <ul>
            <li><a href=''>Create New Competition</a></li>
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


