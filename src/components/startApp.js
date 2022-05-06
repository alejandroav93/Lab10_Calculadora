import React from "react";

import "./startApp.css";

const newArrasysa = new Array();
newArrasysa;
const message = "Welcome To React Simple Component!";
class StartApp extends React.Component {
  render() {

    return <div className="font-white-xl">{message}</div>;
  }
  
}

export default StartApp;
