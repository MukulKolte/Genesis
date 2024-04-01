import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Home/Header";
import OrganizerNav from "./OrganizerNav";
import Footer from "../Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CompetitionStatus(){
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div >
        <Header/>
        <OrganizerNav/>
        <div className="container" id="to-leave-some-margin">
        <table class="table table-dark">
        <thead class="thead-dark">
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Theme</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Approval status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student, index) => {
            return <tr key={index}>
              {/* <td>{student.id}</td> */}
              <td><img src={`http://localhost:8080/images/` + data[index].image} alt='This is image' width={200} height={200} /></td>
              <td>{student.comp_title}</td>
              <td>{student.comp_theme}</td>
              <td>{student.status}</td>
              <td>{student.date_0f_competition}</td>
              <td>{student.description}</td>
              <td style={{ color: student.teacher_approval === 'approved' ? 'green' : student.teacher_approval=== 'pending'? 'yellow' : 'red' }}>{student.teacher_approval}</td>

            </tr>
          })}
        </tbody>
      </table>
      </div>
      <Footer/>
      </div>
    )
}