import React from 'react'
import JClogo from '../../assets/jc_logo_v2.svg'
import Crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import VoiceSearch from '../../assets/voice-search.svg'
import user from '../../assets/avatar_guest.svg'
import JCsolo from '../../assets/jio_logo.svg'

const Header = () => {
  return (
    <>
      <header className=' flex w-[100%] h-[70px] bg-[#0d0c10] justify-between items-center '>
        <nav className='w-fit h-[70px] pt-4 ml-9 '>
          <section className='flex'>
          <div className='w-fit flex gap-3 h-[40px]'>
                  <img src={JClogo} alt="JioCinemaLogo" className='md:block hidden'/>
                  <img src={JCsolo} alt=""  className='md:hidden block'/>
            
                  <div className='flex gap-1 border-2 border-solid border-yellow-400 px-5  text-center items-center rounded-full'>
                      <img src={Crown} alt="" />
                      <p className='text-[10px] text-yellow-400
                          font-semibold
                      '>Go Premium</p>
                  </div>
            </div>  

            <ul className='w-fit md:flex items-center pl-7 gap-x-7 
            font-bold hidden  '>
              <li className='menuLink'>Home</li>
              <li >Sports</li>
              <li >Movies</li>
              <li >TV Shows</li>
              <li >More</li>

            </ul>

          </section>




        </nav>
        <div className='w-[30%] h-[70px] flex pt-4'> 
            <div className='max-w-fit h-[40px] rounded-full bg-[#1e1f20] md:flex hidden items-center justify-center gap-5'>
                <div className='p-2 ml-4 bg-none hover:bg-[#888585] rounded-full'>
                       <img src={searchIcon} alt="" />
                </div>
                <input type="text" name="" id=""
                    className='h-[25px] w-[250px] bg-[#1e1f20] outline-none text-white' 
                    placeholder='Movies, Shows and more'/>
                <div className='p-2 mr-4 rounded-full bg-none hover:bg-[#888585] '>
                      <img src={VoiceSearch} alt="" />
                </div>
            </div>
            <div className='md:pl-3 pl-[70px]'>
                <img src={user} alt="" 
                className='h-10 '
                />

              </div>
            
        </div>
      </header>
    </>
  )
}

export default Header
