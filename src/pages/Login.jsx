import axios from 'axios'
import React, { useState } from 'react'
import { login } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()

    const handleLogin = async (email, password) => {
        let user = await axios.get(`http://localhost:3001/user?email=${email}&password=${password}`)
        dispatch(login(...user.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email, password
        }
        handleLogin(user)
        console.log(user)
        setPassword("")
        setEmail("")
    }

    return (
        <div className='container py-5'>
            <form action="">
            <input type="email" placeholder='Enter Email' className='p-2' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
            <input type="password" placeholder='Enter password' className='p-2' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
            <button id='btn' onClick={handleSubmit} className='py-2 px-4 border-rounded'> Login</button><br />
            </form>
        </div>
    )
}

export default Login