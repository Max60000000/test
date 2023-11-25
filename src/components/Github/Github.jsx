import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
   const data= useLoaderData([])
  return (
    <div>
    <img src={data.avatar_url} alt="git pic" />
      <h3>Github:{data.followers}</h3>
    </div>
    
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const res= await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}
