/* eslint-disable react/prop-types */
import { AddCircleRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button,Container, TextField } from "@mui/material";
import axios from "axios";
import { Fragment, useState } from "react";
import { useParams } from "react-router"
import { toast } from "react-toastify";
import LinearWithValueLabel from "./LinearProgressNumbered";
import {  EditIcon,  Trash2, XCircle } from "lucide-react";
import DeleteWarning from "./DeleteWarning";
import CreateLesson from "./CreateLesson";
import { backendUrl } from "../../url";
import { useSelector } from "react-redux";

const API_KEY = '396353668692966'
const CLOUD_NAME = 'djcg8mvbx'

function CreateCourseDropdown({id, currentSection, setCurrentSection, title, num, total, content, setContent, setCurrentVideo}) {

    const user = useSelector(state => state.auth) 

    const params = useParams();
    const [addSection, setAddSection] = useState(false);
    const [editSection, setEditSection] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const [finished, setFinished] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [warning, setWarning] = useState(false);

    function clickHandler(e){
        console.log(e)
       const editInp =  document.getElementById(`edit-input-${id}`)
       if((document.getElementById(`edit-section-${id}`)?.contains(e.target) === false && 
          document.getElementById(`delete-section-${id}`)?.contains(e.target) === false) && (editInp === null || editInp.contains(e.target) === false)){
       
            if(currentSection != id){
               setCurrentSection(id)
            return ;
        } else
        setCurrentSection("")
      }
    }

    async function editSectionHandler(e){
        if(e.key === 'Enter'){
            setEditedTitle(e.target.value)
            try {
            const req = await axios.post(`${backendUrl}/api/course/editsection`, {sectionId: id, newName: e.target.value}, {
                headers: {
                    'Content-Type': 'application/json',
                }
              })
              
              if(req.data.success){
                  setEditSection(false)
                  setContent((curr)=>{return {...curr, sections : curr.sections.map((section)=>{
                      if(section._id == id){
                          return {...section, name: e.target.value}
                      }
                      return section;
                  })
                }}
              )} else {
                  toast.error('Error editing section please try again later!')
              }

            } catch (error) {
                console.error('Error editing section:', error);
                toast.error('Error editing section please try again later!');
            }

        } else if(e.key === 'Escape'){
            setEditSection(false)
            setEditedTitle(title)
        }
    }

    async function deleteSectionHandler(){

        try {
            const req = await axios.post(`${backendUrl}/api/course/deletesection`, {sectionId: id}, {
                headers: {
                    'Content-Type': 'application/json',
                }
              })
              
              if(req.data.success){
                  setContent((curr)=>{return {...curr, sections : curr.sections.filter((section)=>{
                      return section._id != id
                  })
                }}
              )} else {
                  toast.error('Error deleting section please try again later!')
              }

            } catch (error) {
                console.error('Error deleting section:', error);
                toast.error('Error deleting section please try again later!');
            }
    }

    function contentChangeHandler(id){
        setCurrentVideo(id)
    }

    


    const [videoName, setVideoName] = useState("");
    const [video, setVideo] = useState(null);
    
      const handleNameChange = (event) => {
        setVideoName(event.target.value);
      };

      const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
      }

  async function addContentHandler(e){
        e.preventDefault();
        if(!videoName){
          toast.error("Add Video Title")
          return ;

        }
        try {
          setUploading(true);
          let response = await axios.get(`${backendUrl}/api/course/get-signature`);

          const {signature, timestamp} =  response.data;

          const form = new FormData()
          form.append('file', video);
          form.append('folder', 'MastersOfMusic')
          
          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload?api_key=${API_KEY}&timestamp=${timestamp}&signature=${signature}`, form , {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
              const percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              console.log(percentage)
              setUploadPercentage(percentage);
            }
          })

          
        
          let video_res = await axios.post(`${backendUrl}/api/course/addcontent`, {courseId: params.courseid, sectionId: currentSection, videoUrl: res.data.url, videoName: videoName}, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': user.token
            }})

          setVideoName("");
          setVideo(null);
          setUploadPercentage(0);
          setUploading(false);

          setContent((curr)=>{return {...curr, sections : curr.sections.map((section)=>{
            if(section._id == currentSection){
              return {...section, videos: [...section.videos, video_res.data.vid]}
            }
            return section;
          })}})

          // setDropdownVideo((curr) => {return [...curr, video_res.data.vid]})

        } catch (error) {
          console.error('Error uploading video:', error);
          setUploading(false);
          setUploadPercentage(0);
          toast.error('Error uploading video please try again later!');
        }
        // console.log(response)
        setAddSection(false)
    }

    return (

        <Fragment>
        <DeleteWarning open={warning} setOpen={setWarning} action={deleteSectionHandler}/>
        <Accordion expanded={currentSection == id ? true : false} sx={{marginTop: '1rem'}} onChange={e=>{clickHandler(e)}} className="& .MuiPaper-root mt-0 mb-0">
        <AccordionSummary sx={{borderBottom: '2px solid rgba(0, 0, 0, .25)',  maxHeight: '64px', minHeight: '64px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)'}}}
        className="shadow-md"
            expandIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className="flex">
                <div></div>
                    <div className="flex flex-col">
                        <div className="font-weight-bold">{`Section ${num}  :  `} { !editSection ? title :       
                        <TextField id={`edit-input-${id}`} 
                                   variant="filled" 
                                   sx={{maxHeight:'12px', marginLeft: '1rem', maxWidth: '10rem', '& .MuiInputBase-input': {fontSize: '1.1rem', paddingTop: 0, paddingBottom: 0}}} 
                                   value = {editedTitle}
                                   onChange={(e)=>{setEditedTitle(e.target.value)}}
                                   onKeyDown={(e)=>editSectionHandler(e)}
                                  //  onChange={}
                                   />}</div>


                        {total !== 0 ? `${finished} / ${total}` : '0 / 0'}
                    </div>

                </div>
                <div className="ml-auto flex" >
                <div className="align-self-center mr-2" onClick={()=>{setEditSection(curr => !curr)}}>
                            {!editSection ? <EditIcon className="hover:text-blue-600" id={`edit-section-${id}`}/> : 
                              <XCircle className="hover:text-red-800 text-red-500" id={`edit-section-${id}`}/>
                            }
                </div>
                <div className="align-self-center mr-2" onClick={()=>{setWarning(true)}}>                           
                <Trash2 className="hover:text-red-800 text-red-500"  id={`delete-section-${id}`}/></div>
                </div>
        </AccordionSummary>
        
        {content?.map((lesson, index)=>{
            return (
              <CreateLesson index={index} contentChangeHandler={contentChangeHandler} lesson={lesson} currentSection={currentSection} key={lesson._id} content={content} setContent={setContent} />     
            )
        })}

        <AccordionDetails>
        <div onClick={()=>{setAddSection(true)}}>
            <div className="flex flex-col mt-4 cursor-pointer">
            <div className="width-[100%] flex justify-center"><AddCircleRounded sx={{color:"black"}}/></div>
            <div className="mx-auto  text-center bg-black text-white font-bold">
                Add New Content
            </div>
            </div>
        </div>
        {addSection && 
            <Container maxWidth="sm" sx={{marginTop: '1rem'}}>
      <form onSubmit={(e)=>{addContentHandler(e);}}>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            label="Video Title"
            name="textInput"
            value={videoName}
            onChange={handleNameChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            name="videoInput"
            type="file"
            // value={video}
            onChange={handleVideoChange}
          />
        </Box>
        <Box marginBottom={2} display="flex" justifyContent="center">
          {!uploading ? <Button variant="contained" color="primary" type="submit" sx={{marginY: "auto"}}>
            Submit
          </Button> : ( uploadPercentage != 0 ? <LinearWithValueLabel progress={uploadPercentage}/> : ("Starting Upload..."))}
        </Box>
      </form>


    </Container>}
        </AccordionDetails>
    
    </Accordion>
    </Fragment>
    )
    }




export default CreateCourseDropdown;