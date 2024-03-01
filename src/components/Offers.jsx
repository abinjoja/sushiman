import React from 'react'
import Subscribe from '../assets/subscribe_bg.png'

const offers = () => {
  return (
    <section className='  max-w-[1280px] mx-auto'  style={{ backgroundImage: `url(${Subscribe})`, height: "500px", width:"1280px" }}>
      <div className='flex flex-col items-center gap-10'>
        <h1 className=' font-playfair text-7xl font-bold leading-normal '>Get offers stright <br />
to your inbox</h1>
<p>Sign up for the Sushiman newsletter</p>
<form className='  flex  border rounded-3xl w-96 h-20 items-center'>
  <label>
    <input type="text" name='' id='email' placeholder='Email Adress' className=' bg-transparent'/> 
  </label> <button className='text-white bg-black border rounded-2xl'>Get Started </button>
</form>
      </div>
    </section>
  
  )
}

export default offers