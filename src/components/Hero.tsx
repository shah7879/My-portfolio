/*eslint-disable*/
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min h-screen bg-no-repeat bg-[url(/picture_bg.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "15%"}}>
      <Navbar />

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px'>
      <div className='hidden lg:block'></div>
      <div className='text[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
       <div>
        <p data-aos="zoom-in-up">I'm</p>
        <p data-aos="zoom-in-up">Shamshad</p>
        <p data-aos="zoom-in-up">Shah</p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
