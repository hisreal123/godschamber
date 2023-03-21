import { useState } from 'react'

const VideoPlayer = () => {
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <video 
         src="./assets/ChurchVideo.mp4" 
         onClick={handlePlayPause} 
        //  className={isPlaying ? 'playing' : 'paused'}
         loop
      />
    </div>
  )
}

export default VideoPlayer
