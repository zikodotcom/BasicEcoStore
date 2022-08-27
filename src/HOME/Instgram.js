import React from 'react'
import { IoLogoInstagram } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { getIndex, handlePop } from '../redux/popupSlice';

export default function Instgram() {
    const dispatch = useDispatch()
    const {pop,data} = useSelector(state => state.pop)
    const handlePops = (indexx)=>{
        dispatch(getIndex(indexx))
        dispatch(handlePop())
    }
  return (
    <section className='h-[70vh] bg-pink-one'>
       <div className='flex flex-col justify-center items-center space-y-4 text-black h-[30%]'>
            <h6 className='font-freight text-6xl uppercase'>Instagram</h6>
            <p className='font-luam text-2xl'>Shop our Instgram</p>
        </div> 
        <div className='flex h-[70%]'>
            {
                data.map((el,index) =>{
                    return (
                        <div className='w-[25%] h-[100%] bg-cover bg-no-repeat hover:bg-slate-900 hover:opacity-70 cursor-pointer' style={{backgroundImage : `url(${el.img})`}} onClick={()=>handlePops(index)}>
                            <div className='opacity-0 h-full w-full hover:flex items-center justify-center hover:opacity-100'>
                                <span className='text-3xl'><IoLogoInstagram/></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
