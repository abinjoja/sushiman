import React from 'react';
import { cards } from '../constants/index.js'
import Popularcard from '../components/Popularcard.jsx';
import { IoIosArrowRoundForward } from "react-icons/io";

const Popular = () => {
  return (
    <section className=" bg-sushi-red max-w-[1280px] mx-auto">
        <div className='flex justify-evenly py-10 w-full '><h1 className='font-playfair md:text-6xl text-4xl  font-semibold  text-white '>Popular Food / 人気</h1></div>
        <div className='flex  md:flex-row   flex-wrap  justify-evenly gap-20 px-7 py-10 '>
            {cards.map((card) => (
            <div className=' '>
                <Popularcard {...card}/>
            </div>
           
            )   
                
            )}
                
        </div>
        <div className='flex justify-evenly py-10 '><button className='flex gap-3 items-center justify-center md:text-xl text-lg font-jakartha font-semibold bg-black text-white rounded-full w-52 h-16   '>
            Explore Food<IoIosArrowRoundForward  className='size-10 opacity-55 '/> </button></div>
    </section>
  )
}

export default Popular