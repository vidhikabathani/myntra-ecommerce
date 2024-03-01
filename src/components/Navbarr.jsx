import React from 'react'
import '../css/style.css'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbarr() {
    return (
        <div>
            <div id='nav'>
                <NavLink><img id='logo' alt='' /></NavLink>
                <Link to='/' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>Home</Link>
                <Link to='/Men ' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>Men</Link>
                <Link to='/Women' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>Women</Link>
                <Link to='/Kids' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>kids</Link>
                <Link to='/Beauty' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>beauty</Link>
                <Link to='/Studio' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>studio</Link>
                <input placeholder='Search for products, brand and more' className='input ps-3 pt-1 pb-2'></input>
                <Link to='/Login' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>Profile</Link>
                <Link to='/Signup' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>Signup</Link>
                <Link to='/Studio' id='navbar' className='fw-semibold text-uppercase fw-bolder text-decoration-none text-dark'>studio</Link>
            </div>
        </div>
    )
}

export default Navbarr