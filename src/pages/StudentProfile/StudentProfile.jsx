import  { useState } from "react";
import "./studentProfile.css";
import Image from "react-bootstrap/Image";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import { Link, NavLink } from "react-router-dom";
import profileImage from "./teacher_Profile_image copy.png"
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { backendUrl } from "../../url";

const Student = () => {
  const user = useSelector(state => state.auth)

  const id = user.id;

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [student, setStudent] = useState(user);



  const UserData = async() =>{
    if(!user?.isLoggedin){
      return ;
    }

    try{
      const response = await axios.get(`${backendUrl}/api/v1/user/studenteditprofile/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      if(response.status == 200){
        console.log(response.data)
        setStudent(response.data);
        
      }
    }catch(error){
      console.log(error);
    }
  };


  useEffect(()=>{
    async function getCourseInfo(){
      if(!user?.isLoggedin){
        return ;
      }
      try {
        const req = await axios.get(`${backendUrl}/api/v1/user/your-courses/${user?.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': user?.token
          }
        })

        if(req.status == 200){
          console.log(req.data)
          setCourses(req.data.courses)
          setCoursesLoading(false)
        }
      } catch (e){
        console.log(e)
      }
    }

    getCourseInfo();

    UserData();
      
   },[])


  return (
    <>
     

      <div className="body_container">
        <div className="container">
          <div className="row circle_img">
            <div className="col-10 circle_img_col d-flex align-items-start justify-content-center">
             
              <img
                className="circle_image"
                src={
                  student && student.avatar
                    ? student.avatar.url
                    : profileImage
                }
                alt="Student Profile"
              />

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5" style={{marginTop: "95px"}}>
              <div className="text-black mx-20 text-lg">{student.firstName + " " + student.lastName}</div>
              <div className="text-black mx-20 text-lg" style={{marginTop:"20px"}}>  {student.username}</div>
              <br />
              <br />
              <span className="text-black mx-20 text-lg" >
                <PlaceIcon /> Location : {student.location}
              </span>
              <br />
              <br />
              <span className="text-black mx-20 text-lg">
                <EmailIcon /> Email : {student.email}
              </span>
              <br />
              <br />
              <br />
              <br />
              <div className="btn-main mx-20">
                <Link to={`/studenteditprofile/${id}`}>
                  <button className="btn-button">Edit Profile</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 offset-1" style={{marginTop: "95px"}}>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl text-center">
                specializes in a particular musical instrument
              </div>
              <div className="content text-black text-center text-2xl">Piano</div>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                YOUR BIO
              </div>
              <div className="content text-black text-2xl">
                Hi, I'm passionate about playing the piano and learning music.
                I'm currently enrolled in piano classes at XYZ Music School.
              </div>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl text-center" style={{marginTop:"10px"}}>
                Music Genres
              </div>
              <div className="content text-black text-2xl text-center">Classical, Jazz</div>
              
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl text-center" style={{marginTop:"15px"}}>
                YOUR Upcoming Performance
              </div>
              
                <div className="content text-black text-2xl">Concert at City Hall - 05/15/2023</div>
                
              
            </div>
          </div>
        </div>

        <div className="upload-heading d-flex justify-content-center align-items-center">
          <h1 style={{color:"black"}}>YOUR PURCHASED COURSE</h1>
        </div>
        <div className="flex flex-row">
        {!coursesLoading ? ( courses.map((course, index) => {
        return ( <div className="container" key={course.course._id}>
          
          <div className="row card_container justify-content-center" id="col1">
            <div className="col-md-12">
              <Link to={`/coursedescription/${course.course._id}`}>
                <img
                  src={course.course.imageUrl}
                  style={{ width: "360px", height: "180px" }}
                  className="grid-element "
                >

                </img>
              </Link>
              <p className="text-black text-center">{course.course.title}</p>
            </div>
          </div>
        </div>)}
        )) : ("Loading")
        }
        </div>

      </div>
    </>
  );
};

export default Student;
