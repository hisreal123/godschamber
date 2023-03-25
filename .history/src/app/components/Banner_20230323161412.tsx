import { ClickButton } from './clickButton';
import React from 'react'
import VideoPlayer from './VideoBackground'


import { Watch, location } from './SvgIcons/SvgIcons'


export default function Banner() {
  return (
    <>
      <div className="wrapper h-screen">
        <div className="absolute flex items-center h-screen w-screen justify-center">
          <div className="wrap">

            <div className="text text-white text-center ">
              <h1 className='text-4xl md:text-6xl font-light mb-5 md:mb-6 '>
                A PLACE FOR YOU
              </h1>
              <div className="desc mb-8 text-md md:text-2xl"> Join us this weekend </div>
            </div>

            <div className="btns flex flex-col md:flex-row md:items-center  md:space-x-2 md:w-[500px] md:mx-auto ">
              <ClickButton icon={location} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-red-600 hover:bg-red-800 text-white py-2 px-2 text-center md:w-[70%] md:mx-auto md:py-4 md:px-5  md:space-x-0 md:text-sm" />
              <ClickButton icon={Watch} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-red-600 hover:bg-red-800 text-white py-2 px-2 text-center mt-5 md:w-[70%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
            </div>
          </div>
        </div>
        <VideoPlayer />
      </div>
    </>
  )
}
