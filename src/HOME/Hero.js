import React from 'react'
import { useSelector } from 'react-redux'

export default function Hero() {
    const {data} = useSelector(state => state.home)
  return (
    <div>
        <section id='hero'>
            {
                data.map((el)=>{
                    if(el.isDisplay === true){
                        return (
                            <div className=' flex flex-col space-y-8 p-4 lg:pt-[20vh]'>
                            <h1 className='font-freight text-6xl text-white w-96'>{el.bigTitle}</h1>
                                <p className='font-luam text-2xl w-[80%] lg:w-[45%] text-white'>{el.description}</p>
                                <button className='border border-white p-4 inline w-[50%] md:w-[40%] lg:w-[20%] font-luam text-white text-3xl hover:border-2'>Shop Now</button>
                            </div>
                        )
                    }
                })
            }
        </section>
    </div>
  )
}
