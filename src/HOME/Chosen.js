import React from 'react'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

export default function Chosen() {
    const data = [
        {
            id:0,
            title: "CHOOSE YOUR BOTTLE",
            description: "Now available in 4 different colors. Find one to match your style.",
            img: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/BasicEcostore-411.jpg?v=1655148492'
        },
        {
            id:1,
            title: "GET YOUR STARTER KIT",
            description: "Includes our bamboo storage box and mesh washing bag.",
            img: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/BasicEcoWebsize-zackgoldsmithphoto_57of65.jpg?v=1615740240'
        },
    ]
  return (
    <section className='flex h-[100vh] flex-wrap'>
        {data.map((el)=>{
            return (
                <div style={{backgroundImage: `url(${el.img})`}} className="w-[100%] bg-cover bg-center flex flex-col justify-center items-center space-y-4 text-white md:w-[50%]">
                    <h4 className='font-freight text-5xl w-[55%] text-center'>{el.title}</h4>
                    <p className='font-luam text-xl'>{el.description}</p>
                   <div className='flex space-x-4 items-center'>
                    <a href="#" className='font-monterast text-xl uppercase'>Shop Now</a>
                    <span><HiOutlineChevronDoubleRight/></span>
                   </div>
                </div>
            )
        })}
    </section>
  )
}
