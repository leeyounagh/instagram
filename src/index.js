import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
// import {Provider} from 'react-redux'
// import { createStore } from 'redux';



// let 댓글창 =false;

// function reducer (state=댓글창,action){
//   if(action.type==='성공'){
    
   
//   } 
//   else{
//     return state
//   }
 
// }
// let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
 
 <App />
 
 

  
   
   
   
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
