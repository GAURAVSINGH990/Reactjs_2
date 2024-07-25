'use client'
/*----Two Way Binding--------
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
*/

/*----- Simple Routing->Contact folder <--Link----
import React from 'react'

const page = () => {
  return (
    <>
    <h1 className ="text-2xl font-bold flex justify-between">This is Home page</h1>
    <a href = "/Contact" className='underline  font-bold'>Contact</a>
</>
  )
}

export default page
*/

import React, { useEffect , useState } from 'react'
import axios from 'axios';

const page = () => {
  const [users, setusers] = useState([])
  const getUsers = async () =>{
   const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users")
  //  console.log(data) //only return array
  setusers(data)
  // console.log(users) // array me store hui value retun hogi
  }

  useEffect(() => {         //<a href = {`/${e.id}} use effect k liye hi use hua hai
    getUsers()
  }, [])
  
  return (
    <>
    <button onClick={getUsers} className='bg-green-600 text-white font-bold rounded px-4 py-2 '>Get Data</button>
    <div className='p-8 bg-black-700 mt-5'></div>
    <ol>
      {users.map((e)=>{
        return <li>{e.username} --- <a href = {`/${e.id}`}>Explore</a></li>
      })}
    </ol>
    </>
  )
}

export default page