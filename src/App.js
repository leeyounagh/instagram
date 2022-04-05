
import './App.css';
import 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsMessenger} from 'react-icons/bs';
import { GiWrappedHeart } from 'react-icons/gi';
import {Route, Router, Routes} from 'react-router-dom'
import Update from './Update';
import React, { useEffect, useState } from 'react';
import axios from 'axios';






function App(props) {
 
  return (
    <div className="App background">
      <header className='container header-size'>
        <div className='ui-flex row'>
          <div className='logo-position'>  
            <img className='ui-set s4Iyt' alt="Instagram"  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" >
       </img></div>
      
       <Update></Update>
       
       
       
       <div>
       
       <GiWrappedHeart className='iposition'  size="30"
       onClick={()=>{console.log('짜잔')}}></GiWrappedHeart>
     
      <BsMessenger className='iposition '  size="24"
      onClick={()=>{console.log('짜잔')}}></BsMessenger>
      
      <AiFillHome className='iposition '  size="30"
      onClick={()=>{console.log('짜잔')}}></AiFillHome>   
     
       </div>
        </div>
      </header>
      
   
      <Routes>
      
      <Route exact path='/' element={<Main></Main>}> 
        </Route>
      </Routes>
    
    </div>
  );
}


const FollwerList =({follower})=>{
   

  return <div className='follower-location'>
    <div> 나를 팔로우하는사람들</div>
    {
      follower.map((item)=>{
        return(
         
          <div>
             
            <img className='follower-size follwer-location'alt={item.login} src={item.avatar_url}></img>
           {item.login}

                 
          </div>
         
        )
      })
    }
    {/* <Pagination></Pagination> */}
  </div>
}

const Followers = (props)=>{
  let [follower,followerChange] = useState([]);
  
      useEffect(()=>{
        axios.get('https://api.github.com/users/john-smilga/followers?per_page=100').
        then((result)=>{
          console.log('팔로우',result.data);
          let copy=  [...result.data]
         followerChange(copy)
        
         
          
        }).catch(()=>{
     
          console.log('실패')
        },);

      },[]);
     
  

    return (
     <div>
       <FollwerList follower={follower}></FollwerList>
     </div>

    )
 

}

// const Pagination = ({follower})=>{

//   return<div>
//   <Followers></Followers>
//   </div> 
// }

function Main(props){
  
  return <div className='main-size container'>
    <div>
    <Followers></Followers>
    
    </div>
   
     <span>
  여기는 피드
</span>
 
    </div>

}
export default App;
