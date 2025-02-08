import React from 'react'
import m4 from '../../assets/movies/sanam-teri-kasam-3x4-1713981006727.avif'
import m3 from '../../assets/movies/hanuman-3x4-1726651696024.avif'
import m1 from '../../assets/movies/3x4-1734000503549.avif'
import m2 from '../../assets/movies/3x4-1724140181377.avif'
import m5 from '../../assets/movies/3x4-1703659806635.avif'
import m6 from '../../assets/movies/rud3x4-1729259247522.avif'
import m7 from '../../assets/movies/petta-3x4-1713860700256.avif'

const MustWatch = () => {
  return (
    <div>
        <section className='w-full bg-[#0e0d12] scrollbar-hide pl-5'>
              <div className='w-[95%] mx-auto pt-8'>
                <h1 className='text-3xl font-bold pb-8'>Must Watch Movies</h1>
                <div className='flex gap-x-5'>
                         <img src={m1}
                        className='md:h-[300px] h-[180px] rounded'/>
                        <img src={m2}
                        className='md:h-[300px] h-[180px] rounded'/>
                        <img src={m3}
                        className='md:h-[300px] h-[180px] rounded'/>
                        <img src={m4}
                        className='md:h-[300px] h-[180px] rounded'/>
                        <img src={m5}
                        className='md:h-[300px] h-[180px] rounded'/>
                          <img src={m6}
                        className='md:h-[300px] h-[180px] rounded'/>
                          <img src={m7}
                        className='md:h-[300px] h-[180px] rounded'/>
                </div>
              </div>
              
            </section>
    </div>
  )
}

export default MustWatch
