// import React from 'react'

// const VideoPlayer = () => {
//   return (
// 	<div>
	  
// 	</div>
//   )
// }

// export default VideoPlayer
import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ videoLinks }) => {
  // State variables
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  // Function to handle video time update
  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  // Function to handle video duration change
  const handleDurationChange = (event) => {
    setDuration(event.target.duration);
  };

  // Function to toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Function to handle volume change
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  useEffect(() => {
    // Your code to store total time of video played in the backend
  }, [currentTime]);

  return (
    <div className="video-player">
      <video
        src={videoLinks[0]} // Assuming only one video link for simplicity
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        controls
        autoPlay
        muted={isMuted}
        volume={volume}
      />
      <div className="controls">
        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        {/* Add full screen button here */}
      </div>
    </div>
  );
};

export default VideoPlayer;
