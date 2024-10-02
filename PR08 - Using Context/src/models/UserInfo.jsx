import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../utils/Context';

function UserInfo() {
  const data = useContext(userContext) 
    const {name} = useParams();
    const user = data[0].find(user => user.name === name);
  return (
    <div>
        <h2 className={`font-semibold text-xl`}>{user.name}</h2>
              <h4 className={`text-sm opacity-80`}>{user.username}</h4>
              <h4 className={`transition-all delay-500 text-xs opacity-80 `}>{user.bio}</h4>
    </div>
  )
}

export default UserInfo