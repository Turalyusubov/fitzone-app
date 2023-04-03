import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assets/icons/Logo.jpg'

export default function Navbar() {
    return (
        <nav className='px-6 py-6 flex items-center gap-20'>
            <Link to='/' className='flex items-center gap-2'>
                <img className='w-14' src={Logo} alt='navbar logo' />
            </Link>
            <div className="nav-menu flex gap-10">
                <Link to='/'>Home</Link>
                <Link to='/'>Exercises</Link>
            </div>
        </nav>
    )
}
