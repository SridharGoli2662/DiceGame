import logo from './logo.svg';
import './App.css';
import { GamingInterface } from './components/gaming';
import {Main} from "./components/main";
import { useState } from 'react';
function App() {
  const[isclicked,setclicked]=useState(false);
  const togglefunction =()=>{
      setclicked((prev)=>!prev)
  }
  return (
    <>
       {isclicked?<GamingInterface></GamingInterface>:<Main toggle={togglefunction}/>}
    </>
  );
}

export default App;
