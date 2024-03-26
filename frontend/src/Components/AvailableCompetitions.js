import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AvailableCompetitions() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/available_competitions')
      .then(res => setData(res.data))
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
    })
      .then(res => {
        console.log("Done");
      })
      .catch(err => console.log("This is error"));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Description</th>

          </tr>
        </thead>

        <tbody>
          {data.map((comp, index) => {
            return <tr key={index}>
              <td>{comp.id}</td>
              <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
              <td>  Title: {comp.comp_title}     <br />
                Theme: {comp.comp_theme}         <br />
                Status: {comp.status}            <br />
                Date: {comp.date_0f_competition} <br />
                Description: {comp.description}  <br />
              <button id='enroll' onClick={e => handleClick(comp.id, comp.comp_title, comp.comp_theme, comp.date_0f_competition, comp.description, (data[index].image))}>Enroll</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AvailableCompetitions
