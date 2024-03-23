import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

function Participants() {
  return (
    <div>
      <Header/>
      <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/participant">Home</a></li> 
                                
                            </ul>
                    </div>
                </nav> 
      <h1>This is Participant page.</h1>
      <Footer/>
    </div>
  )
}

export default Participants
