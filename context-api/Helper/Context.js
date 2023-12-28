'use client'
import React, { createContext }from 'react'
export const MyContext  = createContext();


const Context = ({children}) => {

    const userName = "Gaurav Chaurasia";
  return (
    <div>
        <MyContext.Provider value={userName}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context
