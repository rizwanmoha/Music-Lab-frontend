
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../components/CoursePage/Dropdown";
import MainContent from "../../components/CoursePage/MainContent";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import axios from "axios";
import { backendUrl } from "../../url";



function CourseLayout(){

    const params = useParams();
    const user =  useSelector(state => state.auth);

    const [currentSection, setCurrentSection] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [courseInfo,setCourseInfo] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const [progress, setProgress] = useState({'1': {id:1}});
    
    
    useEffect(()=>{
      async function getCourseProgress(){
        const data = {
          'userId':user.id, 'courseId' : params.courseId
        }
        const response = await axios.post(`${backendUrl}/api/v1/user/course/get-progress`, data , 
         { headers: {
            'Content-Type': 'application/json',
            'Authorization': user.token
        }
        }
      )

      let objectMap = {};
      await response.data.progress.forEach((obj) => {
        objectMap[obj.videoId] = obj;
        }
      );

      setProgress(objectMap);
        
    }

    getCourseProgress();

  },[])

    useEffect(()=>{
      async function getCourseInfo(){
          const response = await fetch(`${backendUrl}/api/course/${params.courseId}`,{
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
          })
          const data = await response.json();
          setCourseInfo(data.course)
          setCurrentVideo(data.course.sections[0]?.videos[0])
          setCurrentSection(data.course.sections[0]?._id)
          setInitialLoading(false)
        }


      getCourseInfo(params.courseid);
  
    },[])

    return (
      !initialLoading && (
        <div className="relative h-auto flex bg-gray-900">
        
        <div className="flex flex-col">
            <div className="w-[76vw] h-fit">
               <MainContent currentVideo={currentVideo} currentSection={currentVideo?.title} content={courseInfo} video={currentVideo}/>
               <Box sx={{marginTop: '1rem', padding: 2}}>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl mb-4"> Course Description </div>
                   <div> {courseInfo.description} </div>
                </div>
               </Box>
            </div>
            <div className="absolute inset-y-0 overflow-auto scroll-y right-0 mt-2 w-[24vw] bg-neutral-200">
            
             { courseInfo.sections.map((section, index)=>{
                
                    return(
                        <Dropdown key={section._id} id={section._id} num={index+1} currentSection={currentSection} 
                        setCurrentSection={setCurrentSection} title={section.name} progress={progress} setProgress={setProgress}
                        content={section?.videos} setVideo={setCurrentVideo}/>   
                    )
                })
            }
            </div>
        </div>

        </div>
      )
      
    )
}

export default CourseLayout;