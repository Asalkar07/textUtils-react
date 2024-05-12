 // import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'My-App - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      // document.title = 'My-App - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar />
    <Navbar title = "My-App" Abouttext = "About us" mode ={mode}   toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode ={mode}/>
    {/* <About/> */}
    {/*</div> */}
    <HashRouter>
    <Navbar title = "My-App" Abouttext = "About us" mode ={mode}   toggleMode={toggleMode}/>  
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* always use exact key word beacause if do not use exact react match it partially on different component so use exact  for fast work */}
          <Routes>
            <Route exact path="/about" element={
              <About mode ={mode}/>}>
            </Route>
            <Route
              exact path="/"
              element={
                <TextForm showAlert={showAlert} heading = "Try My-App - Word Counter, Character Counter, Remove extra spaces " mode ={mode}/>
              }
            ></Route>
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
