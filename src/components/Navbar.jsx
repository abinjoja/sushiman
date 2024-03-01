import React from 'react'
import { navLinks } from '../constants'
import hamburger from '../assets/hamburger.svg'
import popular from '../assets/popular_bg.png'
import sushi1 from '../assets/sushi-1.png'
import play from '../assets/play-circle.svg'
import arrow from '../assets/arrow-vertical.svg'
import user from '../assets/user.png'
import { CiSearch } from "react-icons/ci";

const navbar = () => {
  return (
    <section className='flex   max-w-[1280px] mx-auto lg:flex-row flex-col'>
        <div className=' pt-6  flex flex-col  bg-sushi-red  w-full lg:w-[533px]  h-[1200px]lg:h-[900px]' >
          <div className='flex justify-between '>
            <h1 className='  text-2xl font-bold font-playfair text-white pl-7'>SUSHIMAN</h1>
              <div className='  pr-9  hidden max-lg:block'>
              <img src={hamburger}
               alt="hamburger"
               width={25}
               height={25}
               className="" />

              </div>
              </div>
            


            <img src={sushi1}
             alt="sushiimg"
              className=" md:pt-40  pt-32  lg:scale-150 lg:pl-[81px] xl:pl-[89px]  "/>
              <h1 className='font-bold text-white  text-4xl md:text-6xl lg:text-9xl   flex flex-col gap-3 px-10 absolute top-[404px] md:top-[625px] lg:top-[445px] '>日 <span> 本 </span>食</h1>
              
             
        </div>
        <div className='bg-sushi-cream  w-full lg:w-[747px] '>
          
            <ul className='flex  gap-16  max-lg:hidden items-center  font-jakartha pl-20  pt-6 font-medium'>
            {navLinks.map ((item) => (
                <li key={item.label}>
                   <a href={item.href}> {item.label} </a>
                </li>
                
            ))
            
            }
            <li><CiSearch className=' size-8' /> </li>
            </ul>
            
           
           
          



            <div className='px-16 pt-20 flex  flex-col  gap-8  mb-24 '>
               <h1 className=' text-7xl font-playfair font-bold 
               leading-normal '> 
              

                Feel the taste <br /> of Japanese <br />food</h1>
                <p className=' font-jakartha pl-7 leading-normal text-lg '>
                Feel the taste of the most popular Japanese food from  <br />anywhere and anytime.</p>
                <div className='flex gap-10   '>
                  <button className='bg-black text-white text-xl rounded-full w-52 h-14 ml-10'>Order Now</button>
                <button className='flex gap-2 items-center'> 
                  <img src={play} alt="playbutton"  /> How To Order 
                </button>
                </div>
                
            </div>
            

            <div className=' flex bg-white h-44 justify-center gap-4 items-center '>
              
                <h1 className='text-6xl font-playfair '>24k+ </h1>
                <h2 className='font-xl opacity-40 font-jakartha'>Happy  <br />Customers</h2> 
                <img src={arrow } 
                alt="arrowimg" />

                <img src={user}
                 alt="userimg" 
                 height={50}
                 width={50}/>
                <p className='text-sm font-jakartha opacity-50 leading-8'>"This is the best Japanese food <br /> delivery service that ever  <br />existed." </p>
              </div>
            </div>
        
            

        
    </section>
  )
}

export default navbar