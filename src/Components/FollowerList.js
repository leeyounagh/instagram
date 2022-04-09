import React,{useEffect, useState} from "react"
 import Pagination from "./Pagination"
 import Pid from "./Pid"



const FollowerList =({follower})=>{

     let [Page,PageChange] =useState([])
   
   useEffect(()=>{
    //  let timeOut = setTimeout(()=>{
      
    //  },5000)
     return () => PageChange({Pagination})
      
   },[])
   
    console.log(Page)
    
    return  <div>
        <span className='follower-location container'>
      <div> 나를 팔로우하는사람들</div>
      
      {
        follower.map((item,i)=>{
          return(
           
            <div key={i}>
               
              <img className='follower-size follwer-location 'alt={item.login} src={item.avatar_url}></img>
             {item.login}
             <a href={item.html_url} className="btn profile-margin">
               <p onClick={(e)=>{}}>view profile</p>
             
             </a>
             
            </div>
           
          )
        })
        
      }
   
       
      
     <nav aria-label="Page navigation example ">
        <span className="pagination pagination-margin">
        
        <span className="page-item"><a class="page-link pagination-margin" href="#">이전</a></span>
       
       
         {/* { 
          Page.map((item,i)=>{


            return (<span className="page-item">
             
            <button class="page-link pagination-margin" value="1"onClick={(e)=>{
             e.preventDefault()
               console.log(item[0])
           
           }}>{i}</button>
           
           </span>

           )})
        
        }  */}
        <span className="page-item"><a class="page-link pagination-margin" href="#">다음</a></span>
      </span>
      </nav>

      
    </span> 
    <span className="pid-position">
     <Pid></Pid>
    </span>
    </div>
   
     
    
  }



  export default FollowerList