import React, { useState,useEffect } from 'react'
import Follower from './Components/Follower';
import Pagination from "./Components/Pagination";
const url = `https://api.github.com/users/john-smilga/followers?per_page=100`

export const useFetch= () => {
      const [loading,setLoading] =useState(true)
      const [data,setData]= useState([])

      const getProducts =async () => {
          const response = await fetch(url)
          const data = await response.json()
          
          setData(Pagination(data))
          setLoading(false)
      }
    useEffect(()=>{
        getProducts()
    },[])
 
   return {loading,data} 
}