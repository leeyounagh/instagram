import React from "react";
import Stories from 'react-insta-stories';
import './Update.scss'
//npm install node-sass
function Update(){
  
  const story =[
    "https://i.pinimg.com/originals/bf/e3/2e/bfe32e1bf43a0811cbc0421089b4ecf0.gif",
    "https://static.news.zumst.com/images/29/2018/10/16/e2abbb2e78894ec2bb116bce86873c73.jpg" ,
    "https://i.pinimg.com/originals/58/9a/fd/589afd5ee03072a76b51c0d0f7a858a2.gif"
  ]
    return (
      <Stories
			stories={story}
      loop={true}
			defaultInterval={1500}
			width={1500}
			height={1800}
      isPaused={true}
		/>
    )
}

export default Update