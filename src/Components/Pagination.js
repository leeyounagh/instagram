

const Pagination =(followers) => {
    // let state = useSelector((state)=>state.reducer)
    // let dispatch =useDispatch()
    
     console.log('페이지네이션',followers)
 
    let PagePerItem =5;
    let Pages = Math.ceil(followers.length/PagePerItem); //하나의 페이지당 9개씩 
    
 
    const newFollowers = Array.from({length:Pages},(_,index)=>{
      const start =index * PagePerItem;
     
      return  followers.slice(start,start+PagePerItem)
    })
    
    console.log('newFollowers',newFollowers)
   
    
     return newFollowers

}
   
  
     
      
    
  


  export default Pagination