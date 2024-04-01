import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNav from './HomeNav';
import './Home.css';


export default function Home() {
    const navigate = useNavigate();

    const login=()=>{
        navigate("/login")
    }

    

  return (
    <div>
      <Header/>
      <HomeNav/>
          <section id="showcase">
              <div class="container">
                  <h1> <strong id="headline">Unleash Your Inner Champion</strong>
                  <p> Join us in fostering a culture of innovation and excellence as we celebrate the diverse talents of our student community</p>
                  </h1>
                  <p color=' #fff'> contact : genesis@gmail.com</p>
                  <button type="button" class="btn btn-primary"  onClick={login}>Get Started</button>
              </div>
          </section>

    <div class="container">
        <section id="main">
            <h1>Welcome Students ...</h1>
            <p>"Welcome to our college competition enrollment platform, where students can showcase their talents and passions across various disciplines. From academic challenges to creative showcases, our website provides a seamless experience for students to participate, compete, and excel. Join us in fostering a culture of innovation and excellence as we celebrate the diverse talents of our student community. Whether you're passionate about science, technology, arts, or business, there's a competition waiting for you to explore and unleash your potential. Get ready to challenge yourself, connect with peers, and seize incredible opportunities for growth and recognition. Come be a part of our vibrant community and let your talents shine!"</p>
        </section>

        <aside id="sidebar">
        <h2>Explore and Win: Exciting Competitions Await You!</h2>
<p>Are you ready to embark on thrilling adventures and showcase your skills to the world? Join our array of college competitions, where endless possibilities and exciting prizes await!</p>
<p>Whether you're into coding, design, debate, or entrepreneurship, there's something for everyone. Compete against the best and unlock your potential!</p>
        </aside>     
    </div>
    
        <Footer/>
    </div>
  )
}


