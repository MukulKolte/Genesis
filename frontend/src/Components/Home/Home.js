import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const navigate = useNavigate();

    const login=()=>{
        navigate("/login")
    }


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

          <section id="showcase">
              <div class="container">
                  <h1>Unleash Your Inner Champion
                  <p> Join us in fostering a culture of innovation and excellence as we celebrate the diverse talents of our student community</p>
                  </h1>
                  <p> contact : genesis@gmail.com</p>
                  <Button variant="contained" onClick={login}>Login</Button>
              </div>
          </section>

    <div class="container">
        <section id="main">
            <h1>Welcome</h1>
            <p>Welcome to our college competition enrollment platform, where students can showcase their talents and passions across various disciplines. From academic challenges to creative showcases, our website provides a seamless experience for students to participate, compete, and excel. Join us in fostering a culture of innovation and excellence as we celebrate the diverse talents of our student community.</p>
        </section>

        <aside id="sidebar">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque soluta nemo dolores 
                aspernatur nobis nulla rem eum soluta optio sint.</p>
        </aside>     
    </div>
    <Footer/>
    </div>
  )
}


