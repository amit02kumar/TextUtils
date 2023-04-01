import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  // const removeByClasses=()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-info')
  //   document.body.classList.remove('bg-secondary')
  // }
  const toggleMode = () => {
    // removeByClasses();
    // document.body.classList.add('bg-'+ cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d2a43';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      {/* <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} /> */}
        <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}>

        </Route> 
       <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />}>
             </Route> 
        </Routes> 

     {/* <About/> */}
</div >
      </Router>
    </>
)
}

export default App;
