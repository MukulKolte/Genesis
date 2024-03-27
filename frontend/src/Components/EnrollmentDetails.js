import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EnrollmentDetails() {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/enrollment_details', {
            user_id: localStorage.getItem('user_id')
        })
        .then(res => (setData(res.data)))
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            {data.length ? 
       (<table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Competition Title</th>
            <th>Date of Competition</th>
            <th>Participant Names</th>
          </tr>
        </thead>

        <tbody>
          {data.map((comp, index) => {
            return <tr key={index}>
              <td>{comp.comp_id}</td>
              <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
              <td>{comp.comp_title}</td>
              <td>{comp.date_0f_competition}</td>
              <td>{comp.user_names}</td>
            </tr>
          })}
        </tbody>
      </table>)
      : (<h1>There are no enrollments.</h1>)}
        </div>
    )
}

export default EnrollmentDetails
