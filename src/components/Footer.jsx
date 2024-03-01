import React from 'react'
import { navLinks } from '../constants'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";


const Footer = () => {
  return (
  <section className='bg-white max-w-[1280px] mx-auto '>
    <div className='flex md:flex-row flex-col gap-9 md:justify-between px-8 py-9'>
      <h1 className='font-playfair text-3xl font-bold text-sushi-red'>SUSHI<span className=' text-black'>MAN</span></h1>
   
     <ul className='flex font-jakartha gap-10  text-sm '>
      {navLinks.map((item) => (
        <li key={item.label} >
        <a href= {item.href}> {item.label}</a>
        </li>

      )

      )}

     </ul>
     <div className=' flex gap-7'>
     <TiSocialInstagram  className='size-12' />
     <TiSocialFacebook  className='size-12'/>
     <TiSocialTwitter className='size-12' /> 
      


     </div>
     </div>

  </section>
  )
}

export default Footer