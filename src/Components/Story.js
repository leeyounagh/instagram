import React, { useEffect, useState } from "react";
import "./Story.css"

const Story = () =>{
   
    const [모달창,모달창변경]=useState(false)
    const [id,id변경] =useState(0)
   
  
    useEffect(()=>{
        
        let ModalChange = setTimeout(()=>{
            모달창변경(false)
            return (()=>{
                clearTimeout(ModalChange)
            })
        },3000) 
    },[모달창])

    const 모달구현= ()=>{

        if(id===1&&모달창==true){
            return   <span><div className="Modal-style">오늘 기분안좋으니 건들지마!</div>
         </span>
        }else if(id===2&&모달창==true){
            return  <span><div className="Modal-style2">오늘따라 더귀엽다..</div>
            </span>
        }
        
    }

    return <div className="story text-color">
        <span><img className="Story-size story-position text-color"alt="세일러" src="https://i.pinimg.com/236x/56/ff/9c/56ff9c6c6373826f95d72ec8f92d7b6c.jpg"
        onClick={(e)=>{
            e.preventDefault()
            모달창변경(true)
            id변경(1)
            
        }}></img></span>
        <span ><img className="Story-size story-position text-color" alt="카제하야"
        src="https://i.pinimg.com/564x/6d/3f/8b/6d3f8b9ca4b81f8954e5ffc33e252217.jpg"
        onClick={(e)=>{
            e.preventDefault()
            모달창변경(true)
            id변경(2)
            console.log(id)
        }}></img></span>
        <span><button>+</button></span>
       
        {모달구현()}
        
       
        
        </div>

        
             
}      

export default Story