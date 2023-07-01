import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const colorTheme=(color)=>{
    if(color==="blue"){
      document.body.style.backgroundColor=("#0F3460");
    }
    else if (color==='green'){
      document.body.style.backgroundColor=("#346751");
    }
    else if (color==='red'){
      document.body.style.backgroundColor=("#44000D");
    } 
    else if (color==='yellow'){
      document.body.style.backgroundColor=("#C87941");
    }
   }


  return (
    <>


<BrowserRouter>
   <div>
   <Navbar title="TextUtils" about= "about" mode={mode} toggleMode={toggleMode} colorTheme={colorTheme} showAlert={showAlert}/>
   <Alert alert={alert} />

      <Routes>
          <Route exact path ="/" element={<TextForm mode={mode} heading = "Enter your Text" showAlert={showAlert}/>}/>
          <Route path="/textform"  element={<TextForm mode={mode} heading = "Enter your Text" showAlert={showAlert}/>} />
          <Route path="/about" element={ <About mode={mode}/>} />
      </Routes>
      </div>
    </BrowserRouter>


    
    </> 
  );
}

export default App;