
import './App.css';
import 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsMessenger} from 'react-icons/bs';
import { GiWrappedHeart } from 'react-icons/gi';
import {Navigate, Route, Router, Routes} from 'react-router-dom'
import Update from './Components/Update';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Story from './Components/Story';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'history';
import Followers from './Components/Followers';
import Pid from './Components/Pid';


export let followerContext = React.createContext();




function App(props) {
  
  
  return (
    <div className="App background">
      <header className='container header-size'>
        <div className='ui-flex row'>
          <div className='logo-position'>  
            <img className='ui-set s4Iyt' alt="Instagram"  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" >
       </img></div>
      
       <Update></Update>
       <Story></Story>
       
       
       
       <div>
       
       <GiWrappedHeart className='iposition'  size="30"
       onClick={()=>{console.log('짜잔')}}></GiWrappedHeart>
     
      <BsMessenger className='iposition '  size="24"
      onClick={()=>{console.log('짜잔')}}></BsMessenger>
      
      <AiFillHome className='iposition '  size="30"
      onClick={()=>{<Navigate exact to ="/"></Navigate>}}></AiFillHome>   
     
       </div>
        </div>
      </header>
      
   
      <Routes>
      
      <Route exact path='/' element={
        
      <Main >
        
      </Main>}> 
        </Route>
      </Routes>
    
    </div>
  );
}

 

function Main(props){
 
  
  return <div className='main-size container'>
    <div>
    
    <Followers></Followers>
    {/* <Pid></Pid> */}
    </div>
   
     {/* <div>
       <Pid></Pid>
  여기는 피드
</div> */}
 
    </div>

}
export default App;
