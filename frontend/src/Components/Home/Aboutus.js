import React from 'react'
import Header from './Header'
import Footer from './Footer'

function AboutUs() {
  return (
    <div>
      <Header/>
      <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutus">About</a></li>
                                <li><a href="/competitions">Competitions</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                    </div>
       </nav> 
      <h1>
Welcome to our vibrant community dedicated to fostering athletic excellence and camaraderie among students! At our college sports competition website, we're passionate about providing a platform for students to showcase their athletic talents, push their limits, and celebrate the spirit of sportsmanship. With a diverse range of sports and competitions, we offer opportunities for athletes of all levels to participate and excel.

Our mission is to promote physical fitness, teamwork, and leadership skills through competitive sports. Whether you're a seasoned athlete or trying out a new sport for the first time, our inclusive environment encourages everyone to get involved and embrace the thrill of competition. From exhilarating matches on the field to inspiring displays of athleticism in the stands, our events bring our campus community together like never before.

Beyond the thrill of victory, our sports competitions foster lifelong friendships, unforgettable memories, and personal growth. Through dedication, perseverance, and a commitment to fair play, our athletes embody the values of integrity and excellence both on and off the field. As we continue to expand our offerings and welcome new participants, we invite you to join us on this exciting journey of athletic achievement and camaraderie. Together, let's strive for greatness and make our mark in the world of college sports!</h1>
      <Footer/>
    </div>
  )
}

export default AboutUs
