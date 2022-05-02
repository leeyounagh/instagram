import React,{useState,useEffect,useRef} from "react";
import axios from 'axios';

import {HeartOutlined, HeartFilled} from '@ant-design/icons';	
import "./feed.css"
import { v4 as uuidv4 } from 'uuid';
import feedInfo from "./feedInfo";
import {useSelector,useDispatch} from "react-redux"


      const Feed = (props)=>{
          let [_Photo,changePhoto]=useState([])
          
          useEffect(()=>{
          let copy = [...feedInfo];
          changePhoto(copy);
          <Photo></Photo>
          },[])
         
          return <div>
        { <Photo Photo={_Photo} ></Photo> }
        
          </div>
        }
        
      //
        const Photo =(props) =>{

        const [댓글, 댓글변경]=useState(false)
        const idRef= useRef(0)
        let id = 0;
        const [댓글추가,댓글추가변경]=useState([]);
          const [mode,modeChange] =useState('댓글추가')
        let IndexRef =useRef(0) 
        let IndexId= useRef(0)
          let _input = ""
          let heartCount = useRef(0);
         
        useEffect(()=>{
          댓글변경()
          
        },[])

      const onSubmit = (e,index_id) => {
        
      
          댓글추가변경([...댓글추가,{id:idRef.current,title:_input,heartCount:heartCount.current}])
         
          idRef.current = idRef.current+1;//댓글수 카운트
          heartCount.current = heartCount.current+1;
        
       
        
     

      
      }
     
      const [isChecked,isCheckedChange] = useState(false)
      const onClick = () =>{
        if(isChecked){
        isCheckedChange(false)
        }else if(isChecked==false){
        isCheckedChange(true)
        }
      }
   
     
      const onChange2 = (e,id) => {
        _input = e.target.value
        IndexRef= e.target.name;
         IndexId =id;
        console.log(_input,id)
        console.log(IndexRef)
      }

      function deleteItem(index,id){
        if(index==='delete'){
          if(window.confirm('정말로 지우겠습니까?')){
                
            let copy =Array.from(댓글추가)
           
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
        const [commChecked,commcheckchange] =useState(false)
        const onClick2 = () =>{
         
          let copy = Array.from(댓글추가)
          console.log('확인',id,comm.heartCount,comm.heartCount,copy)
          let i = 0;
          while(i<copy.length){
            console.log(Number(copy[i].heartCount))
            if(commChecked){
              if(Number(id)==Number(copy[i].heartCount)){
                
                commcheckchange(false)
              }
             
            }else if(commChecked==false){
              if(Number(id)==Number(copy[i].heartCount)){
                commcheckchange(true)
              }
              
            }
            i= i+1;
          }
         
         
        }
       
        return(
          <div key={uuidv4()}>
            {
            <div>  <span className="comm-position "> 슈짱</span>  <span  key={uuidv4()}><b className="comm-position comm-font">{comm.title}</b>
            </span>
            
          <span key={uuidv4()}>{commChecked?<HeartFilled className="heart-position good-color" size="24" onClick={onClick2}></HeartFilled>:
          <HeartOutlined className="heart-position " size="24"onClick={onClick2}></HeartOutlined>}</span>
        
          <span key={uuidv4()}><button className="delete-position w-btn w-btn-pink" name={comm.id} onClick={(e)=>{
            e.preventDefault()
            deleteItem('delete',e.target.name)
          }}>삭제</button></span>

             </div> 
            }
          
          </div>
          
        )
      }

      function F_CommentList(name,index_id){
       
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
         
            return <span key={uuidv4()}>
                
            <span>
            <span>{F_CommentList()} </span>
              
            </span>
            
            
            
          </span>
  
           }
      
      }

  
          return <div className=" feed-index ">
                {
                
            props.Photo.map((item,i,array)=>{
              
              return(
                
                <div className="container in-line profile-area" key={i}>
        
                  <div className="user-border" >
                  <span className=" user-flex"><img className="user-profile u-picture-position user-padding"alt="유저사진" src={item.profile_url}></img></span>
                <span className=" user-flex">{item.photographer}</span>
                
                </div>
                <div><img className=" feed-photo" alt={item.alt} src={item.src}></img></div> 
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
                      console.log(heartCount.current)
                      e.target.reset()
                      return false
                    
                    
                    } } method="post">
                      <div className="user-margin text-position">
                  
              
                  {commentArea()}
                  
                
                </div>

                    <span ><input className="input-width  input-position"
                      onChange={(e) => {onChange2(e,item.id) 
                        F_CommentList(e.target.name,item.id) }} type="text" placeholder="댓글달기.." name={i} ></input> </span> 
                    
                    <span><input  key={i} className="  input-margin w-btn w-btn-pink" type="submit" name={i} value="게시"
                    onClick={(e)=>{
                      onSubmit(i,item.id)
                      commentArea(e,i)
                      modeChange('댓글업데이트')
                      console.log(item.id)
                      // 게시물분류(e,item.id)
                    
                     

                    
                        
                    }}></input></span>
              
                    </form>
                    
                  
                  
              
                  
                
                  </div> 
                
              
                    
                  </div>
            
              )
              })
            }         
        
                </div>
            }
          
        
            export default Feed
