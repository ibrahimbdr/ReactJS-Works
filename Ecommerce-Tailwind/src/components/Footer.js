import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPinterestSquare, FaTumblrSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='w-full bg-gray-800 shadow'>
        <div className='flex justify-center p-10 space-x-3 text-white text-2xl'>
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
        <FaPinterestSquare />
        <FaTumblrSquare />
        </div>
        <div className='w-full bg-gray-900 shadow py-20 space-x-1 text-white text-xl text-center'>
            <h5>All Rights are Reserved to &copy; IBadr 2022</h5>
        </div>
    </div>
  )
}
