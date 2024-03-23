import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

function EventReport() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/test')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>image</th>
            <th>title</th>
            <th>min_guests</th>
            <th>max_guests</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student, index) => {
            return <tr key={index}>
              <td>{student.id}</td>
              <td><img src='D:\Event manager\event1' alt='This is image' /></td>
              <td>{student.title}</td>
              <td>{student.min_guests}</td>
              <td>{student.max_guests}</td>
              <td>{student.Date}</td>
              <td>{student.Action}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EventReport
