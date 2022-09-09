import React,{useState} from "react";
import Searchresult from "./Searchresult";
const Search=()=>{
    const [img,setImg]= useState("");
    const InputEvent=(event)=>{
    const data=event.target.value;
    setImg(data);
    }
    return(

    <>
        <div className="searchbar">
            <input type="text" name="search" placeholder="Search Anything" value={img} onChange={InputEvent}/>
        </div>
       {img===""?null:<Searchresult name={img}/>}
    </>);
}
export default Search;