import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Add from '../components/Add'
import Electronics from '../components/Electronics'
import Cloths from '../components/Cloths'
import Accessories from '../components/Jewelery'
import SideBar from '../components/SideBar'
import Wrapper from '../components/Wrapper'
import Remove from '../components/Remove'
import Edit from '../components/Edit'
import EditProduct from '../components/EditProduct'

const RouteHandler = () => {
  return (
    <Routes>
      <Route path='/' element={<Wrapper/>}>
      <Route path='/' element={<Home />} />
      <Route path='/electronics' element={<Electronics />}/>
      <Route path='/cloths/:gender' element={<Cloths />}/>
      <Route path='/accessories' element={<Accessories />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='/edit/:id' element={<EditProduct />}/>
      <Route path='/remove' element={<Remove />}/>
      </Route>
    </Routes>
  )
}

export default RouteHandler