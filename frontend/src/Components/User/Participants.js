import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import AvailableCompetitions from '../AvailableCompetitions'

function Participants() {
  return (
    <div>
      <Header/>
      <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/participant">Home</a></li> 
                                <li><a href="/user_enrollments">Enrollments</a></li>
                            </ul>
                    </div>
                </nav> 
      <h1>This is Participant page.</h1>
      <AvailableCompetitions />
      <Footer/>
    </div>
  )
}

export default Participants
