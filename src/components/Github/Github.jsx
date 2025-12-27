import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/AyushSahu143')
    //   .then(res => res.json())
    //   .then(data => setData(data))
    //   .catch(err => console.error(err)) 
    // }, [])

    // More Optimized and fast way to load data from api
    const data = useLoaderData()
    
  return (
    <div className='bg-gray-600 text-3xl text-white p-4 m-4 text-center flex flex-col items-center'>
        <div className='p-2'>Github Profile: {data.name}</div>
        <div className='p-2 w-80'><img className='w-48 h-48 rounded-full object-cover mx-auto' src="https://avatars.githubusercontent.com/u/187085010?v=4" alt="Github pfp" /></div>
        <div className='p-2'>Github followers: {data.followers}</div>
        <div className='text-xl'> {data.bio} </div> </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AyushSahu143')
    try {
        return response.json()
    } catch (error) {
        console.error(error);
    }
}