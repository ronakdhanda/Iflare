import React from 'react'
// import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import image from "../../assets/if.jpg"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 text-white w-full p-10'>
        <div className="flex flex-shrink-0 items-center">
          <img className='h-[70px] rounded-xl' src={image} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-black'>
            {/* <a className=' hover:text-blue-400' href="https://x.com/home"><FaTwitter/></a> */}
            <a className=' hover:text-pink-800' href="https://www.instagram.com/iflare.co.in?igsh=MTdqdmNxY3U4cHZzaA=="><FaInstagram/></a>
        </div>
    </nav>  
  )
}

export default Navbar