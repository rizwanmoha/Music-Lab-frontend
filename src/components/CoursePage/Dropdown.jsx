/* eslint-disable react/prop-types */
import { Accordion, AccordionDetails, AccordionSummary, Checkbox } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"

import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { backendUrl } from "../../url";

function Dropdown({currentSection, setCurrentSection, id, title, num, content, setVideo, progress, setProgress}) {

    console.log('rerender')
    const user  = useSelector(state => state.auth)
    const navigate = useNavigate();
    const params = useParams();
    

    const [finished, setFinished] = useState(0);
    
    useEffect(()=>{
        let count = 0;
        content?.forEach((lesson)=>{
            if(progress[lesson._id]?.watched){
                count++;
            }
        })
        setFinished(count);

    },[progress])

    function clickHandler(){
        console.log(title)
        if(currentSection != id){
            setCurrentSection(id)
            return ;
        } else
        setCurrentSection("")
    }
    
    function videoChangeHandler(lesson){
        setVideo(lesson)
    }

    async function videoWatchedHandler(id){
        setProgress({...progress, [id]: {...progress[id], watched: !progress[id]?.watched}})
        const formData = new FormData();
        formData.append("userId",user.id);
        formData.append("videoId", id);
        formData.append("courseId", params.courseId)
        const data1 = {
            userId : user.id,
            videoId : id,
            courseId : params.courseId
        }
        console.log(formData)
        try {
            const res = await axios.post(`${backendUrl}/api/v1/user/course/progress`, data1, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : user.token
                    }    
                  }
                )
            console.log(res)

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Accordion expanded={currentSection == id ? true : false} sx={{marginTop: '1rem'}} onChange={clickHandler} className="& .MuiPaper-root mt-0 mb-0">
        <AccordionSummary sx={{borderBottom: '2px solid rgba(0, 0, 0, .25)',  maxHeight: '64px', minHeight: '64px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)'}}}
        className="shadow-md"
            expandIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className="flex">
                <div></div>
                    <div className="flex flex-col">
                        <div className="font-weight-bold">{`Section ${num}: ${title}`}</div>
                        {`${finished} / ${content?.length}`} | {(content?.length > 0) ? `${ Math.round(finished/content?.length * 100)}%` : "0 %"}
                    </div>
                </div>
        </AccordionSummary>
        
        {content?.map((lesson, index)=>{
            {/* console.log(progress[lesson._id]?.watched); */}
            return (
                <AccordionDetails key={index} className={`border-b-2  border-b-slate-300  cursor-pointer pl-2 
                ${lesson.id == params.section ? " bg-slate-200": ""} `}
                sx={{'&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)', "& .MuiAccordionDetails-root": "pl-2"}} }
                 onClick={()=>{videoChangeHandler(lesson)}}>
                    <div className={`flex flex-row`} >
                        <div>

                        <Checkbox 
                        onClick={()=>{videoWatchedHandler(lesson._id)}} 
                        checked={progress[lesson._id]?.watched}  
                        inputProps={{ 'aria-label': 'controlled' }}/></div>

                        <div className="font-weight-bold my-auto pb-1 pt-1">{`Lesson ${index+1}: ${lesson.name}`}</div>
                    </div>
                </AccordionDetails>
            )
        })
    }
    </Accordion>
    )
}


export default Dropdown;