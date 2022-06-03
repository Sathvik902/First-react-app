import React,{useState} from "react";
import About from "./components/About";
import './App.css';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  

} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [btnMode, setBtnMode] = useState("dark");


  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode ==="light" ){
      setMode("dark")
      // setBtnMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", 'success');
      document.title = "Text Utils-Home(Dark mode enabled)"
      
    }else
    {
    setMode("light")
    // setBtnMode("light");
    document.body.style.backgroundColor = "white";
    showalert("Light mode has been enabled", 'success');
    }
    
  }
  return (
     
    
    
    <Router>
    <Navbar title = "TextUtils"mode={mode} toggleMode={toggleMode} aboutText = "about us" />
    <Alert alert ={alert}/>
    <div className ="container my-3">
      <Routes>
        <Route path ='/about' element = {<About/>}/>
        <Route path ='/' element = {<TextForm heading ="Enter the text to analize " showalert={showalert}mode={mode} />}/>
      </Routes>
    </div>
    
     </Router>
   
  );
}

export default App;
