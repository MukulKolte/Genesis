import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

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
      <Footer/>
    </div>
  )
}

export default Teacher
