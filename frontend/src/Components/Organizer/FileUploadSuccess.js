import AdminNav from "../Admin/AdminNav";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import TeacherNav from "../Teacher/TeacherNav";
import OrganizerNav from "./OrganizerNav";

export default function FileUploadSuccess(){

    const loginRole = localStorage.getItem('user_role');
    return(<>
        <Header/>
        {loginRole=== 'admin' ? <AdminNav/> : loginRole=== 'organizer' ? <OrganizerNav/> : <TeacherNav/>}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <h2>Competition Organized Successfully</h2>
        </div>
          <Footer/>
          </>
    )

}