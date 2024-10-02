import React from 'react'
import { useParams } from 'react-router-dom'

function UserInfo({data}) {
    const {name} = useParams();
    const user = data.find(user => user.name === name);
    console.log(user)
  return (
    <div>
        <h2 className={`font-semibold text-xl`}>{user.name}</h2>
              <h4 className={`text-sm opacity-80`}>{user.username}</h4>
              <h4 className={`transition-all delay-500 text-xs opacity-80 `}>{user.bio}</h4>
    </div>
  )
}

export default UserInfo