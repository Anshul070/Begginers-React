import React, { useContext, useState } from 'react'
import HomeCard from './HomeCard'
import { userContext } from '../utils/Context'

const Home = () => {
  const [users , setUsers] = useContext(userContext) 


  function handleLike(userIndex) {
    setUsers(prev => prev.map((user,index)=> index===userIndex ? {...user, like: !user.like , dislike: user.dislike ? !user.dislike : user.dislike} : user))
  }

  function handleDisLike(userIndex) {
    setUsers(prev => prev.map((user,index)=> index===userIndex ? {...user, dislike: !user.dislike ,like: user.like ? !user.like : user.like} : user))
  }

  return (
    <div className='text-zinc-100 flex flex-col items-center p-5 gap-5'>
        <h1 className='text-4xl text-zinc-800 font-semibold'>Tweets</h1>
        {users.map((user , index) => <HomeCard key={index} user={user} handleDisLike={handleDisLike} handleLike={handleLike} userIndex={index}/>)}
    </div>
  )
}

export default Home