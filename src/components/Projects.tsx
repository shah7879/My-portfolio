/*eslint-disable*/
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'



const Projects = () => {
  return (
    <div id='projects'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white-900" data-aos="zoom-in-up">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative" data-aos="zoom-in-up">
          <Image

            alt="gallery"
            className="absolute inset-0 w-full h-64 object-cover object-center"
            src="../../public/bg-theme.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" data-aos="zoom-in-up">
              COUNT DOWN TIMER Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" data-aos="zoom-in-up">
            COUNT DOWN TIMER
            </h1>
            <p className="leading-relaxed" data-aos="zoom-in-up">
              This is the COUNT DOWN TIMER Project which i've created in typescript.
            </p>
            <Link target='_blank' href={"https://github.com/shah7879/count_down_Timer_.git"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative" data-aos="zoom-in-up">
          <Image

            alt="gallery"
            className="absolute inset-0 w-full h-64 object-cover object-center"
            src={require("../../public/bg-theme.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" data-aos="zoom-in-up">
              QUIZ SYSTEM Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" data-aos="zoom-in-up">
            QUIZ SYSTEM
            </h1>
            <p className="leading-relaxed" data-aos="zoom-in-up">
              This is the QUIZ SYSTEM project which i've created in typescript.
            </p>
            <Link target='_blank' href={"https://github.com/shah7879/QUIZ_SYSTEM_.git"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative" data-aos="zoom-in-up">
          <Image

            alt="gallery"
            className="absolute inset-0 w-full h-64 object-cover object-center"
            src={require("../../public/bg-theme.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" data-aos="zoom-in-up">
              ADVENTURE GAME Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" data-aos="zoom-in-up">
            ADVENTURE GAME
            </h1>
            <p className="leading-relaxed" data-aos="zoom-in-up">
              This is the  ADVENTURE GAME project which i've created in typescript.
            </p>
            <Link target='_blank' href={"https://github.com/shah7879/Adventure_Game.git"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
  
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
