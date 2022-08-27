import React from 'react'
import logo from '../imgs/logo.png'
import { FaFacebookF, FaInstagram,FaTiktok} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
        <nav className='h-[20vh] flex justify-center items-center bg-black border-t border-b border-white '>
            <ul className='flex space-x-6 text-white font-monterast'>
                <li className='hover:border-b border-white pb-2  text-xl '><a href="#">Shop All</a></li>
                <li className='hover:border-b border-white pb-2  text-xl '><a href="#">Contact Us</a></li>
                <li className='hover:border-b border-white pb-2  text-xl '><a href="#">About Us</a></li>
            </ul>
        </nav>
        <div className='flex flex-col bg-black md:h-[30vh] text-white md:flex-row'>
            <div className='w-full md:w-[50%] p-8 md:border-r-2 md:border-white'>
                <img src='https://cdn.shopify.com/s/files/1/0526/3078/2123/files/Group_2.png?v=1652207798&width=200' alt='logo' />
                <p className='font-luam text-xl'>Be sure to follow us on our social media for additional photos, videos and behind the scenes.</p>
                <div className='flex space-x-2 justify-start p-4'>
                    <span className='text-xl cursor-pointer hover:text-2xl'><FaFacebookF/></span>
                    <span className='text-xl cursor-pointer hover:text-2xl'><FaInstagram/></span>
                    <span className='text-xl cursor-pointer hover:text-2xl'><FaTiktok/></span>
                </div>
            </div>
            <div className='w-full md:w-[50%] p-8 flex flex-col space-y-4'>
                <h6 className='font-freight text-3xl uppercase'>Subscribe</h6>
                <p className='font-luam text-xl'>Subscribe to our email list for exclusive updates and information regarding products,<br/> events and sales.</p>
                <form>
                    <input className='p-2 w-[50%]' type="email" name="Email" placeholder='Enter your email' />
                    <button className='bg-pink-two py-2 px-4 text-black' type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex justify-center items-center h-[5vh] bg-pink-two border-t-2 border-white'>
            <p className='text-xl font-luam text-white'>Created by <a href="https://www.facebook.com/ziko.sdik/">Zakaria Sdik</a></p>
        </div>
    </footer>
  )
}
