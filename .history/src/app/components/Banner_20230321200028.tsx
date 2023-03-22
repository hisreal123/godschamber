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

            <div className="btns">
                <a href="" className=""> Find a location </a>
                <a href="" className=""> Watch Online</a>
            </div>
        </div>
      <VideoPlayer />
    </div>
    </>
  )
}
