import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
            <nav className='flex justify-between p-2 bg-slate-400 bg-opacity-60 sticky'>
                <div className='leftNav flex items-center'>
                    <span className='font-Cinzel text-3xl text-white font-bold'><Link to='/'>Movie<span className='text-black'>Theater</span></Link></span>
                    <ul className='flex ml-5 text-lg font-Roboto text-slate-200 font-semibold'>
                        <li className='mr-2'><Link to='/movies'>Movies</Link></li>
                        <li><Link to='/favmovies'>FavoriteMovies</Link></li>
                    </ul>
                </div>
                <span className='flex items-center'>
                    <Link to="/login" className='font-Roboto text-md text-stale-800 font-semibold bg-slate-300 hover:text-slate-400 transition-all px-4 py-2 rounded-md mr-2'>Sign In</Link>
                    <Link className='font-Roboto text-md text-slate-50 font-semibold bg-slate-900 hover:bg-slate-400 transition-all px-4 py-2 rounded-md'>Sign Up</Link>
                </span>
            </nav>
  )
}
