import { useNavigate } from "react-router-dom";

export default function TeacherNav(){
    const navigate = useNavigate();
   
    const logout=()=>{
        localStorage.clear();
        navigate("/")
    }
    return(
        <nav id="navbar">
        <div class="container">
                <ul>
                    <li><a href="/teacher">Home</a></li> 
                    <li><a href="/event_report">Competition Requests</a></li>
                    <li><a href="/enrollments">Enrollments</a></li>
                    <li><button id="button-logout-teacher"   onClick={logout}>Logout</button></li>
                </ul>
        </div>
        </nav> 

    )
}