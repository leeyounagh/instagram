import React from 'react';
import Feed from './feed';
import "./feed.css"
const Follower = ({ avatar_url, html_url, login }) => {
 

    return <div>
    <span className='follower-location container'>
  
  
  {
    
        <div>
         <span>
       <span><img className='follower-size follwer-location img-style' src ={avatar_url} alt={login}></img></span>  
        <span className='login-position'>{login}</span> 
           </span>  
        <div className='view-position'>
        <a href={html_url} className="btn profile-margin">
           <button className=' w-btn w-btn-pink' onClick={(e)=>{}}>view profile</button>
         
         </a>
        </div>
        
         
        </div>
       
      
    
    
  }

  
  
 
  
</span> 
{/* <span className="pid-position">
<Feed></Feed>
</span> */}
</div>
};

export default Follower;