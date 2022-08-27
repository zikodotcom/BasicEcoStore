import React from 'react'
import background from "../imgs/background.PNG"
export default function Wash() {
  return (
    <section className='h-[100vh] bg-cover bg-no-repeat md:bg-cover md:bg-center md:border-t md:border-b md:border-black ' style={{backgroundImage: `url(${background})`}}>
        <div className='flex justify-start md:justify-end h-[100vh]'>
            <div className="flex flex-col items-start justify-center space-y-7 h-[100%] w-[100%] md:w-[50%] p-10 text-white">
                <h3 className='text-7xl font-freight'>WASH AND<br/> REUSE</h3>
                <p className='font-luam text-2xl'>Soft and absorbent unlike standard cotton balls. Can be washed and re-used in mesh laundry bag for multiple uses.</p>
                <button className='border border-white p-4 inline w-[70%] lg:w-[40%] font-luam text-white text-3xl hover:border-2'>Shop Now</button>
            </div>
        </div>
    </section>
  )
}
