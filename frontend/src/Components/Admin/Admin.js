import React from 'react'
import User_Registration from '../Login/User_Registration';
import EventReport from '../Admin/EventReport';
import FileUpload from '../Organizer/FileUpload';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function Admin() {


  return (
    <div>
      <Header/>
      <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/admin">Home</a></li> 
                                <li><a href="/event_report">Event Report</a></li>
                                <li><a href="/register">Register User</a></li>
                                <li><a href="/user_report">User Report</a></li>
                                <li><a href="/enrollment_details">Enrollment Details</a></li>
                            </ul>
                    </div>
                </nav> 
      <h1>This is Admin page.</h1>
      
      <EventReport />

      <Footer/>
    </div>
  )
}

export default Admin
