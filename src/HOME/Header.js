import React, { useState } from 'react'
import logo from "../imgs/logo.png"
import { AiOutlineSearch } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { actived } from '../redux/homeSlice';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function Header() {
    const {data,isActive} = useSelector(state => state.home)
    const dispatch = useDispatch()
    const activeNavbar = 'absolute top-0 left-0 bg-pink-one h-full w-[50%] translate-x-[0%] transition-all ease-in-out zIndex'
    const desactiveNavbar = 'absolute top-0 left-0 bg-pink-one h-full w-[50%] translate-x-[-100%] transition-all ease-in-out'
    const handleClick = ()=>{
        dispatch(actived())
    }
    const home = 'text-white font-luam text-2xl hover:border-b border-white'
    const login = 'text-black font-luam text-2xl hover:border-b border-white'
    const navigate = window.location.href
    return (
    <>
    {/* for desktop */}
    {console.log(navigate)}
        <nav className='hidden lg:flex lg:justify-between items-center py-4'>
            <div>
                <img src={logo} alt="logo" className='h-[100%] min-w-full'/>
            </div>
            <ul className=' flex lg:space-x-3'>
                <li><a href="#" className={navigate === 'http://localhost:3000/login'?login : home}>Home</a></li>
                <li><a href="#" className={navigate === 'http://localhost:3000/login'?login : home}>About Us</a></li>
                <li><a href="#" className={navigate === 'http://localhost:3000/login'?login : home}>Privacy Policy</a></li>
            </ul>
            <div className='flex space-x-3 items-center'>
                <a href="#" className='text-white text-2xl hover:text-3xl'><AiOutlineSearch/></a>
                <Link to="/login" className='text-white text-2xl hover:text-3xl'><IoPersonOutline/></Link>
                <a href="#" className='text-white text-2xl hover:text-3xl'><AiOutlineShoppingCart/></a>
            </div>
        </nav>
        {/* for tablet mobile */}
        <nav className='flex justify-between items-center p-4 lg:hidden'>
            <div className='text-white text-3xl cursor-pointer' onClick={()=>handleClick()}>
                <GiHamburgerMenu/>
            </div>
            <div className={isActive === true ? activeNavbar : desactiveNavbar}>
                <p className='absolute right-2 top-2 text-xl cursor-pointer' onClick={()=>handleClick()}>X</p>
                <ul className='flex flex-col pt-48 space-y-5 items-center'>
                    <li><a href="#" className="text-#304331 font-luam text-2xl hover:border-b border-white">Home</a></li>
                    <li><a href="#" className="text-#304331 font-luam text-2xl hover:border-b border-white">About Us</a></li>
                    <li><a href="#" className="text-#304331 font-luam text-2xl hover:border-b border-white">Privacy Policy</a></li>
                </ul>
                <a href="#" className='text-xl hover:text-2xl flex items-center space-x-4 absolute bottom-6 left-2 text-black'><IoPersonOutline/>Login</a>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex space-x-3 items-center'>
                <a href="#" className='text-white text-2xl'><AiOutlineSearch/></a>
                <a href="#" className='text-white text-2xl '><AiOutlineShoppingCart/></a>
            </div>
        </nav>
        
    </>
  )
}
