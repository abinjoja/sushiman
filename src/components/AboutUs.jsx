import React from 'react'
import Sushi3 from '../assets/sushi-3.png'
import about1 from '../assets/about_bg1.png'
import about2 from '../assets/about_bg2.png'
import Sushi2 from '../assets/sushi-2.png'
import { MdArrowOutward } from "react-icons/md";

const Aboutus = () => {
  return (
    <section className=' flex lg:flex-row flex-col  max-w-[1280px] mx-auto'>
        <div className='flex lg:flex-col flex-row  gap-2'>
            <div className='flex items-center  bg-white h-[350px]
              md:w-[535px] w-full  px-10'>
                <img src={Sushi3} 
                alt="sushiimg1"
                width={200}
                 />
                 
                
                
            </div>
            <button className=' flex absolute mt-[325px] ml-[326px]   max-lg:hidden  z-10 items-center gap-5 bg-black pl-7 text-white font-jakartha rounded-l-full   w-52 h-16'>Learn More <MdArrowOutward  className=' size-8'/> </button>
            <div className= '  flex items-center justify-evenly bg-white px-10 h-[350px]  md:w-[535px]  w-full  '>
                <img src={Sushi2}
                 alt="sushiimg2"
                 width={200}/>
                
            </div>
        </div>




        <div className='flex flex-col gap-8 px-14 mt-36   '>
            <h4 className='text-xl  text-red-700'>About Us / 私たちに関しては</h4>
            <h1 className=' font-playfair text-6xl font-bold leading-normal'>Our mission is to bring true Japanese flavours to you.</h1>
            <p className='font-jakartha text-xl text-slate-500  leading-10'>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
        </div>
    </section>
  )
}

export default Aboutus