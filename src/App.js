import React, { useState, useEffect } from "react";
import "./App.css";

import { UserProvider } from "./userContext";
import Login from "./login";
import Home from "./home";

function App() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  // useEffect(() => {
  //   console.log("use effect");
  // }, [name]);


  return (
    <div className="App">
      <UserProvider value={"sarim123"}>
        <Login />
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
