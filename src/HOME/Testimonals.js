import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Slider from "react-slick";




export function right(props) {
  return (
    <HiOutlineArrowNarrowRight {...props} className={'next'}/>
  )
}

export function left(props) {
    return (
      <HiOutlineArrowNarrowLeft {...props} className={'prev'}/>
    )
  }


export default function Testimonals() {
    const [opinion, setOpinion] = useState([
        {
            id: 0,
            img: "https://cdn.shopify.com/s/files/1/0526/3078/2123/files/286593957_2926400920991647_5886697495175446749_n.jpg?v=1655681102",
            name: "SANDRA. S",
            opin: "I love these tumblers! Minimalistic, easy to clean with a cute look. I use them all the time when I am on the go.",
            isShow: false
        },
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0526/3078/2123/files/IMG_4788.jpg?v=1655828591",
            name: "SIDNEY. M",
            opin: "I made the switch. No regrets. Love my reusable makeup pads.",
            isShow: true
        }
    ])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <right />,
        prevArrow: <left />
      };
  return (
    <section className='h-[90vh] p-8 bg-pink-one'>
        <h4 className='font-freight text-6xl text-black text-center'>TESTIMONIALS</h4>
        <Slider {...settings}>
            
            {
                opinion.map((el)=>{
                    return (
                        <div className='h-[90vh] my-10 text-center space-y-8 ' >
                            <img className='h-24 w-h-24 rounded-full mx-auto' src={el.img} alt="" />
                            <div className='font-luam text-4xl text-black text-center flex flex-col items-center space-y-4'>
                                <p className=' w-[50%] relative after:absolute after:content-[" "] after:border-r border-black'>{el.opin}</p>
                                <p className='font-freight text-5xl text-black'>{el.name}</p>
                            </div>                            
                        </div>
                    )
                })
            }

        </Slider>
    </section>
  )
}



