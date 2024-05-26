import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import UsersTab from '../Pages/UsersTab/UsersTab';
import RequestsTab from '../Pages/RequestsTab/RequestsTab';
import Resource from '../Pages/AddResource/Resource';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/NxtWave_Assignment' element={<Home/>}></Route>
        <Route path='/NxtWave_Assignment/resource' element={<Resource/>}></Route>
        <Route path='/NxtWave_Assignment/users' element={<UsersTab/>}></Route>
        <Route path='/NxtWave_Assignment/requests' element={<RequestsTab/>}></Route>
    </Routes>
  )
}

export default AllRoutes
