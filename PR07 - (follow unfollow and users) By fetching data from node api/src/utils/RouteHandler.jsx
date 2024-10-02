import React , {useState , useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users'
import UserInfo from '../models/UserInfo'

const RouteHandler = () =>{ 
  const [users , setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/").then(response => response.json()).then(data => setUsers(data));
  }, [])


  return (
    <>
    <Routes>
        <Route path="/" element={<Home setUsers={setUsers} users={users}/>} />
        <Route path="/users" element={<Users users={users} setUsers={setUsers}/>} >
        <Route path='/users/:name' element={<UserInfo data={users} />} />
        </Route>
    </Routes>
    </>
  )
}

export default RouteHandler