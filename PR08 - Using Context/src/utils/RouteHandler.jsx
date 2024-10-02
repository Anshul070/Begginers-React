import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users'
import UserInfo from '../models/UserInfo'


const RouteHandler = () =>{ 

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} >
        <Route path='/users/:name' element={<UserInfo />} />
        </Route>
    </Routes>
    </>
  )
}

export default RouteHandler