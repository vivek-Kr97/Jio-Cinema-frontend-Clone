import React from 'react'
import { FaAppStoreIos, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { ImFacebook2 } from 'react-icons/im'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import playstore from '../../assets/googlePlay.svg'
import AppStore from '../../assets/appleStore.svg'
import Jio from '../../assets/jio-logo.png'

const Footer = () => {
  return (
    <section className=''>
  
         <div className='  flex md:flex-row flex-col justify-between bg-[#17181a] '>
            <section className='flex'>
            <div className='  w-[200px]'>
                <h1
                className='text-2xl font-bold pt-10 m-5'
                >Jio Cinema</h1>
                <ul>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">For You</a>
                    </li>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">Sports</a>
                    </li>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">Movies</a>
                    </li>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">TV Shows</a>
                    </li>
              
                </ul>
            </div>
          
            <div className='  w-[230px]'>
                <h1
                className='text-2xl font-bold pt-10 m-5'
                >Support</h1>
                <ul>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">Help Center</a>
                    </li>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">Terms of Use</a>
                    </li>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">Privacy Policy</a>
                    </li>
                    <li 
                    className='text-lg font-bold mx-5 mb-2'
                    >
                        <a href="">Content Complaints</a>
                    </li>
              
                </ul>
            </div>
        </section>
        
        <section className='flex md:flex-row flex-col gap-8'>
            {/* conect  */}
            <div className='  '>
                <h1
                className='text-3xl font-bold pt-10 m-5 '
                >Connect with Us</h1>
               
            <div className='flex gap-x-5'>
                    <div className=' text-2xl p-4 ml-4 bg-none bg-[#888585] rounded-full '>
                            <ImFacebook2 className='mx-auto' />
                        </div>
                        <div className=' text-2xl p-4 ml-4 bg-none bg-[#888585] rounded-full'>
                            <FaXTwitter  className='mx-auto' />
                        </div>
                        <div className=' text-2xl p-4 ml-4 bg-none bg-[#888585] rounded-full '>
                            <FaInstagram  className='mx-auto' />
                        </div>
                    
                        <div className=' text-2xl p-4 ml-4 bg-none bg-[#888585] rounded-full '>
                            <FaYoutube  className='mx-auto' />
                        </div>
               </div>
            
            
            </div>   

            {/* download       */}
            <div className=''>
            <h1
                className='text-3xl font-bold pt-10 m-5 flex '
                >Download the App</h1>
             <div className='flex justify-around items-center pb-5'>
                <div>
                    <img src={playstore} alt="" />
                </div> 
                 <div className=' '>
                    <img src={AppStore} alt="" />
                 </div> 
      

             </div>
              
            </div> 
        </section>



        </div>

        <footer>
            <div className='h-20 bg-[#202123] border-t-2 border-[#343538] flex items-center justify-between'>
              <p className='p-5 text-[12px]'>Copyright © Star India Private Limited, 2024. All rights reserved. Cloned by Vivek Kumar</p>
              <img src={Jio} alt="" 
              className='h-10 pr-5'
              />
            </div>
        </footer>
      
    </section>
  )
}

export default Footer
