'use client'
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import PageLinks from "./PageLinks";
import { useEffect, useState } from "react";




const Header = () => {
  const [scrollStart, setScrollStart] = useState(false)


  const handleScroll = () => {
    const scrolled = window.scrollY;
    scrolled > 10 ? setScrollStart(true) : setScrollStart(false);
  }

  window.addEventListener('scroll', handleScroll);

  console.log(window)
  // return () => window.removeEventListener('scroll', handleScroll)



  return (
    <div className={`${scrollStart ? "bg-secondary" : "bg-transparent"} duration-500 fixed w-full py-[20px] text-body`} >
      <div className=" container flex items-center justify-between">
        {/* Logo */}
        <div className="text-[22px] font-bold">
          <span className="text-primary ">Easy</span>
          <span className="">Goodies</span>
        </div>

        {/* PageLinks */}
        <PageLinks />



        {/* Cart and Search */}
        <div className="flex gap-7">
          <FaShoppingCart />
          <FaSearch />
        </div>

      </div>
    </div >
  )
}

export default Header
