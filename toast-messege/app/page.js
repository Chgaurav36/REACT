'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const login = () => {
  toast.success('🦄 Login Successful!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
const page = () => {
  return (
    <div>
    <button className='bg-green-400 px-6 py-2 rounded mx-6 my-6'
    onClick={login}>
      Login !
    </button>
      <ToastContainer/>
    </div>
  )
}

export default page
