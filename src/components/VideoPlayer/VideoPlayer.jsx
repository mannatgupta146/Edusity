import React from 'react'
import './VideoPlayer.css'
import collegeVideo from '../../assets/college-video.mp4'

const VideoPlayer = ({play, setPlay}) => {
  return (
    <div className={`video-player ${play ? '' : 'hide'}`}>
      <video src={collegeVideo} autoplay muted controls></video>
    </div>
  )
}

export default VideoPlayer
