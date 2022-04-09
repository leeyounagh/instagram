import React, {useState,useEffect} from "react";
 import { useSelector, useDispatch, connect} from "react-redux";
// import Pagination from "./Pagination";
import axios from 'axios';
import FollowerList from "./FollowerList"
import Pagination  from "./Pagination";


const Followers = ()=>{
    
    
        let [follower,followerChange] = useState([]);
        let [Page,PageChange] =useState([])
    
        useEffect(()=>{
         
          axios.get(`https://api.github.com/users/john-smilga/followers?per_page=100`).
          then((result)=>{
            console.log('팔로우',result);
            let copy=  [...result.data]
            console.log(copy)
            
             followerChange(copy)
             Pagination(copy);
            
            
            
          }).catch(()=>{
        
            console.log('실패')
          },);
  
        },[Pagination]);
       
    
  
      return (
       <div>
         <FollowerList follower={follower}></FollowerList>
         
        {/* <FollowerList  follower={follower} followerChange={followerChange} ></FollowerList> */}
        
        
       </div>
  
      )
   
  
  }
 
  export default Followers