import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div>
      <video 
         src="/assets/ChurchVideo.mp4" 
         className="h-screen "
         loop
      />
    </div>
  )
}

export default VideoPlayer
