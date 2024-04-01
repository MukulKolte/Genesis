import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function AvailableCompetitions() {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.post('http://localhost:8080/available_competitions', {
      user_id: localStorage.getItem('user_id')
    })
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));

  }, [])

  const handleClick = (id, title, theme, date, description, image) => {


    axios.post('http://localhost:8080/user_enrollments', {
      user_id: localStorage.getItem('user_id'),
      comp_id: id,
      comp_title: title,
      comp_theme: theme,
      date_0f_competition: date,
      description: description,
      image: image

     }).then(res => {
        console.log("Done");
        navigate('/participants');  
        window.location.reload(false);
      })
      .catch(err => console.log("This is error"));
  }

  return (
    <div id='for-full-page'>
      <div className='container'>
        {data.length ? 
        (
        data.map((comp, index) => {
          return(
        <Card sx={{ maxWidth: 345 }} key={index} class="container" id="card">
        <CardActionArea
        >
        
            <CardMedia
                component="img"
                height="full"
                image={`http://localhost:8080/images/` + data[index].image}
                alt="Competition Image"
                onClick={handleClick }
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
                    {/* <button id='enroll' onClick={e => handleClick(comp.id, comp.comp_title, comp.comp_theme, comp.date_0f_competition, comp.description, (data[index].image))}>Enroll</button> */}
                    <button  id='enroll' onClick={e => handleClick(comp.id, comp.comp_title, comp.comp_theme, comp.date_0f_competition, comp.description, (data[index].image))} type="button" class="btn btn-success" >Enroll</button>
                </Typography>
            </CardContent>
        </CardActionArea >
    </Card>
          ) })
        
        )
        : (<h1>You are all caught up.</h1>)}
      </div>
    </div>
  )
}

export default AvailableCompetitions
