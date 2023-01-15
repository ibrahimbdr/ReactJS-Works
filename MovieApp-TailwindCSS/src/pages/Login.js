import React from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div>
    <div className='min-h-screen bg-gray-500 flex justify-center items-center'>
        <form className='w-96 bg-gray-400 p-16'>
        <div>
            <label htmlFor='username' className='font-bold font-roboto text-xl'>Username</label>
            <input type='text' name="username" id="username"  className='w-full h-8 rounded-md p-2' placeholder='Username'/>
        </div>
        <div className='mt-8'>
            <label htmlFor='password' className='font-bold font-roboto text-xl'>Password</label>
            <input type='password' name="password" id="password" className='w-full h-8 rounded-md p-2'/>
        </div>
        </form>
    </div>
    </div>
  )
}
