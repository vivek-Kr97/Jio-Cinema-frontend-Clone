import React from 'react'
import f1 from '../../assets/f1.avif'
import f2 from '../../assets/f2.avif'
import f3 from '../../assets/f3.avif'
import f10 from '../../assets/f10.jpg'
const Fetured = () => {
    let featureImg =[
        f1, f10, f2, f3,  
    ]
  return (
    <>
         <section className='w-full bg-[#0e0d12] scrollbar-hide'>
              <div className='w-[95%] mx-auto pt-8
              '>
                <h1 className='md:text-3xl text-2xl xl:font-bold font-semibold pl-5 pb-8'>Hot Right Now 🔥</h1>
                <div className='flex gap-x-5'>
                {
                    featureImg.map((img) =>{
                        return<img src={img} key={img} 
                        className='md:h-[400px] h-[250px] rounded pl-5'/>
                    })
                }
                </div>
              </div>
              
            </section>
    </>
  )
}

export default Fetured
