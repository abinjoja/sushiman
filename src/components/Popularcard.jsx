import React from 'react'
import star from '../assets/star.svg'

const Popularcard = ( {imgSrc , title , rating , price , alt  }) => {
  return (
    <div className='flex flex-col justify-between border border-white text-white  border-opacity-30 rounded-3xl items-center gap-4 hover:scale-125
     hover:bg-white hover:text-black w-64'> 
        <img src={imgSrc}
         alt={alt}
        className='px-16 pt-20 '/>
         <h1 className='font-playfair font-semibold text-2xl '>{title}</h1>
         <div className='flex gap-28 py-5'>
            <div className='flex  gap-3 size-8 '>
                <img src={star} alt="starmg" />
                  <h3 className='font-jakartha text-xl '>
                    {rating}
                  </h3>
            </div>
            <h3 className='font-jakartha  text-xl'>{price}</h3>
         </div>
    </div>
  )
}

export default Popularcard