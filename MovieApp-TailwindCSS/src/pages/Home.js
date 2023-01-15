import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <div className='min-h-screen bg-[url("https://i.ytimg.com/vi/f9ydfcm5UTM/maxresdefault.jpg")] bg-cover'>
            
        </div>
        <div className='flex bg-slate-300 pl-10 pr-10 pt-20 pb-20 font-Roboto'>
            <div className='flex flex-col justify-center pl-4 pr-4'>
                <h2 className='text-3xl font-extrabold text-slate-800'>
                    Lorem ipsum dolor.  
                </h2>
                <h3 className='text-xl font-semibold text-slate-800'>
                    Lorem ipsum dolor sit, amet consectetur.
                </h3>
                <p className='text-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit habitant, felis mauris eget.
                </p>
            </div>
            <div>
                <img src='https://i.ibb.co/hdkPQvH/Mvp-XRyewk3-Ub-B8ok-C5s-Z2i-transformed.png' className='h-80' alt='Lorem'/>
            </div>
        </div>
        <div className='flex pt-20 pb-20 bg-slate-800 font-Roboto'>
            <div>
                <img src='https://i.ibb.co/hdkPQvH/Mvp-XRyewk3-Ub-B8ok-C5s-Z2i-transformed.png' className='h-80' alt='Lorem'/>
            </div>
            <div className='flex flex-col justify-center pl-4 pr-4'>
                <h2 className='text-3xl font-extrabold text-slate-300'>
                    Lorem ipsum dolor.  
                </h2>
                <h3 className='text-xl font-semibold text-slate-300'>
                    Lorem ipsum dolor sit, amet consectetur.
                </h3>
                <p className='text-md text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit habitant, felis mauris eget.
                </p>
            </div>
            
        </div>
           <div className='flex flex-col  bg-slate-300 pt-20 pb-20'>
                <h4 className='text-2xl font-Roboto mb-10 text-center text-slate-800'>Frequently Asked Questions:</h4>
                <ul className='px-40'>
                    <li className='p-7 text-slate-100 bg-slate-800 hover:bg-slate-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 text-slate-100 bg-slate-800 hover:bg-slate-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 text-slate-100 bg-slate-800 hover:bg-slate-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 text-slate-100 bg-slate-800 hover:bg-slate-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 text-slate-100 bg-slate-800 hover:bg-slate-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                </ul>
           </div>
    </div>
  )
}
