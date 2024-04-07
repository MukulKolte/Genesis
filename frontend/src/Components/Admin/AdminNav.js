import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



export default function AdminNav(){
    const navigate = useNavigate();
   
    const logout=()=>{
        localStorage.clear();
        navigate("/")
    }
    
    return(
        <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/admin">Home</a></li> 
                                <li><a href="/user_register">Register </a></li>
                                <li><a href="/user_report">User Report</a></li>
                                <li><a href="/event_report">Event Report</a></li>       
                                <li><a href="/enrollments">Enrollments</a></li>
                                <li><button id="button-logout-admin" onClick={logout}>Logout</button></li>
                            </ul>
                    </div>
                </nav> 

    )
}