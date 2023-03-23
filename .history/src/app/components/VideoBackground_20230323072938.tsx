import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div className='vBackground'>
      <video 
         src="./assets/churchVideo.mp4" 
         className="h-screen w-screen object-cover overflow-hidden"
         loop
         
         muted
      />
      <h2> Daddy </h2>
      <h1> Banner</h1>
    </div>
  )
}

export default VideoPlayer
