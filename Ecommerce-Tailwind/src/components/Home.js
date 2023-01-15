import React from 'react';

export const Home = () => {
  return (
    <div className='flex flex-col justify-center align-middle mx-auto text-center bg-indigo-600'>
        <h1 className='text-center text-5xl mt-40'>Big Sale for November</h1>
        <h3 className='text-center my-8 text-xl text-slate-50 font-medium'>Enjoy our new collection for winter</h3>
        <button className='text-center text-gray-900 font-extrabold mb-40 bg-slate-50 hover:translate-y-2.5 hover:scale-110 hover:bg-slate-300 hover:text-gray-700 transition-all w-fit mx-auto rounded-full py-3 px-8'>Shop Now !!</button>
    </div>
  )
}
