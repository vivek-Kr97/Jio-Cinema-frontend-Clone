import React from 'react'
import Ban14 from '../../assets/14x3-1738500470071.webp'

const Spotlight = () => {
  return (
    <section className='w-full bg-[#0e0d12]'>
      <div className='w-[95%] mx-auto pt-8'>
        <h1 className='md:text-3xl text-2xl xl:font-bold pl-5 font-semibold pb-8'>In the Spotlight</h1>
        <img src={Ban14} alt="" className='rounded-xl'/>
      </div>
      
    </section>
  )
}

export default Spotlight
