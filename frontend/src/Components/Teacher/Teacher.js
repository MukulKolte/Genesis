import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import EventReport from '../Admin/EventReport'
import TeacherNav from './TeacherNav'

export default function Teacher() {
  return (
    <div>
      <Header/>
      <TeacherNav/>
      <div id='teacher-home'>
      <div className='container'>
        <h1>Welcome, Teacher!</h1>
        <p>Take control of the competition arena! As a teacher, you play a crucial role in approving competitions and managing student enrollments. Dive into your dashboard to review pending competitions, approve entries, and track student participation. Let's create a vibrant community of learners and competitors together!</p>
        <a href="/event_report" className="button">View Competitions</a>
      </div>
      </div>
      <Footer/>
    </div>
  )
}


