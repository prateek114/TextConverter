import React,{ useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const modeEnable=()=>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="rgb(15,57,76)";
      showAlert("Dark Mode Enabled","success")
      document.title="TextUtils-Dark Mode Enabled"

      // setInterval(()=>{
      //   document.title="TextUtils is Amazing"
      // },2000)

      // setInterval(()=>{
      //   document.title="Amazing"
      // },1500)
    }

    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled","success")
      document.title="TextUtils-Light Mode Enabled"
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} enable={modeEnable}/>
      <Alert alert={alert}/>
        
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>

            <Route exact path="/" element={<TextForm heading="Enter the text here" showAlert={showAlert} mode={mode}/>}>
            </Route>
          </Routes>
        </div> 
    </Router>
    </>
  );
}

export default App;
