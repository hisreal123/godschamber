import { ClickButton } from './clickButton';
import React from 'react'
import VideoPlayer from './VideoBackground'



export default function Banner() {
  return (
    <>
    <div className="wrapper h-screen w-screen ">
        <div className="absolute">
            <h1>
                A PLACE FOR YOU 
            </h1>

            <div className="desc"> Join us this weekend </div>

            <div className="btns flex flex-col">
                <ClickButton title='Find a location' href="/" style=" rounded-full bg-red-800 text-white py-2 px-2" />
            </div>
        </div>
      <VideoPlayer />
    </div>
    </>
  )
}
