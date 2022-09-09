import React from "react";
import { FirstName, Email } from "./App";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(value) => {
          return (
            <Email.Consumer>
              {(email) => {
                return (
                  <h1>
                    My name is {value} and my email address is <br />
                    {email}
                  </h1>
                );
              }}
            </Email.Consumer>
          );
        }}
      </FirstName.Consumer>
      ;
    </>
  );
};
export default CompC;
