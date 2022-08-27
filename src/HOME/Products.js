import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { active } from '../redux/productsSlice'

export default function Products() {
    const {data} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const handleover = (id)=>{
        let index = data.findIndex((el)=>{
            return el.id === id
        })

        dispatch(active({index}))
    }
  return (
    <section className='bg-pink-one h-auto p-3'>
        <h1 className='font-freight text-4xl text-black'>PRODUCTS</h1>
        <div className='flex flex-col items-center space-y-3 md:flex-row md:justify-center md:items-center md:space-x-8 md:h-[100%]'>
            {
                data.map((el)=>{
                    return (
                        <div onMouseEnter={()=>handleover(el.id)} onMouseLeave={()=>handleover(el.id)} className="transition-all ease-in-out duration-1000">
                            <div>
                                <img src={el.isDisplay === true ? el.img1 : el.img2} alt="Products" />
                            </div>
                            <div className='flex justify-between items-center my-4'>
                                <h2 className='font-luam text-2xl text-black w-[50%]'>{el.bigTitle}</h2>
                                <p className='font-luam text-2xl text-black'>{el.price}</p>
                            </div>
                            <div className='flex justify-between'>
                                <button className='px-4 py-2 border border-black font- text-xl min-width'>Add to cart</button>
                                <button className='px-4 py-2 bg-black font- text-xl min-width text-white'>Buy it Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
