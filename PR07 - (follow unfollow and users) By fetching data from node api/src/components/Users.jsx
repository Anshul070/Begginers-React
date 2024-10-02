import React, { useState } from 'react'
import UserModel from '../models/UserModel';


const Users = ({users , setUsers}) => {
  function handleTap(userIndex){
    setUsers(prev => prev.map((user, index)=> index===userIndex? {...user, tap:!user.tap} : {...user, tap:false}))
    console.log(users)
  }
  return (
    <div className='text-zinc-100 flex flex-col items-center p-5 gap-5'>
        <h1 className='text-4xl text-zinc-800 font-semibold'>Users</h1>
      <div className='flex flex-wrap gap-5 max-w-4xl justify-center'>
      {users.map((user , index) => <UserModel key={index} index={index} user={user} handleTap={handleTap}/>)}
      {/* <UserModel user={user}/> */}
      </div>
    </div>
  )
}

export default Users