import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 space-x-5 mx-auto text-center py-3 h-110 bg-slate-300 sticky shadow">
        <div className='my-auto font-serif font-extrabold text-xl'><span className='text-2xl text-indigo-600'>E</span>-Commerce</div>
        <div className="col-span-3 order-last md:-order-none mt-5 md:mt-0 font-semibold">
            <Link className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' to='/'>Home</Link>
            <Link className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' to='products'>Products</Link>
            <Link className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' to='about'>About</Link>
            <Link className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' to='contact'>Contact</Link>
        </div>
        <div>
            <Link className='hover:bg-slate-400 rounded-full p-2 transition-all' to='/login'>Login</Link>
            <Link className='ml-5 bg-indigo-700 rounded-full p-2 text-yellow-50 hover:bg-indigo-500 transition-all' to='http://www.google.com'>Sign up</Link>
        </div>
     </div>
  )
}
