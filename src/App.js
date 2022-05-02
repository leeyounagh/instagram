
import './App.css';
import 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsMessenger} from 'react-icons/bs';
import { GiWrappedHeart } from 'react-icons/gi';
import {Navigate, Route, Router, Routes,Link} from 'react-router-dom'
import AllFollower from './Components/AllFollower';
import Follower from './Components/Follower';
import React, { useEffect, useState } from 'react';
import Story from './Components/Story';
import Feed from './Components/feed';


import Search from './Components/Search';
import {useFetch} from './useFetch'


export let followerContext = React.createContext();




function App() {





  return (
    <div className="App">
      <header className='container header-size'>
        
          <div className='logo-position'>  
         <Link to="/"><img className='ui-set s4Iyt ' alt="Instagram"  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" >
       </img></Link>   </div>
      
       
       
       <span><Search></Search></span>
       
       
       <div className='media'>
     
       {/* <a  href="https://github.com/leeyounagh"><img className="profile-size1 iposition"alt="내사진" src="profile.jpg"></img></a> */}
      <Link to="/allFollower/"> <GiWrappedHeart className='iposition'  size="30"
     ></GiWrappedHeart>
      </Link>
     
      
      <Link to="/"><AiFillHome className='iposition '  size="30"
     ></AiFillHome>   </Link>
     
       </div>
        
      </header>
      
     
      <Routes>
      
      <Route exact path='/' element={
        
      <Main >
        
      </Main>}> 
        </Route>
     
       
        <Route exact path="*" element={<Notfound></Notfound>}></Route>

        <Route exact path='/allFollower/' element={<AllFollower></AllFollower>}></Route>
       
      </Routes>
    
    </div>
  );
}
 
function Notfound(){

  return <div>잘못된 경로입니다.</div>
}

function Main(props){
 
  
  return <div className='main-size container '>
   
  <Story></Story>
   <FollowerPage></FollowerPage>
   
    </div>
   

 
    

}
  


  function FollowerPage(){
          
        const {loading,data,allData} = useFetch()
        const [page,setPage] =useState(0);
        const [followers,setFollowers]= useState([])
      
        console.log('모든데이터',allData)

        useEffect(()=>{
          if(loading) return
        setFollowers(data[page])
        },[loading,page])
  
        const handlePage = (index) =>{
          setPage(index)
        }



        return <main >
        
              <span >
              <span className='Main-position Right-border'>
            <span className='my-margin'>
            <span><img className="profile-size1"alt="내사진" src="profile.jpg"></img>
            <div><a href="https://github.com/leeyounagh">dlduddkdla</a></div>
            <span className='name-margin'>슈짱</span> </span>
          
            </span>
         <div className='recomenn-margin'>
           <span className='recomen-position '>
           <h2 className='middle-position'>회원님을 위한 추천</h2>
         <Link to="/allFollower/"><h3 className='recom-button middle-position1'>모두보기</h3></Link>  
           </span>
          
        
           
            
               
                {followers.map((follower)=>{
                return <Follower key ={follower.id} {...follower}/>
              
              })}
              
            
              
            
          
        
     
            </div>
          </span>
              </span>
          <span>
       
          </span>
          <span className="pid-position Main-leftposition" >
        <Feed></Feed>
        </span>

        </main>

            }

export default App;
