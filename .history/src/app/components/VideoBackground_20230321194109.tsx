import { useState } from 'react'

const VideoPlayer = () => {
  

  return (
    <div>
      <video 
         src="/assets/ChurchVideo.mp4" 
         className={isPlaying ? 'playing' : 'paused'}
         loop
      />
    </div>
  )
}

export default VideoPlayer
