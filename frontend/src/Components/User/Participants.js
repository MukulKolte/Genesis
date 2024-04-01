import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import AvailableCompetitions from './AvailableCompetitions'
import ParticipantNav from './ParticipantsNav'

export default function Participants() {
  const username = localStorage.getItem('user_name');
  console.log(username);
  return (
    <div>
      <Header/>
      <ParticipantNav/>
      <div className='container'>
        <h1>Welcome, {username}</h1>
          <p>Step into the arena of opportunity! Explore a world of competitions where you can showcase your talents and skills. From academic challenges to creative showcases, our platform offers a diverse range of competitions for you to participate in. Join the excitement, challenge yourself, and let your potential shine!</p>
          
        </div>
      <AvailableCompetitions />
      <Footer/>
    </div>
  )
}


