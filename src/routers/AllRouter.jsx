import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Women from '../pages/Women'
import Men from '../pages/Men'
import  Kids  from '../pages/Kids'
import Home from '../pages/Home'
import Beauty from '../pages/Beauty'
import Studio from '../pages/Studio'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Singlepage from '../pages/Singlepage'
import Cart from '../pages/Cart'

function AllRouter() {
    return (
        <div>
            <Routes>
                <Route path='/Men' element={<Men/>}></Route>
                <Route path='/Women' element={<Women/>}></Route>
                <Route path='/Kids' element={<Kids/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<SignUp/>}></Route>
                <Route path='/Beauty' element={<Beauty/>}></Route>
                <Route path='/Studio' element={<Studio/>}></Route>
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/product/:id' element={<Singlepage/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRouter