import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import EventReport from '../Admin/EventReport'

function Teacher() {
  return (
    <div>
      <Header/>
      <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/teacher">Home</a></li> 
                                <li><a href="#">Competition Requests</a></li>
                            </ul>
                    </div>
                </nav> 
      <h1>This is Teacher login.</h1>

      <EventReport />
      <Footer/>
    </div>
  )
}

export default Teacher
