'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [users , setusers] = useState([])
  const getUser = async () => {

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
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
      {/* <button onClick={getUser} className='bg-green-300 rounded px-4 py-2 m-9'>
       Get Data
      </button> */}
      <div className='bg-slate-500 w-full p-8'>
              {users.map((e) => {
                    return  <p>{e.username} -- <a href={`/${e.id}`}>Explore</a></p>
              })}
      </div>
    </>
  )
}

export default page
