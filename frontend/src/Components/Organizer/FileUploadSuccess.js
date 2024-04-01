import Footer from "../Home/Footer";
import Header from "../Home/Header";
import OrganizerNav from "./OrganizerNav";

export default function FileUploadSuccess(){
    return(<>
        <Header/>
        <OrganizerNav/>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <h2>Competition Organized Successfully</h2>
        </div>
          <Footer/>
          </>
    )

}