import React from 'react';
import { useNavigate } from 'react-router-dom';
  
export default function Error() {
    const handleClick=()=>{
        navigate(-1);
    }
    const navigate=useNavigate();
    return (
        <div>
            <h1>Error 404, Page not found</h1>
            <button onClick={handleClick}>Go Back</button>
        </div>
    )
}