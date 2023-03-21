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
    </div>
  )
}

export default VideoPlayer
