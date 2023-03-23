import { ClickButton } from './clickButton';
import React from 'react'
import VideoPlayer from './VideoBackground'


import {Watch, location} from './SvgIcons/SvgIcons'


export default function Banner() {
  return (
    <>
    <div className="wrapper h-screen w-screen ">
        <div className="absolute flex items-center h-screen w-screen justify-center">
          <div className="wrap">

    <div className="text text-white text-center ">
            <h1 className='text-3xl md:text-5xl '>
                A PLACE FOR YOU 
            </h1>
            <div className="desc mb-3 text-md md:text-2xl"> Join us this weekend </div>
    </div>

            <div className="btns flex flex-col">
                <ClickButton icon={location} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-red-600 text-white py-2 px-2 text-center md:w-[70%] md:text-lg" />
                <ClickButton icon={Watch} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-red-600 text-white py-2 px-2 text-center mt-5" />
            </div>
          </div>
        </div>
      <VideoPlayer />
    </div>
    </>
  )
}
