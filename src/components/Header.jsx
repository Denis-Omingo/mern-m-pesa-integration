import React from 'react'
import MainNav from './MainNav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className="border-b-2 border-green-500 bg-green-500 min-h-[3rem] mx-auto shadow-xl">

    <div className="block md:hidden">
      <MobileNav />
    </div>
  
    <div className="hidden md:block">
      <MainNav />
    </div>
  </div>
  
  )
}

export default Header
