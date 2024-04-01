import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Home/Header";
import AdminNav from "../Admin/AdminNav";
import Footer from "../Home/Footer";

export default function Logout(){
    const navigate = useNavigate();
    localStorage.clear();
    navigate("/")
    // const logout=()=>{
    //     navigate("/")
    // }

   
   
    // return(
    //     <div>
    //         <Header/>
    //         <AdminNav/>
    //         <h4>Are you sure to logout ??</h4>
    //         <button type="button" class="btn btn-primary"  onClick={logout}>Yes</button>
    //         <Footer/>
    //     </div>
    // )

}