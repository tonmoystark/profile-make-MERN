import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-rose-600 flex justify-between items-center px-10 py-6'>
        <header>MERN</header>
        <div className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/create-profiles">Create Profile</Link>
        </div>
    </nav>
  )
}

export default NavBar