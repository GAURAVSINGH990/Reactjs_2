'use client'
import React, { useState } from 'react'

const  page = (e) => {
  const [title, setTitle] = useState("")
  return(
    <>
    <form>
      <h1 className='font-bold text-2xl mt-2 ml-0  p-4'>Enter Your Name </h1>
      <input type ='text' className='bg-gray-800 text-white font-serif font-bold text-xl rounded-xl ml-3 p-3'
      value = {title}
      onChange={(e)=>{
      setTitle(e.target.value)
      console.log(title)
      }
    }   
      />
    </form>
    </>
  )
}

export default  page 