
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainContent from "../../components/CoursePage/MainContent";
import {useParams } from "react-router";
import { Box } from "@mui/material";
import { AddCircleRounded } from "@mui/icons-material";
import CreateCourseDropdown from "./CreateCourseDropdown";
import axios from "axios";
import background from '../../images/contactUsBg.jpg';
import { backendUrl } from "../../url";



function CreateCourseLayout(){

    const params = useParams();
    const [currentSection, setCurrentSection] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");
    const [addSection, setAddSection] = useState(false);
    const [courseInfo, setCourseInfo] = useState({sections:[]})
    
    const [currentVideo, setCurrentVideo] = useState(null);
    
    
    useEffect(()=>{
        async function getCourseInfo(id){
            const response = await fetch(`${backendUrl}/api/course/${id}`,{
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
        }

        getCourseInfo(params.courseid);
    
    },[])


    useEffect(()=>{
        setCurrentTitle(courseInfo?.sections?.find(section=>section._id === currentSection)?.name)
    },[currentSection])



   async function addSectionHandler(){

    const formData = {
        courseId: params.courseid,
        sectionName: 'Enter Name'
    }
    
    const response = await axios.post(`${backendUrl}/api/course/addsection`, formData,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })

    setAddSection(true);

    setCourseInfo(curr=> {
        return {curr, sections : [...curr.sections, response.data.section] }
    })

   }
    
    return (

        <div className="relative h-auto flex pb-6" >
        
        <div className="flex flex-col">
            <div className="w-[72vw] h-fit">
               <MainContent currentVideo={currentVideo} currentSection={currentTitle} content={courseInfo}/>
               <Box sx={{marginTop: '0.2rem',marginLeft:'1rem', padding: 4}}>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl mt-4"> Course Description </div>
                   <div className="mt-4"> {courseInfo?.description} </div>
                </div>
               </Box>
            </div>
            <div className="absolute inset-y-0 right-0 w-[28vw] bg-slate-200 rounded-lg overflow-y-auto">
                
               { courseInfo?.sections?.map((section, index)=>{
                {/* console.log(section.videos) */}
                    return(
                        <CreateCourseDropdown key={section._id} id={section._id} currentSection={currentSection} setCurrentSection={setCurrentSection} title={section.name} num={index+1} total={section.videos?.length} content={section?.videos} setContent={setCourseInfo} setCurrentVideo={setCurrentVideo}  />    
                    )
                })
            }

            <div onClick={addSectionHandler}>
            <div className="flex flex-col mt-4 cursor-pointer">
            <div className="width-[100%] flex justify-center"><AddCircleRounded sx={{color:"black"}}/></div>
            <div className="mx-auto  text-center bg-black text-white font-bold">
                Add New Section
            </div>
            </div>
            </div>


            <div>

            </div>
    
        </div>
            </div>
                </div>
    )
}

export default CreateCourseLayout;