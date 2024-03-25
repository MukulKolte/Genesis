import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function Enrollments() {

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
            <nav id="navbar">
                <div class="container">
                    <ul>
                        <li><a href="/participants">Home</a></li>
                        <li><a href="/user_enrollments">Enrollments</a></li>
                    </ul>
                </div>
            </nav>

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
              <td>{comp.comp_id}</td>
              <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
              <td>  Title: {comp.comp_title}         <br />
                    Theme: {comp.comp_theme}         <br />
                    Date: {comp.date_0f_competition} <br />
                    Description: {comp.description}  <br />
              </td>
            </tr>
          })}
        </tbody>
      </table>            

            <Footer />
        </div>
    )
}

export default Enrollments
