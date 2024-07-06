/* eslint-disable react/prop-types */
import { AccordionDetails, Checkbox, TextField } from "@mui/material";
import { EditIcon, Trash2, XCircle } from "lucide-react";
import { Fragment, useState } from "react";
import DeleteWarning from "./DeleteWarning";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../../url";



function CreateLesson({ index, contentChangeHandler, lesson, currentSection, setContent }) {
    // ${lesson.id == params.section ? " bg-slate-200": ""} 
    const [warning, setWarning] = useState(false)
    const [edit, setEdit] = useState(false);
    const [editedTitle, setEditedTitle] = useState(lesson.name);

    async function deleteVideoHandler() {
        setWarning(false)
        try {
            const response = await axios.post(`${backendUrl}/api/course/deletevideo`, { videoId: lesson._id }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })

            if (response.status === 200) {
                setContent((curr) => {return {...curr, sections: curr.sections.map((section) => {
                            if (section._id == currentSection) {
                                return {
                                    ...section, videos: section.videos.filter((less) => {
                                        return less._id != lesson._id;
                                    })}
                            }
                            
                            return section;
                        })
                    }
                })
            }
        } catch (error) {
            console.log(error)
            toast.error("Error deleting video")
        }
    }

    async function editVideoTitleHandler(e){
     
            if(e.key === 'Enter'){
                setEditedTitle(e.target.value)
                try {
                const req = await axios.post(`${backendUrl}/api/course/editVideoTitle`, {lessonId: lesson._id, newName: e.target.value}, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                  })
                  
                  if(req.data.success){
                      setEdit(false)
                        setContent((curr) => {return {...curr, sections: curr.sections.map((section) => {
                                if (section._id == currentSection) {
                                    return {
                                        ...section, videos: section.videos.map((less) => {
                                            if(less._id == lesson._id){
                                                return {...less, name: e.target.value}
                                            }
                                            return less;
                                        })}
                                }      
                                return section;
                            })
                        }})
                    } else {
                      toast.error('Error editing section please try again later!')
                  }
    
                } catch (error) {
                    console.error('Error editing section:', error);
                    toast.error('Error editing section please try again later!');
                }
    
            } else if(e.key === 'Escape'){
                setEdit(false)
                setEditedTitle(lesson.name)
        }
    }


    return (
        <Fragment>
            <DeleteWarning open={warning} setOpen={setWarning} action={deleteVideoHandler} />
            <AccordionDetails key={index} className={`border-b-2  border-b-slate-300  cursor-pointer pl-2`}
                sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, .125)', "& .MuiAccordionDetails-root": "pl-2" } }}
                onClick={() => { contentChangeHandler(lesson) }}>
                <div className="flex flex-row ml-3 mr-4">
                    <div></div>
                    <div className="font-weight-bold my-auto pb-1">{`Lesson ${index + 1}  :  `} {!edit ? lesson.name :
                        <TextField id={`edit-input-${lesson._id}`} 
                                   variant="filled" 
                                   sx={{maxHeight:'6px', marginLeft: '0.3rem', maxWidth: '8rem', '& .MuiInputBase-input': {fontSize: '1rem', paddingTop: 0, paddingBottom: 0}}} 
                                   value = {editedTitle}
                                   onChange={(e)=>{setEditedTitle(e.target.value)}}
                                   onKeyDown={(e)=>editVideoTitleHandler(e)}
                                  //  onChange={}
                                   />
                    }</div>
                    <div className="ml-auto flex" >
                        <div className="align-self-center mr-2" onClick={()=>{setEdit(curr=>!curr)}}>
                            {!edit ? <EditIcon className="hover:text-blue-600" id={`edit-section-${lesson._id}`}/> : 
                              <XCircle className="hover:text-red-800 text-red-500 mt-1" id={`edit-section-${lesson._id}`}/>
                            }
                        </div>
                        <div className="align-self-center mr-2" onClick={() => { setWarning(true) }}>
                            <Trash2 className="hover:text-red-800 text-red-500" id={`delete-section-${lesson._id}`} /></div>
                    </div>
                </div>
            </AccordionDetails>
        </Fragment>
    )

}

export default CreateLesson;