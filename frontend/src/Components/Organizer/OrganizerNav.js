import { useNavigate } from "react-router-dom";

export default function OrganizerNav(){
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
                                <li><a href="/organizer">Home</a></li> 
                                <li><a href="/competitions_status"> Competitions status</a></li>
                                <li><a href="/fileupload">Organise Competition</a></li>
                                <li><a href="/enrollments">Enrollments</a></li>
                                <li><button id="button-logout-organizer"  class=" "  onClick={logout}>Logout</button></li>

                            </ul>
                    </div>
            </nav> 
        </div>
    )
}