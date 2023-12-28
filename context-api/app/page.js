'use client'
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const page = () => {
  const user = useContext(MyContext);
  return (
    <div className='bg-green-400 p-3'>
      {user}
    </div>
  )
}

export default page
