import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import ParticipantNav from './ParticipantsNav';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function Enrollments() {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.post('http://localhost:8080/personal_enrollments', {
            user_id: localStorage.getItem('user_id')
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <Header />
            <ParticipantNav/>
          {data.map((comp, index) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={index} class="container" id="card">
              <CardActionArea >
                  <CardMedia
                      component="img"
                      height="full"
                      image={`http://localhost:8080/images/` + data[index].image} 
                      alt="Competition Image"
                     
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {comp.comp_title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Title: {comp.comp_title}<br />
                          Theme: {comp.comp_theme}<br />
                          Status: {comp.status}<br />
                          Date: {comp.date_0f_competition}<br />
                          Description: {comp.description}<br />
                        
                      </Typography>
                  </CardContent>
              </CardActionArea >
          </Card>     
            )})}
          <Footer />
        </div>
    )
}


