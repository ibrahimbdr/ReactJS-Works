import React, { useContext } from 'react'
import { languageContext } from '../context/languages'

export const Footer = () => {
  let { lang, setLang } = useContext(languageContext)
    function handleLang(){
        return lang=='English'?setLang('Arabic'):setLang('English');
    }
  return (
    <div className='bg-slate-800 px-8 py-12'>
        <div className='flex justify-center items-center'>
            <span className='font-Cinzel text-xl text-slate-300 font-bold'>MoviesLand</span>
        </div>
        <div className='text-center mt-6'>
            <a href='#' className='text-slate-400 mr-3'>Terms and Privacy Notice</a>
            <a href='#' className='text-slate-400 mr-3'>Cookie Notice</a>
            <a href='#' className='text-slate-400 mr-3'>Send us feedback</a>
            <a href='#' className='text-slate-400 mr-3'>Help</a>
        </div>
        <div className='text-center mt-6    '>
            <span className='font-Cinzel font-extrabold'>&copy; 2022, MoviesLand.com, Inc</span>
        </div>
        <div className='flex justify-center mt-3'>
        <button className='border py-2 w-32 text-slate-100' onClick={()=>{handleLang()}}>{lang}</button>
      </div>
    </div>
  )
}
