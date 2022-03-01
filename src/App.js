import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";

import Calculator from "./components_calculator/Calculator";

import TodoList from "./components_todo/TodoList";

import Home from "./Home";

import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";




function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage = "url('./multiapp/bgimg.jpg')";
      document.body.style.textDecorationColor = "white";

      // showAlert("Dark mode enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundImage = "url('bgslit.png')";
      // showAlert("light mode enabled","success");
    }
  };


  return (
    <>
      <Router>
      <Navbar
          title="Multi-App"
          home="HOME"
          aboutUs="Calculator"
          contactUs="CONTACTUS"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert}></Alert>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home mode ={mode}/>}></Route>
          <Route exact path="/Textform" element={<Textform mode={mode} heading={"Enter your text Here"}/>}></Route>
          <Route exact path="/Calculator" element={<Calculator />}></Route>
          <Route exact path="/TodoList" element={<TodoList mode ={mode}/>}></Route>
     
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;





{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">Page 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/todo">Page 2</Link>
      </li>    
    </ul>
  </div>
</div>
</nav> */}