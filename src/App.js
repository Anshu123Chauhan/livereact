import { createContext, useState,useEffect } from "react";
import "./App.css";
import CompA from "./CompA";
import Statewise from "./component/statewiseData/statewise";
import Pokemon from "./component/Pokemon";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from "./Compnents/About";
import Contact from "./Compnents/Contact";
import Blog from "./Compnents/Blog";
import Header from "./Compnents/Header";
const FirstName = createContext();
const Email = createContext();
function App() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    document.title=`You clicked me ${num} time`;
  },[num]);
  return (
    <div className="App">
    <Header/>
    {/*
      <button onClick={() => setNum(num + 1)}>Increment {num}</button>
      <button onClick={() => setNums(nums - 1)}>Increment {nums}</button>
      <FirstName.Provider value={"Anshu"}>
        <Email.Provider value={"test@gmail.com"}>
          <CompA />
        </Email.Provider>
      </FirstName.Provider>
      <Statewise/>
      <Pokemon/>
      */}
    </div>
  );
}

export default App;
export { FirstName, Email };
