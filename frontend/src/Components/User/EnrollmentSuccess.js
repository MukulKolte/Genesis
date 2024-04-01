import Footer from "../Home/Footer";
import Header from "../Home/Header";
import ParticipantNav from "./ParticipantsNav";

export default function EnrollmentSuccess(){

    return(
        <>
        <div id="for-full-page">
        <Header/>
        <ParticipantNav/>
        <div style={{  justifyContent: "center", alignItems: "center" }}>
            <h2>Enrolled Successfully</h2>
            <h4><a href="/participants">Back to Explore</a></h4>
        </div>
        <Footer/>
        </div>
        </>
    )
}