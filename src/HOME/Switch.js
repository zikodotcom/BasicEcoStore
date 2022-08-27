import React from 'react'

import Marquee from "react-fast-marquee";


export default function Switch() {
    const img = ['https://cdn.shopify.com/s/files/1/0526/3078/2123/files/Group_142_b68edfb1-7560-427d-a1a7-2ef50efe9d91.png?v=1655826440',
                'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/Group_143_d6ebd27b-3447-486f-8a3c-e1451bdfa683.png?v=1655826459',
                'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/Group_141_6dce310b-88c3-4f07-bf69-a6385d68ba0b.png?v=1655826376'
]
    const choices = [
        '-Biodegradable', '-Sustainable','-Reusable', '-Recyclable', '-Biodegradable','-Biodegradable', '-Sustainable','-Reusable', '-Recyclable', '-Biodegradable'
    ]
    
  return (
    <section className='h-[80vh] bg-pink-two'>
        <div className='h-[85%] flex flex-col justify-center space-y-10 py-4 border-t border-b border-black'>
            <h5 className='font-freight text-3xl text-center md:text-5xl'>SWITCH TO SUSTAINABLE</h5>
            <p className='font-luam text-xl text-center md:text-3xl'>Decrease single-use waste by purchasing products that are environmentally friendly.</p>
            <div>
                <ul className='flex space-x-10 justify-center'> 
                {
                    img.map((el)=>{
                        
                        return(
                            <li><img className='h-32 w-3h-32' src={el} alt="" /></li>
                        )
                        
                    })
                }
                </ul>
            </div>
        </div>
        <div className='my-auto flex justify-center h-[15%] border-b border-black'>
                <Marquee
                gradientColor={false}
                speed={50}
                className="h-100% flex space-x-4"

                >
                {
                        choices.map((el)=>{
                            return (
                                <div className='mx-10'>
                                    {/* <span>         -      </span> */}
                                    <span className='font-luam text-5xl'>{el}</span>
                                    {/* <span>         -      </span> */}
                                </div>
                            )
                        })
                    }
                </Marquee>
        </div>
    </section>
  )
}
