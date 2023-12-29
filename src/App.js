
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState("light");//Whether Dark mode is enabled or not
  const[alert,setAlert]=useState(null)
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
  }

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1700);
  }

  const toggleMode=(cls)=>{
     removeBodyClass()
    document.body.classList.add("bg-"+cls);
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode enabled","success")
    }
  }

  return (
   <>
   <BrowserRouter>   

   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
   
      <Alert alert = {alert}/>  
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter|Text Counter|Remove Extra Spaces" mode={mode}/>
        <Routes>
          {/*<Route path="/" element={<TextForm heading="TextUtils-Word Counter|Text Counter|Remove extra Spaces" onShowAlert={showAlert}/>} />*/}
          <Route  path="/about" element={<About mode={mode}/>} />
          
       </Routes>
      </div>
   </BrowserRouter>
   </>
  );
}

export default App;
