import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { combineReducers,createStore } from 'redux';



let 왼쪽버튼 = false;
let 오른쪽버튼 =true;
let commChecked =false;

function reducer (state=왼쪽버튼,action){
  if(action.type ==='첫페이지'){
    state =false;
    return state
  }else if(action.type ==='왼쪽버튼활성화'){
    state =true;
    return state
  }else{
    return state
  }
 
}
function reducer2 (state=오른쪽버튼,action){
  if(action.type ==='마지막페이지'){
    state =false;
    return state
  }else if(action.type ==='오른쪽버튼활성화'){
    state =true;
    return state
  }else{
    return state
  }
 
  
}

let store =createStore(combineReducers({reducer,reducer2}))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<Provider store={store}>
<App />

</Provider>



 
 
 

  
   
   
   
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
