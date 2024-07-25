"use client"

import {data} from "autoprefixer";
import React, { useEffect , useState } from 'react'
import axios from 'axios';

const page = ({params}) => {
  const {id} = params;
  const [users, setusers] = useState("")
  const getUsers = async () =>{
   const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
  //  console.log(data) //only return array
    setusers(data.username)
  // console.log(users) // array me store hui value retun hogi
  }

  useEffect(() => {         //<a href = {`/${e.id}} use effect k liye hi use hua hai
    getUsers()
  }, [])
  return (
    <> {users}</>
  )
}

export default page