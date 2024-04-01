import { useNavigate } from "react-router-dom";

export default function ParticipantNav(){
    const navigate = useNavigate();
   
    const logout=()=>{
        localStorage.clear();
        navigate("/")
    }
    return(
        <div>
            <nav id="navbar">
                    <div class="container">
                            <ul>
                                <li><a href="/participants">Home</a></li> 
                                <li><a href="/user_enrollments">Enrollments</a></li>
                                <li><button id="button-logout"  class=" "  onClick={logout}>Logout</button></li>
                            </ul>
                    </div>
            </nav> 
        </div>
    )
}