import React, { useState } from 'react';
import './Search.scss'
import UserInformation from './UserInfomation';

const Search = () => {
              const [searchTerm,setSearchTerm]= useState('')
              
        const Info = UserInformation.filter((val)=>{
            if(searchTerm==""){
                return null
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                     return val
            }
        }).map((data)=>{
            return (
                     <div className='search-size margin-right'>
                            <span ><img className='searchImg' alt='사용자사진' src={data.avatar_url} 
                    ></img></span>
                   <span className='margin-right'>{data.name}</span>  
                   <span  className='margin-right'>{data.age}</span> 
                   <span  className='margin-right'>{data.country}</span>  
               
                     </div>
                
            )

        })
           

    
    return (
        <div>
           <span className='Search-position'>
          <span  ><input className='search-input' type="text" placeholder='사용자 검색...'
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}></input></span>
        </span>
        <div className='search-border'>
            {Info}
        </div>
        </div>
        
       
       
    );
};

export default Search;