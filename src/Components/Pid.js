import React,{useState,useEffect} from "react";
import axios from 'axios';



const Pid = ()=>{
    let [_Photo,changePhoto]=useState([])
   
    useEffect(()=>{
     
    axios.get('https://api.pexels.com/v1/curated?page=2&per_page=40',{headers:{
      Authorization:'563492ad6f917000010000019ff210452c074bdaa37bc7093550e096'
    }}).then((result)=>{
       console.log('result',result.data.photos)
       let copy =[...result.data.photos]
       changePhoto(copy);
        <Photo></Photo>
    }
        
    ).catch(()=>{
      console.log("실패")
    })
    },[])
    console.log(_Photo)
    return <div>
   { <Photo Photo={_Photo}></Photo> }
  
    </div>
  }
  
 
  const Photo =(props) =>{


   const [댓글, 댓글변경]=useState(false)
   const [댓글업데이트,댓글업데이트변경] =useState('')
   const [댓글전송,댓글전송변경]=useState(false)

   const 댓글컨트롤 = ()=>{
    댓글전송변경(!true)
   }
   
   useEffect(()=>{
    댓글변경()
    댓글전송변경()
    댓글컨트롤()
   },[])
   
 
  

  
    return <div className="follower-border">
          {
      props.Photo.map((item,i)=>{
        return(
          <div className="container in-line" key={item.id}>
           
         <div><img className="pid-size pid-position" alt={item.alt} src={item.src.large}></img></div> 
         <a className="user-size user-margin"  href={item.photographer_url}>user: {item.photographer}</a>
           <div className="user-margin text-size">  {item.alt}</div>
            <div>
            <div className="comment user-margin"><button onClick={(e)=>{
              e.preventDefault();
                댓글변경(true)   
            }}>all comment</button></div>
            
            {
              댓글 == true&& <div>
              <div ><input className="pid-position input-width comment"
               onChange={(e)=>{
                    댓글업데이트변경(e.target.value)
                  
               }}></input> </div> 
               <div><input  className="pid-position comment" type="button" name="name" value="comment"
               onClick={(e)=>{
                댓글전송변경(!댓글전송)
                
                console.log(댓글전송)
               }}></input></div>
              </div>
            } 
            <div className="user-margin comment comment-flex">
             <div>
              {댓글전송==true&&댓글업데이트}
              {댓글전송==true&&<div>닉네임:슈짱 </div>}
              
              </div>
           
            </div>
            
          
            </div> 
           
         
              
            </div>
       
        )
        })
      }         
  
           </div>
      }
    

    
      export default Pid
    