import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { decrementIndex, handlePop, incrementIndex } from '../redux/popupSlice';

export default function Pop() {
    const {pop,data,index} = useSelector(state => state.pop)
    const dispatch = useDispatch()
    const increment = ()=>{
        dispatch(incrementIndex())
    }
    const decrement = ()=>{
        dispatch(decrementIndex())
    }
    const gotoInsta = ()=>{
        window.location.href = "https://www.instagram.com/zikodotcom/"
    }
  return (
    <section onClick={()=> dispatch(handlePop())} className='fixed h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.17)] flex justify-center items-center z-50'>
        <div onClick={(e)=> e.stopPropagation()} className='flex flex-col h-full w-full md:h-[60%] md:w-[80%] md:flex-row overflow-scroll md:overflow-hidden lg:h-[80%] lg:w-[60%]'>
            <div className='w-[100%] h-full md:w-[70%]'>
                <img className='h-full w-full' src={data[index].img} alt="" />  
            </div>
            <div className='bg-white h-full w-[100%] md:w-[60%] rounded-tr rounded-br md:h-auto'>
                <div className='flex justify-between p-4 border-b border-gray'>
                    <div className='flex items-center space-x-2 cursor-pointer' onClick={gotoInsta}>
                        <div>
                            <img className='h-12 w-12 border rounded-full border-gray' src="https://instafeed.nfcube.com/assets/img/instagram-logo.png" alt="insta logo" />
                        </div>
                        <div>
                            <p className='font-monterast text-sm'>Basic.eco</p>
                            <p className='font-monterast text-xs text-gray'>@basic.eco</p>
                        </div>
                    </div>
                    <div>
                        <span className='cursor-pointer' onClick={()=> dispatch(handlePop())}>X</span>
                    </div>
                </div>
                <div className='h-[66%] md:max-h-[340px] md:h-[340px] lg:max-h-[495px] lg:h-[495px]'>
                    <div className='flex justify-between p-4'>
                        <span className='text-black cursor-pointer p-2 hover:bg-slate-200 rounded' onClick={decrement}><FaLessThan/></span>
                        <span className='text-black cursor-pointer p-2 hover:bg-slate-200 rounded' onClick={increment}><FaGreaterThan/></span>
                    </div>
                    <div className='p-4 pt-2 md:pt-0'>
                        <p className='font-luam text-black'>{data[index].content}<br/>.<br/>.<br/></p>
                    </div>
                    <div className='p-4 pt-0'>
                        <p className='font-luam text-black'>{data[index].hashtag}</p>
                    </div>
                </div>
                <div className='pl-4 border-t border-gray flex items-center'>
                    <p className='font-luam text-black'>14 août • <a href="#" onClick={gotoInsta}> View on Instagram</a></p>
                </div>
                
            </div>
        </div>
    </section>
  )
}
