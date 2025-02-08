import React from 'react'
import Header from '../Components/Header/Header'
import Tags from '../Components/Tags/Tags'
import Channel from '../Components/Channels/Channel'
import Carousel from '../Components/Carousel/Carousel'
import Fetured from '../Components/Featured/Fetured'
import Spotlight from '../Components/Spotlight/Spotlight'
import MustWatch from '../Components/Featured/MustWatch'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
   <>
   <div className=' max-w-screen overflow-hidden scrollbar-hide h-screen overflow-y-auto  '>
        <Header/>
        <Tags/>
        <Carousel/>
        <Channel/>
        <Spotlight/>
        <Fetured/>
        <MustWatch/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
