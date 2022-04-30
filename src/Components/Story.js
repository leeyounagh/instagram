import React, { useEffect, useState,useRef } from "react";
import Stories from 'react-insta-stories';
import '@fortawesome/fontawesome-free/js/all.js';

import "./Story.css"
import { useDispatch, useSelector } from "react-redux";

const Story = (props) =>{
   
    
    const [id,id변경] =useState(0)
    let state=useSelector((state)=>state.reducer)
    let rightstate=useSelector((state)=>state.reducer2)
     let dispatch=useDispatch();
    
    const story1 =[
        {
            url:"https://i.pinimg.com/564x/83/e7/4d/83e74dc279e8d65c2bd2ab163db5c800.jpg" ,
            duration: 3000,
            header: {
                heading: '한소희',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/100/100',
                
            },
            
           
        },
        
        {
            url:"https://i.pinimg.com/564x/e3/14/17/e31417a233f7b67e4e6f2e65f5691150.jpg" ,
            duration: 3000,
            header: {
                heading: '아이유',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/99/99',
            },
        },
        {
            url:"https://i.pinimg.com/originals/58/9a/fd/589afd5ee03072a76b51c0d0f7a858a2.gif" ,
            duration: 3000,
            header: {
                heading: '사쿠라',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/98/98',
            },
        },
        {
            url: "https://i.pinimg.com/564x/39/cd/86/39cd86f78ecaf843f22452b078dd8c79.jpg" ,
            duration: 3000,
            header: {
                heading: '현진',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/97/97',
            },
        },
        {
            url: "https://i.pinimg.com/564x/3f/53/81/3f53818c2b048f0d69de40bb37012d00.jpg",
            duration: 3000,
            header: {
                heading: '육성재',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/96/96',
            },
        },
        {
            url:"https://i.pinimg.com/originals/2b/79/08/2b790893c2c3757152466a011bf111ad.gif",
            duration: 3000,
            header: {
                heading: '김민주',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/95/95',
            },
        },
        
        {
            url: "https://i.pinimg.com/564x/e4/8d/81/e48d81e9d6d8dee37dbdeeedcd144a5a.jpg",
            duration: 3000,
            header: {
                heading: '송강',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/94/94',
            },
        },
        {
            url: "https://i.pinimg.com/736x/14/ff/13/14ff1354662ad9ec89e34a63b19077be.jpg",
            duration: 3000,
            header: {
                heading: '태리태리',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/93/93',
            },
           
        },
        
        {
            url:"https://i.pinimg.com/564x/80/f3/87/80f387b1d2474a9fd93c206524f6cf8c.jpg",
            duration: 3000,
            header: {
                heading: '강혜원',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/92/92',
            },
        },
        {
            url:"https://i.pinimg.com/originals/4c/c7/a4/4cc7a4850744cc360c67d9052d911aba.gif",
            duration: 3000,
            header: {
                heading: '장원영',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/91/91',
            },
        },
  
      ]
     
      const storyRendering = ()=>{
          
          return <div className="position2"><Stories 	stories={story1} loop={false}
          defaultInterval={1500}
          width={400}
          height={500}
    isPaused={false} ></Stories></div> 
      }

       const StoryStart = ()=>{
           if(id==1){    
          return <div className="story-index1 story-position2 position2"> 
         <Stories 	stories={story1} loop={false}
          defaultInterval={1500}
          width={830}
          height={600}
         isPaused={false}  onAllStoriesEnd={(s, st) => id변경(0)}
         storyStyles ></Stories>
          </div>  
           }
       }
       const modal띠우기 = ()=>{
           return <div>{StoryStart()}</div>
       }

       const [x좌표,x좌표변경]=useState(0);
       const Story정렬=()=>{

        const URl = [{url:"https://i.pinimg.com/564x/a3/a2/05/a3a205d48c76bb90e3fc1f184bcd6aaa.jpg",id:0},
       {url:"https://i.pinimg.com/564x/78/e5/0a/78e50aab74b86e4cbe39c9e7936a0936.jpg",id:1} ,
        {url:"https://pds.joins.com/news/component/zenithnews/201810/21/121213_113103_5537.jpg",id:2},
        {url:"https://i.pinimg.com/564x/2f/a1/66/2fa166a576d8bd8be538d120f3691083.jpg",id:3},
        {url:"https://1.bp.blogspot.com/-AQ5c_9Zk7jI/X8JEXmoQT8I/AAAAAAAIXIk/eIZVVkFzM_QyLeqvMYO5An8TXLNGDy-iQCLcBGAsYHQ/s1600/2.png",id:4},
        {url:"https://image.xportsnews.com/contents/images/upload/article/2020/0525/mb_1590364860708381.jpg",id:5},
        {url:"https://media.bunjang.co.kr/product/142204607_1_1612316421_w%7Bres%7D.jpg",id:6},
       {url:"https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjdfNzAg/MDAxNjE5NTA3MDEzMjY1.TMD7X1PvmS9f2_58C5op-nRPKhu0FgT3jJVRKBeYuXsg.vgTa6AyYVknWY9kQtexa8zgWT4yeg-M64k7RcXRWjr4g.JPEG.redvelvet7100/178578889%EF%BC%BF1733145000213013%EF%BC%BF6016091617024208451%EF%BC%BFn.jpg?type=w800",id:7} ,
        {url:"https://i.pinimg.com/564x/62/0f/07/620f078a5eb42f61e707fb7e6d1c56a5.jpg",id:8},
        {url:"https://i.pinimg.com/564x/1e/61/4c/1e614ce36a7e31c3eb987be5838c4c5f.jpg",id:9},
        {url:"https://i.pinimg.com/564x/29/31/88/293188f9b89365eceb41b5f86db95946.jpg",id:10},
        {url:"https://i.pinimg.com/564x/d4/2c/79/d42c7970d5f25ce8f5bc759d07de2414.jpg",id:11},
        {url:"https://i.pinimg.com/564x/32/78/0c/32780c8244bc89d3a361dd091e23503d.jpg",id:12},
        {url:"https://i.pinimg.com/564x/4c/79/4e/4c794e2391967e9e32b6b844e05d4b1b.jpg",id:13},
        {url:"https://i.pinimg.com/564x/10/4c/fe/104cfea46f00d67f2c29aa574d71b496.jpg",id:15},
        {url:"https://i.pinimg.com/564x/90/c3/eb/90c3eb9e01a9bf7eda75c2abfe11fb01.jpg",id:16},
        {url:"https://i.pinimg.com/originals/ab/8b/a5/ab8ba5e4c07e56aaed6f4af481f734b8.gif",id:17},
       {url: "https://i.pinimg.com/564x/58/03/55/580355e96b3eaf0cf16bfcad04c17f4c.jpg",id:18},
       {url:"https://i.pinimg.com/736x/f0/ab/90/f0ab90fa44035887459f24f23a96c1f1.jpg",id:19} ,
       {url:"https://i.pinimg.com/736x/26/af/f9/26aff9745ddda586ed1e3c20a97acee6.jpg",id:20} ,
        {url:"https://i.pinimg.com/564x/ee/c1/f7/eec1f7ac6ab2d877d66155728aed2d5c.jpg",id:21},
        {url:"https://i.pinimg.com/736x/15/76/32/15763259478077b9ef51e8863309d9af.jpg",id:21},
       {url:"https://i.pinimg.com/736x/20/30/7f/20307fcb5d6e436a6057bd4bea11f9d5.jpg",id:22},
       {url: "https://i.pinimg.com/736x/87/44/d5/8744d5c7701727cd991c79a6b9af4596.jpg",id:23},
       {url:"https://i.pinimg.com/736x/0c/54/82/0c54827eb14cb9dd20382214e68e21ac.jpg",id:24} ,
        {url:"https://i.pinimg.com/736x/25/0b/82/250b82315412c87a0a06a04b8d64b74c.jpg",id:25},
        {url:"https://i.pinimg.com/564x/15/83/f0/1583f069c408d3978c0f8bd8c22a844a.jpg",id:26},
       {url: "https://i.pinimg.com/564x/5e/71/0b/5e710b37a3de23b37a12096add678e41.jpg",id:27},
       {url: "https://i.pinimg.com/564x/ea/b2/92/eab29269b1fe03462ecfb58e390267f4.jpg",id:28},
       {url: "https://i.pinimg.com/564x/58/a9/ce/58a9ce414d9e8cfe8edb3d4e664a8a9b.jpg",id:29},

       {url: "https://i.pinimg.com/564x/9a/a7/79/9aa77967d2b66532d9d2853b6808f33a.jpg",id:30}



             


        ]
        const imageControlLeft =()=>{
            if(x좌표===0){
                x좌표변경(0)  
                dispatch({type:'첫페이지'})  
                dispatch({type:'오른쪽버튼활성화'})   
                
            }else{
                x좌표변경(x좌표+500)
                dispatch({type:'왼쪽버튼활성화'}) 
                dispatch({type:'오른쪽버튼활성화'})   
            }
        }

        const imageControlRight =()=>{
            if(x좌표===-2000){
                x좌표변경(-2000) 
                dispatch({type:'왼쪽버튼활성화'})
                dispatch({type:'마지막페이지'})  
                  
            }
            else{
                x좌표변경(x좌표-500)
                dispatch({type:'오른쪽버튼활성화'})
                dispatch({type:'왼쪽버튼활성화'}) 
            }
        }
     
           
            
         const StoryMove={
             position:'relative',
             top:'30px',
             left:`${x좌표}px`,
             transition:'1.0s all ease-out'
         }
        
       
        return <div>
          
               <div className="story text-color story-box position story-border">
               <button className="Story-button1  smooth ibutton-size" style={{display:state?'block':'none'}}onClick={()=>{
               imageControlLeft() 
               console.log(x좌표)
            }}><i class="fa-solid fa-chevron-left "></i></button>
            
            <span >
               
              {
                    URl.map((item)=>{ return(
                        <span >
                       <span ><img className="  Story-size Story-position text-color" style={StoryMove}alt="육성재" src={item.url}
                     onClick={(e)=>{
                 e.preventDefault()
              
                 id변경(1)
                 storyRendering()
               
              }}></img></span>
                        </span>
                        
                    )})
                                  
                        
                    
       }
     
             </span>   
            
             <button className="Story-button  smooth ibutton-size" style={{display:rightstate?'block':'none'}}  onClick={()=>{
                imageControlRight()
                console.log(x좌표)
            }}><i class=" fa-solid fa-chevron-right"></i></button>
        
        </div>
        
        </div>
       
    }
    return <div>{id===0?<div>{Story정렬()}</div>:id===1?<div>{modal띠우기()}</div>:null} </div>

        
             
}      


export default Story
