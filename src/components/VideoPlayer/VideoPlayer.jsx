import React, { useRef } from 'react';
import './VideoPlayer.css'
import collegeVideo from '../../assets/college-video.mp4'

const VideoPlayer = ({play, setPlay}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlay(false);
        }
    }

  return (
    <div className={`video-player ${play ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={collegeVideo} autoplay muted controls></video>
    </div>
  )
}

export default VideoPlayer
