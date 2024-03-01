import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sign_up } from '../redux/Action'

function SignUp() {
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let dispatch=useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            name, email, password
        }
        dispatch(sign_up(user));
        setEmail("")
        setName("")
        setPassword("")
    }

    return (
        <div className='container py-5'>
            <form action="" className='py-5'>
                <input type="text" placeholder='Enter Username' className='p-2' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="email" placeholder='Enter Email' className='p-2' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="password" placeholder='Enter Password' className='p-2' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <input type="submit" onClick={handleSubmit} className='py-2 px-4 border-rounded'/>
            </form>
        </div>
    )
}

export default SignUp