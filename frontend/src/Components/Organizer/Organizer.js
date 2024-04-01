import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import OrganizerNav from './OrganizerNav';

export default function Organizer() {
  return (
    <div className='for-footer' >
      <Header/>
      <OrganizerNav/>
      <div id='organizer-home'>
        <div class='container' >
        <h1>Welcome, Organizer!</h1>
        <p>Dive into your dashboard where you can effortlessly manage all your competitions. From creating new events to monitoring registrations and communicating with participants, our intuitive platform empowers you to orchestrate unforgettable experiences. Stay organized, stay informed, and let's elevate your events to new heights together!</p>
        <a href="/fileupload" class="button">Organise Competition</a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


