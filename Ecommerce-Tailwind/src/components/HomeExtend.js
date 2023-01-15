import React, {Component} from 'react';

export const HomeExtend = () => {
  return (
    <div className='p-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 place-items-center mx-auto md:space-x-2 text-center bg-white'>
        <div className=' space-y-2 pb-3 bg-slate-200 rounded-md md:mx-auto text-center shadow-md'>
            <img className='w-full rounded-t-md' src='https://petapixel.com/assets/uploads/2017/03/product1.jpeg' alt='product#1'/>
            <h3 className='font-extrabold'>Item #1</h3>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
            <p className='font-extrabold'>$99.99</p>
            <button className='text-center text-slate-50 font-extrabold bg-slate-900 hover:scale-110 hover:bg-slate-300 hover:text-gray-700 transition-all w-fit mx-auto rounded-full py-2 px-5'>View Item</button>
        </div>
        <div className=' space-y-2 pb-3 bg-slate-200 rounded-md md:mx-auto text-center shadow-md'>
            <img className='w-full rounded-t-md' src='https://petapixel.com/assets/uploads/2017/03/product1.jpeg' alt='product#2'/>
            <h3 className='font-extrabold'>Item #2</h3>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
            <p className='font-extrabold'>$99.99</p>
            <button className='text-center text-slate-50 font-extrabold bg-slate-900 hover:scale-110 hover:bg-slate-300 hover:text-gray-700 transition-all w-fit mx-auto rounded-full py-2 px-5'>View Item</button>
        </div>
        <div className=' space-y-2 pb-3 bg-slate-200 rounded-md md:mx-auto text-center shadow-md'>
            <img className='w-ful rounded-t-md' src='https://petapixel.com/assets/uploads/2017/03/product1.jpeg' alt='product#3'/>
            <h3 className='font-extrabold'>Item #3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
            <p className='font-extrabold'>$99.99</p>
            <button className='text-center text-slate-50 font-extrabold bg-slate-900 hover:scale-110 hover:bg-slate-300 hover:text-gray-700 transition-all w-fit mx-auto rounded-full py-2 px-5'>View Item</button>
        </div>
    </div>
  )
}
