import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import Navbar from './component/Navbar.js'
import Spinner from './component/Spinner'

import Main_text from './component/Main_text';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Photo from './component/Photo';
import Videos from './component/Videos';


function App() {

const[query,setQuery]=useState("")
const set_query=(x)=>{
  console.log(x)
  setQuery(x)
}
const[spinner,set_spinner]=useState(false)
const setSpinner=(z)=>{
  set_spinner(z)
}

 
  return (
    <div className="App">
      <Router>
         <Navbar/>
         <Routes>
         <Route exact path="/"element={spinner?<Spinner/>:<Home set_query={set_query} />}/>
         <Route exact path="/*"element={spinner?<Spinner/>:<Photo query={query} setSpinner={setSpinner} set_query={set_query}/>}/>
        
         </Routes>
        
         </Router>
    
    
   
    </div>
  );
}

export default App;
