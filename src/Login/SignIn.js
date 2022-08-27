import React from 'react'
import Anonce from '../HOME/Anonce'
import Header from '../HOME/Header'
import Footer from '../HOME/Footer'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <>
        <Anonce/>
        <section className='h-[80vh] bg-pink-one text-black p-4'>
            <Header/>
            <div>
              <h2 className='font-freight text-5xl text-black text-center'>Login</h2>
              <div className='flex justify-center mt-5'>
                <form className='w-[500px] max-w-[500px]'>
                  <div className='w-full'>
                    <input className='w-full p-4 bg-transparent border border-black rounded shadow-sm placeholder:text-black placeholder:font-luam hover:outline-4 hover:outline-black focus:outline-none focus:border' type="email" placeholder='Enter your email' />
                  </div>
                  <div className='w-full mt-2'>
                    <input className='w-full p-4 bg-transparent border border-black rounded shadow-sm mt-4 placeholder:text-black placeholder:font-luam focus:outline-none focus:border' type="password" placeholder='Enter your password' />
                  </div>
                  <a href="#" className='font-luam text-xl text-black border-b'>Forgot your password?</a>
                  <div className='flex flex-col justify-center text-center containers '>
                    <div className='center'>
                      <button type="submit" className='bg-black text-white block w-[118px] p-2'>Login</button>
                      <Link to="/SignUp" className='font-luam text-xl text-black border-b'>Create a account</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
