/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import { useParams } from "react-router";
// import trialvideo from "../"
// import video from './update_profile.js - Online Bank System - Visual Studio Code 2023-03-23 00-06-51'



function MainContent({currentVideo, currentSection, content }){

    const videoRef = useRef(null);
    const [thumbnailUrl, setThumbnailUrl] = useState('');
  
    const generateThumbnail = () => {
      const video = videoRef.current;
  
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  
      const thumbnailDataUrl = canvas.toDataURL('image/jpeg');
      setThumbnailUrl(thumbnailDataUrl);
    };   

return(
    
    <Fragment>
     <div className="flex flex-col">
        <div className="font-bold mt-4 text-2xl ">
        {currentSection}
            
        </div>
        <div className="flex justify-center align-top">
                <video controls={true} ref={videoRef} onLoadedData={generateThumbnail}
                    src = {currentVideo?.url}
                    style={{ borderColor: "black"}}
                    className=" border border-[#B7B7B7] w-[90%] mx-auto cursor-pointer">
                    {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />}
                </video>
        </div>
     </div>
    </Fragment>

)}


export default MainContent;