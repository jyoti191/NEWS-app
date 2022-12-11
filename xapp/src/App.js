
import './App.css';

import React,{ useState} from 'react'
import NavBar from './components/NavBar';
import About from './components/About';
import AboutState from './context/about/AboutState'
import Content from './components/Content';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";



 const App =()=> {
  const pageSize = 6;
  
  const [progress, setProgress] =useState(0)
  
  
    return (
      <><AboutState>
        <Router>
      <NavBar/>
      <LoadingBar
      height={3} color='#f11946'
      progress={progress}
      />

        <Routes>
        <Route path="about" element={<About/>}/>

        
        <Route path="/" element={<Content setProgress={setProgress}  
          pageSize={6} country={"in"} />}/>
          <Route path="home" element={<Content setProgress={setProgress}  
          pageSize={6} country={"in"} />}/>
        <Route path="business" element={<Content setProgress={setProgress} key= "business" 
          pageSize={6} country={"in"} category={"business"}/>}/>
        <Route path="entertainment" element={<Content setProgress={setProgress} key="entertainment" 
          pageSize={6} country={"in"} category={"entertainment"}/>}/>
        <Route path="health" element={<Content setProgress={setProgress} key="health" 
          pageSize={6} country={"in"} category={"health"}/>}/>
        <Route path="science" element={<Content setProgress={setProgress} key="science" 
          pageSize={6} country={"in"} category={"science"}/>}/>
        <Route path="sports" element={<Content setProgress={setProgress} key="sports" 
          pageSize={6} country={"in"} category={"sports"}/>}/>
        <Route path="technology" element={<Content setProgress={setProgress} key="technology" 
          pageSize={6} country={"in"} category={"technology"}/>}/>


        <Route path="general" element={<Content setProgress={setProgress} key="general" 
          pageSize={6} country={"in"} category={"general"}/>}/>
          
        </Routes>
      </Router>
       
      
        
      </AboutState>
      
      </>
      
    )
  }
export default App

