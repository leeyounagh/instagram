import React from 'react';
import Feed from './feed';
import "./feed.css"
const Follower = ({ avatar_url, html_url, login }) => {
 

    return <div>
    <span className='follower-location container'>
  
  
  {
    
        <div>
         <span className='follower-position'>
           <span className='login-position'>
           <span><img className='follower-size img-style' src ={avatar_url} alt={login}></img></span>  
        <span className='follower-textposition' >{login}</span> 
           </span>
      
          
      
        <a href={html_url} className="btn profile-margin">
           <button className=' w-btn w-btn-pink' onClick={(e)=>{}}>view profile</button>
         
         </a>
      
         </span>  
         
        </div>
       
      
    
    
  }

  
  
 
  
</span> 
{/* <span className="pid-position">
<Feed></Feed>
</span> */}
</div>
};

export default Follower;