import React, { useEffect } from 'react'
import Header from './Header'
import Chosen from './Chosen'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import Hero from './Hero'
import { display } from '../redux/homeSlice'
import Products from './Products'
import Testimonals from './Testimonals'
import Wash from './Wash'
import Switch from './Switch'
import Instgram from './Instgram'
import Footer from './Footer'
import Pop from './Pop'
import Anonce from './Anonce'
export default function Home() {
    const {data} = useSelector(state => state.home)
    const {pop} = useSelector(state => state.pop)
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
          dispatch(display())
        }, 5000);
        return () => clearInterval(interval);
      }, []);

  return (
    <>
        <header>
            <Anonce/>
            {
                data.map((el)=>{
                    var img = el.img
                    return (
                        <div className={el.isDisplay === true ? 'h-[94vh] bg-center bg-no-repeat bg-cover transition-all ease-in-out': `hidden`} style={{backgroundImage : `url(${img})`}} key={el.id}>
                            <div className="md:w-[90%]  mx-auto">
                                <Header/>
                                <Hero/>
                            </div>
                        </div>
                    )
                })
            }
        </header>
        <Products/>
        <Chosen/>
        <Testimonals/>
        <Wash/>
        <Switch/>
        <Instgram/>
        <Footer/>
            <div className="relative">
            {
            pop === true ? <Pop/> : ''
        }
            </div>
    </>
  )
}
