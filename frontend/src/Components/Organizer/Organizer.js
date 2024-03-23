import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

function Organizer() {
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
      <Footer/>
    </div>
  )
}

export default Organizer
