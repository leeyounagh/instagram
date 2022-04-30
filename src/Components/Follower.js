import React from 'react';
import Feed from './feed';
import "./feed.css"
const Follower = ({ avatar_url, html_url, login }) => {
 

    return <span className='container'>
  
  
  {
    
        <div className=' follower-border'>
         <span >
           <span>
           <span><img className='follower-size img-style ' src ={avatar_url} alt={login}></img></span>  
        <span className='follower-textposition' >{login}</span> 
           </span>
      
          
      
        <a href={html_url}>
           <button className=' w-btn1 w-btn1-pink btn-ps' onClick={(e)=>{}}>view profile</button>
         
         </a>
      
         </span>  
         
        </div>
       
      
    
    
  }

  
  
 
  
</span> 

};

export default Follower;