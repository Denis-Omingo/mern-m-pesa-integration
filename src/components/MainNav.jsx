import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <div className="w-full flex items-center justify-between mx-auto px-4 py-4 max-w-screen-lg">
        <div className="text-white">M-PESA <small>Payment</small></div>
        <div className="flex items-center justify-between space-x-4">
            <Link className='text-white hover:text-green-900' to='/'>Home</Link>
            <Link className='text-white hover:text-green-900' to='/about'>About</Link>
            <Link className='text-white hover:text-green-900' to='/sign-in'>Sign In</Link>
        </div>
        
        </div>
  )
}

export default MainNav
