import './App.css';
import Login from './Components/Login/Login.js';
import Admin from './Components/Admin/Admin.js';
import Organizer from './Components/Organizer/Organizer.js';
import Participants from './Components/User/Participants.js';
import AboutUs from './Components/Home/Aboutus.js';
import Teacher from './Components/Teacher/Teacher.js';
import ErrorPage from './Static/ErrorPage.js';
import Home from './Components/Home/Home.js';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventReport from './Components/Admin/EventReport.js';
import User_Registration from './Components/Admin/UserRegistration.js';
import FileUpload from './Components/Organizer/FileUpload.js';
import UserReport from './Components/Admin/UserReport.js';
import Enrollments from './Components/User/Enrollments.js';

import Register from './Components/Login/Register.js';
import UserRegistration from './Components/Admin/UserRegistration.js';
import Contact from './Components/Home/Contact.js';
import Logout from './Components/Login/Logout.js';
import CompetitionsPreview from './Components/Home/CompetitionsPreview.js';
import FileUploadSuccess from './Components/Organizer/FileUploadSuccess.js';
import CompetitionStatus from './Components/Organizer/CompetitionsStatus.js';
import EnrollmentReport from './Components/Admin/EnrollmentReport.js';



function App() {

  // window.location.reload(false);
  console.log("Hellow");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competitions_preview" element={<CompetitionsPreview />} />
          <Route path="/fileuploadsuccess" element={<FileUploadSuccess />} />
          <Route path="/competitions_status" element={<CompetitionStatus/>} />

          {localStorage.getItem('user_id') && (localStorage.getItem('user_role') === 'admin') &&
            <Route path="/admin" element={<Admin />} />}

          {/* {localStorage.getItem('user_id') && (localStorage.getItem('user_role') === 'admin') &&} */}
            <Route path="/enrollments" element={<EnrollmentReport />} />

          {localStorage.getItem('user_id') && ((localStorage.getItem('user_role') === 'organizer') || (localStorage.getItem('user_role') === "admin")) &&
            <Route path="/organizer" element={<Organizer />} />}

          {localStorage.getItem('user_id') && ((localStorage.getItem('user_role') === 'participant') || (localStorage.getItem('user_role') === "admin")) &&
            <Route path="/participants" element={<Participants />} />}

          {localStorage.getItem('user_id') && ((localStorage.getItem('user_role') === 'teacher') || (localStorage.getItem('user_role') === "admin")) &&
            <Route path="/teacher" element={<Teacher />} />}

          {localStorage.getItem('user_id') && ((localStorage.getItem('user_role') === 'teacher') || (localStorage.getItem('user_role') === "admin") || (localStorage.getItem('user_role') === 'organizer')) &&
            <Route path="/event_report" element={<EventReport />} />}

          {localStorage.getItem('user_id') && (localStorage.getItem('user_role') === 'admin') &&
            <Route path="/user_register" element={<UserRegistration />} />}

          {localStorage.getItem('user_id') && ((localStorage.getItem('user_role') === 'organizer') || (localStorage.getItem('user_role') === "admin")) &&
            <Route path="/fileupload" element={<FileUpload />} />}

          {localStorage.getItem('user_id') && (localStorage.getItem('user_role') === 'admin') &&
            <Route path="/user_report" element={<UserReport />} />}

          <Route path='/user_enrollments' element={<Enrollments />} />
         

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
