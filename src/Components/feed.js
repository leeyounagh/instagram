import React,{useState,useEffect,useRef} from "react";
import axios from 'axios';

import {HeartOutlined, HeartFilled} from '@ant-design/icons';	
import "./feed.css"
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
   let IndexRef =useRef(0) 
   
    let _input = ""
   
   useEffect(()=>{
    댓글변경()
    
   },[])

const onSubmit = (e) => {
  댓글추가변경([...댓글추가,{id:idRef.current,title:_input}])
  console.log(댓글추가)
  console.log('궁금함',IndexRef.current.value)
  // const newCommentVal = IndexRef.current.value;
  idRef.current = idRef.current+1;//댓글수 카운트

 
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
  IndexRef= e.target.name;
  console.log(_input,id)
  console.log(IndexRef)
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
//  function 게시물번호 (e){
           
//   IndexRef= e.target.name;
//   console.log(IndexRef)
//   commentArea(IndexRef.current)
//  }
 

function F_Comment({comm,id}){
  
  
  return(
    <div key={uuidv4()}>
      
      <span className="comm-position 
      
      "> 슈짱</span>  <span  key={uuidv4()}><b className="comm-position comm-font">{comm.title}</b>
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


const commentArea = (index) => {
  if(mode==='댓글업데이트'){
    
    //커서 올린곳의 name값
   return <span key={uuidv4()}>
           
            <span>
            <span>{F_CommentList()} </span>
              
            </span>
             
            
            
          </span>
  }
}

   function 테스트(e){
     console.log(e.target.name,IndexRef.current)
     if(e.target.name==IndexRef.current){
        return console.log('성공')
     }else{
       return null
     }
   }


    return <div className=" feed-index ">
          {
           
      props.Photo.map((item,i)=>{
        return(
          
          <div className="container in-line profile-area" key={i}>
   
            <div className="user-border" >
            <span className=" user-flex"><img className="user-profile u-picture-position user-padding"alt="유저사진" src="https://i.pinimg.com/564x/9b/78/95/9b7895a7155439ffb622d7ffc2772a52.jpg"></img></span>
          <span className=" user-flex"><a   href={item.photographer_url}>{item.photographer}</a></span>
          <div>{i}</div>
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
        
            
        
            <div className="user-margin">
             <form onSubmit={(e)=>{
                e.preventDefault()
                modeChange('댓글업데이트')
                e.target.reset()
                return false
              
               
              } } method="post">
                 <div className="user-margin text-position">
            
         
            {commentArea()}
            
          
           </div>

              <span ><input className="input-width  input-position"
                onChange={(e) => {onChange2(e) 
                   }} type="text" placeholder="댓글달기.." name={i} ref={IndexRef}></input> </span> 
               
               <span><input  key={i} className="  input-margin w-btn w-btn-pink" type="submit" name={i} value="게시"
               onClick={(e)=>{
                onSubmit(e)
                테스트(e)
                modeChange('댓글업데이트')
                
                
               
                         
               
                  
               }}></input></span>
               {/* {테스트()} */}
              </form>
               
            
            
         
            
          
            </div> 
           
         
              
            </div>
       
        )
        })
      }         
  
           </div>
      }
    
  
      export default Feed
