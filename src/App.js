
import './App.css';
import 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsMessenger} from 'react-icons/bs';
import { GiWrappedHeart } from 'react-icons/gi';
import {Navigate, Route, Router, Routes,Link} from 'react-router-dom'
import Update from './Components/Update';
import Follower from './Components/Follower';
import React, { useEffect, useState } from 'react';
import Story from './Components/Story';
import Feed from './Components/feed';
import Chat from './Components/Chat'
import {AiFillPlusSquare } from 'react-icons/ai';
import Search from './Components/Search';


import {useFetch} from './useFetch'


export let followerContext = React.createContext();




function App(props) {
let heartcount= 0


const Heartcount = (heart) => {

  return <div>{heart}</div>
}

  return (
    <div className="App background">
      <header className='container header-size'>
        <div className='ui-flex row'>
          <div className='logo-position'>  
         <Link to="/"><img className='ui-set s4Iyt ' alt="Instagram"  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" >
       </img></Link>   </div>
      
       
       
       <span><Search></Search></span>
       
       
       <div className='media'>
       {/* <Link to="/update/*"><AiFillPlusSquare className="update-position"></AiFillPlusSquare></Link> */}
  
       <GiWrappedHeart className='iposition'  size="30"
       onClick={()=>{
         heartcount++
         Heartcount(heartcount)
         console.log(heartcount)
       }}></GiWrappedHeart>
      
     <Link to="/chat/*"><BsMessenger className='iposition '  size="24"
      onClick={()=>{console.log('짜잔')
      }}></BsMessenger></Link> 
      
      <Link to="/"><AiFillHome className='iposition '  size="30"
     ></AiFillHome>   </Link>
     
       </div>
        </div>
      </header>
      
     
      <Routes>
      
      <Route exact path='/' element={
        
      <Main >
        
      </Main>}> 
        </Route>
        <Route exact path='/chat/*' element={<Chat></Chat>}> 
         
        </Route>
       
        <Route exact path="*" element={<Notfound></Notfound>}></Route>
        <Route exact path='/update/*' element={<Update></Update>}></Route>
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
          
        const {loading,data} = useFetch()
        const [page,setPage] =useState(0);
        const [followers,setFollowers]= useState([])
        const [페이지나누기,페이지나누기변경] =useState('첫페이지')
        console.log("데이타",data)

        useEffect(()=>{
          if(loading) return
        setFollowers(data[page])
        },[loading,page])
  
        const handlePage = (index) =>{
          setPage(index)
        }

        const nextPage = (index)=>{
          setPage((oldPage)=>{
            let nextPage =oldPage+1
            if(nextPage > data.length-1 ){
              nextPage = 0
            }
            return nextPage
          })
          
        }

        const prevPage = (index)=>{
          setPage((oldPage)=>{
            let prevPage =oldPage+1
            if(prevPage <0 ){
            prevPage =data.length -1
            }
            return prevPage
          })
          
        }

        return <main>
              
          <span className='Main-position '>
            <span className='my-margin'>
            <span><img className="profile-size1"alt="내사진" src="profile.jpg"></img>
            <div><a href="https://www.instagram.com/dlduddkdla/">dlduddkdla</a></div>
            <span className='name-margin'>슈짱</span> </span>
          
            </span>
         <div className='recomenn-margin'>
          <h2>회원님을 위한 추천</h2>
            <div>
              {followers.map((follower)=>{
                return <Follower key ={follower.id} {...follower}/>
              
              })}
            </div>
        
            <div>
            <button className="page-margin myButton page-position recomenn-margin" onClick={prevPage}>
              prev
            </button>
              {data.map((item,index)=>{
                    return <button className="page-margin myButton1 page-position"key={index}
                    onClick={()=>{
                      handlePage(index)
                    }}>
                      {index+1}
                    </button>

              })}
              <button className="myButton page-position"onClick={nextPage}>
              next
            </button>
            </div>
            </div>
          </span>
          <span className="pid-position Main-leftposition" >
        <Feed></Feed>
        </span>

        </main>

            }

export default App;
