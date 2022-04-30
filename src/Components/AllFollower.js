import React, { useEffect, useState } from 'react';
import "./AllFollower.css"; 
import UserInformation from './UserInfomation';
import InfiniteScroll from 'react-infinite-scroll-component';


const AllFollower = () => {
    
    const [items,itemsChange] = useState(UserInformation)
    console.log(items)

    const userInfo = items.map((item)=>{
       console.log(item.length)
       return <div >
           <span><img className='usersimg'alt='유저들' src={item.avatar_url} ></img></span>
        <span className='text-position'>이름:{item.name}</span>
        <span className='text-position'>국가:{item.country}</span>
        <span className='text-position'> 나이:{item.age}</span>
       
       </div> 
    })
    return (
      
        <div>

        <div className='test1'></div>
       <div> <h2 className='retext-position'>추천</h2></div>
        <div className='allfollower-border'>
           {userInfo}
            
        </div>
        </div>
    
    );
};

export default AllFollower;