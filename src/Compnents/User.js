import React from "react";
import { useParams,useLocation,useNavigate} from "react-router-dom";
const User=()=>{
    const {name,lname}=useParams();
    const location=useLocation();
    const navigate = useNavigate();
    console.log(navigate);
    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate(-1);
      };
    return(<>
        <h1>Hi, it is user {name} {lname} page</h1>
        <h3>My currrent urk is {location.pathname}</h3>
        {location.pathname==="/user/Anshu/chauhan"?<button onClick={handleClick}>Back</button>:null}
    </>)
}
export default User;