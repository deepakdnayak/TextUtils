import './App.css';
import About from './components/About';
import {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  let currentDate = new Date();
  let currentHours = currentDate.getHours();
  
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState(currentHours>6 && currentHours<18 ? 'light': 'dark');

  mode==='light' ? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = '#212529';

  const showAlert= (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode is enabled","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
      <Router >
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />   
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>} />
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;