// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Coponents/About';
import Navbar from './Coponents/Navbar';
import TextForm from './Coponents/TextForm';
import Alert from './Coponents/alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Link
// } from "react-router-dom";
// import {
//   Routes,
//   Route, 
// } from "react-router-dom";
function App() {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  const [alert, setalert] = useState(null)

  const ShowAlert = (message) => {
    setalert({
      msg: message
    })
    setTimeout(() => {
      setalert(null);

    }, 1000);

  }
  const [darkmode, setdarkmode] = useState('light');
  const togglemode = () => {
    if (darkmode === 'light') {
      setdarkmode('dark');
      document.body.style.backgroundColor = '#212029'
      ShowAlert("dark mode has been enabled")
      document.title = "TextUtils-dark mode"
      // setMyStyle({
      //     color: 'white',
      //     backgroundColor: 'black',
      //     border: '0.5px solid white'
      // })
      // setInterval(()=>{
      //   document.title='Install TextUtils now!'
      // },2000);
      // setInterval(()=>{
      //   document.title='TextUtils is amazing '
      // },1500);
    }
    else {
      setdarkmode('light');
      document.body.style.backgroundColor = 'white'
      ShowAlert("light mode has been enabled")
      document.title = "TextUtils"
      // setMyStyle({
      //     color: 'black',
      //     backgroundColor: 'white'
      // })
    }
  }


  return (<>
    {/* // <Router>


    //   <Navbar title="TextUtils" mode={darkmode} togglemode={togglemode} />
    //   <Alert alert={alert} mode={darkmode} />
    //   <Routes>
    //     <Route exact path='/about' element= {<About  myStyle={myStyle}/>}/>
    //       <Route exact path='/' element={<TextForm ShowAlert={ShowAlert} heading="Enter the text to analyze" mode={darkmode} /> }/>
    //   </Routes>

    // </Router> */}
    <Navbar title="TextUtils" mode={darkmode} togglemode={togglemode} />
    <Alert alert={alert} mode={darkmode} />
    <TextForm ShowAlert={ShowAlert} heading="Enter the text to analyze" mode={darkmode} />
    </>
  );
}

export default App;
