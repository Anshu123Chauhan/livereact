import React, { useEffect,useState } from "react";
const Statewise = () => {
    const [state, setstate] = useState([]);
    const getCovid = async () => {
    const data = await fetch("https://data.covid19india.org/data.json");
    const result = await data.json();
    console.log(result.statewise);
    setstate(result.statewise);
  };
  useEffect(() => {
    getCovid();
  }, []);
  return (
    <>
      <div className="container">
      <div className="table-responsive">
        <h1 className="text-center">India Covid-19 Dashboard</h1>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr className="text-start">
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Death</th>
              <th scope="col">Active</th>
              <th scope="col">Updated</th>
            </tr>
          </thead>
          <tbody>
          {
            state.map((currentElement,index)=>{
                return(
                <tr className="text-start" key={index}>
                    <th>{currentElement.state}</th>
                    <td>{currentElement.confirmed}</td>
                    <td>{currentElement.recovered}</td>
                    <td>{currentElement.deaths}</td>
                    <td>{currentElement.active}</td>
                    <td>{currentElement.lastupdatedtime}</td>
                </tr>
                )
            })
          }
           
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};
export default Statewise;
