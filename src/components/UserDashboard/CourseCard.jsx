/* eslint-disable react/prop-types */
import { Celebration } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import {toast} from 'react-toastify'
import axios from 'axios'
import { backendUrl } from "../../url";

function capitalizeFirstLetter(s){
    if(s){
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    return s;
}




function CourseCard({user,course,progress,currentRating}){

    const navigate = useNavigate();

    function getCertificate(){
        navigate("/certificate")
      }

    let k= 0;
    for(let i = 0; i<progress.length; i++){
        if(progress[i]?.watched){
            k++;
        }
    }

    let vids = 0;
    for(let j = 0; j<course?.sections.length; j++){
        vids += course?.sections[j].videos.length;
    }
      
    const [progressValue, setProgressValue] = useState(k);
    const [totalVideos, setTotalVideos] = useState(vids)
    const [value, setValue] = useState(currentRating);


    async function setRating(rating){
      setValue(rating);
      const formData = {
        userId: user.id,
        courseId: course?._id,
        newRating: rating
      }
      try {
        await axios.post(
          `${backendUrl}/api/course/ratecourse`, formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${user.token}`,
            },
          }
        );
        toast.success("Rating Updated successfully")
      } catch (e) {
        console.log("error");
      }
    }

    return (
      course && (
        <div className="wishblock" key={course._id}>
          <div className="imgcontainer">
            <img
              src={course?.imageUrl}
              width="230px"
              height="100px"
              style={{ height: "138px" }}
            />
            <div>
              <LinearProgress
                variant="determinate"
                value={(progressValue / totalVideos) * 100}
              />
            </div>
          </div>

          <div className="wishitemleft d-flex flex-column">
            <div className="title2">
              <Link
                to={`/coursedescription/${course?._id}`}
                className="courselink"
              >
                {course.title}{" "}
              </Link>
            </div>

            <div className="teacher">
              <a>By {capitalizeFirstLetter(course?.teacher[0]?.firstName)}</a>
            </div>

            <div className="rating">
              <Rating
                color="white"
                precision={0.5}
                name="simple-controlled"
                value={value}
                onChange={(event,newValue)=>{setRating(newValue)}}
                
              />
            </div>

            <div className="price">
              <div>
                <p></p>
              </div>
            </div>
          </div>

          <div className="rightitembar">
            {progressValue / totalVideos == 1 && (
              <Celebration
                onClick={getCertificate}
                sx={{ marginLeft: "3rem", cursor: "pointer" }}
              />
            )}
            <button
              className="buy-now pb-2"
              onClick={() => {
                navigate(`/course/${course._id}`);
              }}
            >
              Go To Course
            </button>
          </div>
        </div>
      )
    );
}


export default CourseCard;