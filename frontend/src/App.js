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
import User_Registration from './Components/Login/User_Registration.js';
import FileUpload from './Components/Organizer/FileUpload.js';



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/login" element={<Login />} />
          {true && <Route path="/admin" element={<Admin />} />}
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/eventreport" element={<EventReport />} />
          <Route path="/register" element={<User_Registration />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
