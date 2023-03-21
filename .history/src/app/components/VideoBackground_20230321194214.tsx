import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div>
      <video 
         src="/assets/ChurchVideo.mp4" 
         className="h-screen "
         loop
      />
      <h2> Daddy </h2>
      <h1> Banner</h1>
    </div>
  )
}

export default VideoPlayer
