import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div className='vBackground h-screen w-screen bg-'>
      <video 
         src="./assets/ChurchVideo.mp4" 
         className="h-screen w-screen"
         loop
      />
      <h2> Daddy </h2>
      <h1> Banner</h1>
    </div>
  )
}

export default VideoPlayer
