import React from 'react';
import { BsFillPersonFill, BsLinkedin } from 'react-icons/bs';
import {  FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex w-full bg-white justify-between bg-opacity-20 px-16 py-5'>
        <div className='text-white flex space-x-10 font-bold text-2xl'>
            <div className='cursor-pointer hover:text-pink-600'>
                <a href='https://github.com/bond0887' target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
            <div className='cursor-pointer hover:text-pink-600'>
               <a href='https://surajjindal.netlify.app/' target="_blank" rel="noreferrer"><BsFillPersonFill /></a>
            </div>
            <div className='cursor-pointer hover:text-pink-600'>
                <a href='https://www.linkedin.com/in/suraj-jindal-bb875a1b4/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
            </div>
        </div>
        <div>
            <p className='text-white text-l'>@2023 SURAJ</p>
        </div>
    </div>

  )
}

export default Footer;