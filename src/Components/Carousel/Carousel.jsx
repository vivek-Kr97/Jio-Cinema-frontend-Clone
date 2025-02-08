import React from 'react'
import img1 from '../../assets/16x9got.avif'
import img2 from '../../assets/16x9-bb.avif'
import img3 from '../../assets/16x9bb2.webp'


const Carousel = () => {
  return (
    <div className='w-screen flex justify-center xl:h-[550px]  bg-slate-950 gap-x-5 p-5 scrollbar-hide'>
        <img src={img3} alt="" 
        className='rounded-xl xl:block hiddden'
        />
        <img src={img1} alt=""         className='rounded-xl'
        />
        <img src={img2} alt=""         className='rounded-xl xl:block hiddden'
 />
    </div>
  )
}

export default Carousel
