import React, { useEffect, useState } from 'react';
import "./AllFollower.css"; 

import InfiniteScroll from 'react-infinite-scroll-component';



const AllFollower = () => {
 
      
   const [items, setItems] =useState([])
  const [noMore,setnoMore] = useState(true);

  const [page,setPage]= useState(2);
    useEffect(()=>{
         const getComments = async ()=>{
           const res = await fetch(
               `http://localhost:3004/comments?_page=1&_limit=20`
           )
           const data =await res.json();
           setItems(data);
         }
         getComments();
    },[])

    console.log(items)

    const fetchComments = async () => {
        const res = await fetch(
            `http://localhost:3004/comments?_page=${page}&_limit=20`
        )
        const data = await res.json();
        return data;
    }
     const fetchMoreData = async()=>{
              const commentsFormServer = await fetchComments();
                  console.log(commentsFormServer.length)
              setItems([...items,...commentsFormServer]);
              if(commentsFormServer.length === 0 || commentsFormServer.length<20){
                setnoMore(false);
              } //어레이의 남아있는데이터가 20 미만이면 끝내라!
             
              setPage(page+1);
     }
    return (
      
        <div>

        <div className='test1'></div>
       <div> <h2 className='retext-position'>추천</h2></div>
        <div className='allfollower-border'>
         <InfiniteScroll dataLength={items.length}
         next={fetchMoreData}  hasMore={noMore} loader={<h4>Loading...</h4>}  >

          {items.map((item,index)=>{ return <div key={index} >
           <span><img className='usersimg'alt='유저들' src={item.avatar_url} ></img></span>
        <span className='text-position10'>이름:{item.name}</span>
        <span className='text-position10'>국가:{item.country}</span>
        <span className='text-position10'> 나이:{item.age}</span>
       
       </div> })}
         </InfiniteScroll>
            
        </div>
        </div>
    
    );
};

export default AllFollower;