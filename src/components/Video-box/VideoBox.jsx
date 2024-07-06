// import { useEffect, useRef, useState } from "react";

// // Handler hook for when Outside click dropdown close
// let useClickOutside = (handler) => {
//   let domNode = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };
//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });
//   return domNode;
// };
// // Handler hook for when Outside click dropdown close End Code====>>

// const VideoBox = () => {
//   const [videoOpen, setvideoOpen] = useState(false);

//   let domNode = useClickOutside(() => {
//     setvideoOpen(false);
//   });
// import React, { useState, useRef } from 'react';
// // import {test} from '../../Videos/jamplay_vid.mp4';
// const VideoPlayer = ({ videoLinks }) => {
//   const [currentTime, setCurrentTime] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [volume, setVolume] = useState(1);
//   const videoRef = useRef(null);

//   const handleTimeUpdate = () => {
//     setCurrentTime(videoRef.current.currentTime);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//     videoRef.current.muted = !videoRef.current.muted;
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     videoRef.current.volume = event.target.value;
//   };

//   return (
//     <div className="video-player">
//       <video
//         ref={videoRef}
//         // src={test} // Assuming only one video link for simplicity
//         onTimeUpdate={handleTimeUpdate}
//         controls
//         autoPlay
//         muted={isMuted}
//         volume={volume}
//       />
//       <div className="controls">
//         <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//         <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
//         <input
//           type="range"
//           min="0"
//           max="1"
//           step="0.1"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//         {/* Add full screen button here */}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
