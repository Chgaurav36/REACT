
'use client'


import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = ({params}) => {
    const {id} = params;
    const [users , setusers] = useState([])
    const getUser = async () => {
  
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        const data  = response.data;
        console.log(data);
        setusers(data);
      } catch (error) {
        console.log(error);
      }
      
    }
    useEffect(()  =>{
      getUser();
    },[])
  return (
    <>
    {JSON.stringify(users)}
    </>
  )
}

export default page
