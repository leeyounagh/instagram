import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux';



let 모달창값 = false

function reducer (state=모달창값,action){
  
  if(action.type==='모달실행'){
       
    state =true;
    return state
  }
  
 
 
 
}
let store = createStore(reducer)

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
