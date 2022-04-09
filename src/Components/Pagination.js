import { useEffect,useState } from "react";
import FollowerList from "./FollowerList";


const Pagination =(follower) => {
    // let state = useSelector((state)=>state.reducer)
    // let dispatch =useDispatch()
    
     console.log(follower)
 
    let PagePerItem =9;
    let Pages = Math.ceil(follower.length/PagePerItem); //하나의 페이지당 9개씩 
    
 
    const newFollowers = Array.from({length:Pages},(_,index)=>{
      const start =index * PagePerItem;
     
      return  follower.slice(start,start+PagePerItem)
    })
    
    console.log('newFollowers',newFollowers)
    return newFollowers
    
  
  //  return newFollowers.map((item,i)=>{
  //    return (<span className="page-item">
     
  //   <button class="page-link pagination-margin" value="1"onClick={(e)=>{
  //    e.preventDefault()
  //     console.log(item[0])
   
  //  }}>{i}</button>
   
  //  </span>

  //  )})

}
   
  
     
      
    
  


  export default Pagination