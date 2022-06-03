import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
// import News from './components/news';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App=()=> {
  let state={
    mode:"light"
  }
  const [mode, setmode] = useState("light")
  let api=process.env.REACT_APP_API;
    let changestate=()=>{
      // console.log("hlo i m working fine");
       if(mode==="light")
      {
        document.body.style.backgroundColor="#212529";
        setmode("dark");
      }
      else
      {
        document.body.style.backgroundColor="white";
        // this.setState({
        //   mode:"light"
        // })
        setmode("light");
      }
    }
    return (
      <Router>

          <Navbar mode={mode} changestate={changestate}/> 
          <Routes>
            <Route exact path="/" element={<News  key="general" api={api} mode={mode} country="in" category="general"/>} >
            </Route>
            <Route exact path="/about" element={<About  mode={mode}/>} >
            </Route>
            <Route exact path="/science"  element={<News api={api} key="science" mode={mode} country="in" category="science"/>} >
            </Route>
            <Route exact path="/business"  element={<News api={api} key="business" mode={mode} country="in" category="business"/>} >
            </Route>
            <Route exact path="/entertainment"  element={<News api={api} key="entertainment" mode={mode} country="in" category="entertainment"/>} >
            </Route>
            <Route exact path="/general"  element={<News api={api} key="general" mode={mode} country="in" category="general"/>} >
            </Route>
            <Route exact path="/health"  element={<News api={api} key="health" mode={mode} country="in" category="health"/>} >
            </Route>
            <Route exact path="/sports"  element={<News api={api} key="sports" mode={mode} country="in" category="sports"/>} >
            </Route>
            <Route exact path="/technology"  element={<News api={api} key="technology" mode={mode} country="in" category="technology"/>} >
            </Route>
          </Routes>
      </Router>
    )
  }

  export default App;