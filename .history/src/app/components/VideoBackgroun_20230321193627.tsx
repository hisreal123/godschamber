import { useState } from 'react'

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <video 
         src="" 
         onClick={handlePlayPause} 
         className={isPlaying ? 'playing' : 'paused'}
         loop
      />
    </div>
  )
}

export default VideoPlayer
