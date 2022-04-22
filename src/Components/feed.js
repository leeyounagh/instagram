import React,{useState,useEffect,useRef} from "react";
import axios from 'axios';
import {AiOutlineHeart} from 'react-icons/ai';
import {HeartOutlined, HeartFilled, WindowsFilled} from '@ant-design/icons';	
import "./feed.css"
import {BiMessageRoundedDetail} from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid';


const Feed = (props)=>{
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
   { <Photo Photo={_Photo} ></Photo> }
  
    </div>
  }
  
 
  const Photo =(props) =>{

   const [댓글, 댓글변경]=useState(false)
   const idRef= useRef(0)
   let id = 0;
   const [댓글추가,댓글추가변경]=useState([]);
    const [mode,modeChange] =useState('댓글추가')
    const[id배열,id배열추가]=useState([])

    let _input = ""
   
   useEffect(()=>{
    댓글변경()
    
   },[])

const onSubmit = (e) => {
  댓글추가변경([...댓글추가,{id:idRef.current,title:_input}])
  console.log(댓글추가)
  idRef.current = idRef.current+1;

 
}
const [commChecked,commcheckchange] =useState(false)
const [isChecked,isCheckedChange] = useState(false)
const onClick = () =>{
  if(isChecked){
   isCheckedChange(false)
  }else if(isChecked==false){
   isCheckedChange(true)
  }
}
const onClick2 = () =>{
  if(commChecked){
    commcheckchange(false)
  }else if(commChecked==false){
    commcheckchange(true)
  }
}

const onChange2 = (e) => {
  _input = e.target.value
  
  console.log(_input,id)
}

 function deleteItem(index,id){
   if(index==='delete'){
     if(window.confirm('정말로 지우겠습니까?')){
          
      let copy =Array.from(댓글추가)
      console.log(copy[0].id)
       console.log(id)
       let i =0;
       console.log(i)
       while(i<copy.length){
         console.log(copy[i].id)
        if(copy[i].id==id){
          console.log(copy[i].id,id)
          copy.splice(i,1) 
          console.log('삭제확인',copy)
          break;
       }
        
         i=i+1;
         
      }
      댓글추가변경(copy)
   
     }
       
   
   }

 }

 

function F_Comment({comm,id}){
  
  return(
    <div key={uuidv4()}>
      
      <span className="comm-position syu-comment"> 슈짱</span>  <span  key={uuidv4()}><b className="comm-position comm-font">{comm.title}</b>
      </span>
    <span key={uuidv4()}>{commChecked?<HeartFilled className="heart-position good-color" size="24" onClick={onClick}></HeartFilled>:
    <HeartOutlined className="heart-position " size="24"onClick={onClick2}></HeartOutlined>}</span>
    <span key={uuidv4()}><button className="delete-position w-btn w-btn-pink" name={comm.id} onClick={(e)=>{
       e.preventDefault()
       deleteItem('delete',e.target.name)
    }}>삭제</button></span>
    </div>
    
  )
}

function F_CommentList(){
  
  return (
    <div>
      {
        댓글추가.map((comm,i) => (<F_Comment comm={comm} id={i}/>))
      }
    </div>
  )
}


const commentArea = () => {
  if(mode==='댓글업데이트'){
    console.log('댓글업데이트 start')
   return <span key={uuidv4()}>
           
            <span>
            <span>{F_CommentList()} </span>
              
            </span>
             
            
            
          </span>
  }
}

   


    return <div className="follower-border feed-index ">
          {
           
      props.Photo.map((item,i)=>{
        return(
          
          <div className="container in-line profile-area" key={i}>
   
            <div className="user-border" >
            <span className=" user-flex"><img className="user-profile u-picture-position user-padding"alt="유저사진" src="https://i.pinimg.com/564x/1f/84/85/1f8485a04ffa78cd459d117656be4f84.jpg"></img></span>
          <span className=" user-flex"><a   href={item.photographer_url}>{item.photographer}</a></span>
         
          </div>
          <div><img className=" feed-photo" alt={item.alt} src={item.src.large}></img></div> 
         <span>
         <span> { isChecked?<HeartFilled className="good-position good-color good-size" size="50" onClick={onClick}></HeartFilled>:
         <HeartOutlined className="good-position good-size" size="50"onClick={onClick}></HeartOutlined>}</span>
       
         </span>
        
         <div>
         <span><img className="profile-size"alt="내사진" src="https://i.pinimg.com/564x/d0/1f/bb/d01fbb73afc06440cdc9733c2228ca6a.jpg"></img></span>
         <span><span className="good-people"> 송강님외 여러명이 좋아합니다</span></span>
         </div>
       
         <div>
        <span><a className="user-size text-position1 font-size"  href={item.photographer_url}> {item.photographer} </a> <span className="user-margin text-size text-position2 text-overflow">{item.alt}  </span></span>
           
         </div>
        
            
            <div className="comment text-position1 "><button className="custom-btn btn-6"onClick={(e)=>{
              
               e.preventDefault()
                댓글변경(!댓글)  
                console.log(mode)
                
                
            }}>all comment</button></div>
            <div className="user-margin">
            {
              댓글 == true&& <form onSubmit={(e)=>{
                e.preventDefault()
                modeChange('댓글업데이트')
             
                return false
              
               
              } } method="post">
                 <div className="user-margin text-position">
            
         
            {commentArea()}
            
          
           </div>

              <span ><input className="input-width  input-position"
                onChange={(e) => {onChange2(e)}} type="text" placeholder="댓글달기.." ></input> </span> 
               
               <span><input  key={i} className="  input-margin w-btn w-btn-pink" type="submit" name="name" value="comment"
               onClick={(e)=>{
                onSubmit(e)
                modeChange('댓글업데이트')
                console.log(mode)
                
                console.log(댓글추가)
                
                  
               }}></input></span>
               
              </form>
               
            
            } 
         
            
          
            </div> 
           
         
              
            </div>
       
        )
        })
      }         
  
           </div>
      }
    
  
      export default Feed
