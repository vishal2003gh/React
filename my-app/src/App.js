import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleRed = () => {
      setmode('red');
      document.body.style.backgroundColor = '#893d3d';
      showAlert("Red mode has been enabled","Success");
  }

  const toggleBlue = () => {
    setmode('blue');
    document.body.style.backgroundColor = '#5f82b4';
    showAlert("Blue mode has been enabled","Success");
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled","Success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return (
    <>
      <Navbar title="XYZ" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed} toggleBlue={toggleBlue}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Your Text " mode={mode}/>
      </div>
    </>
  );
}

export default App;