import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div className='vBackground h-screen w-screen'>
      <video 
         src="./assets/churchVideo.mp4" 
         className="h-screen w-screen object-cover"
         loop
         
         muted
      />
      <h2> Daddy </h2>
      <h1> Banner</h1>
    </div>
  )
}

export default VideoPlayer
