import './App.css';
import Login from './Components/Login.js';
import Admin from './Components/Admin.js';
import Organizer from './Components/Organizer.js';
import Participants from './Components/Participants.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './Components/Aboutus.js';
import Teacher from './Components/Teacher.js';
import ErrorPage from './Static/ErrorPage.js';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          {true && <Route path="/admin" element={<Admin />} />}
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;