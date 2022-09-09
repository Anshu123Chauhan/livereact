import React,{useContext} from "react";
import CompC from "./CompC";
import { FirstName, Email } from "./App";
const CompB=()=>{
    const name= useContext(FirstName);
    const email= useContext(Email);
    return (<><h1>
    My name is {name} and my email address is <br />
    {email}
  </h1>
  <CompC/></>);
}
export default CompB;