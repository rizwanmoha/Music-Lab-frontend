import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import course1 from "../images/beginnerpic.jpg";
import { backendUrl } from "../url";

const SingleCourse = () => {
  const { courseId } = useParams();
  
  const [courseData, setCourseData] = useState({});
  const [teacherData, setTeacherData] = useState({});
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/course/singlecourse/:${courseId}`
        );

        setCourseData(response.data.course);
        
        const teacherResponse = await axios.get(
          `${backendUrl}/api/v1/teacher/getTeacher/${response.data.course.teacher}`
        );

        setTeacherData(teacherResponse.data.teacher);
        const commentsResponse = await axios.get(
          `${backendUrl}/api/comments/${courseId}`
        );

        setComments(commentsResponse.data.comments);
        console.log(teacherData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center my-4 mx-3">
        <div className="mr-4">
          <img src={course1} alt="course image"  className="transform transition-transform hover:translate-x-4 hover:translate-y-2"/>
        </div>
        <div className="flex-grow">
          {/* <div className="flex mx-3 items-start">
            <h1 className="mr-2">Title &nbsp; :</h1>
            <p>{courseData.title}</p>
          </div> */}
          <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-2xl text-gray">Title  :</h1>
            <p className="font-thin mt-3">{courseData.title}</p>
        </div>

          <div className="flex mx-1 items-start align-items-center">
            <h1 className="mr-2 font-bold text-2xl text-gray">Description :</h1>
            <p className="font-thin mt-3">{courseData.description}</p>
          </div>
          <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-2xl text-gray">Price :</h1>
            <p className="font-thin mt-3">{courseData.price}</p>
          </div>
          {/* <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-2xl text-gray">Students Purchase :</h1>
            <p className="font-thin">{courseData.purchases}</p>
          </div> */}

          <div class="flex mx-3 items-center"> 
    <h1 class="mr-2 font-bold text-2xl text-gray">Students Purchase :</h1>
    <p class="font-thin mt-3">{courseData.purchases}</p> 
</div>
          {/* <div className="flex mx-3 items-start align-items-center">
            <h1 className="mr-2 font-bold text-2xl text-gray">Teacher : </h1>
            <p className="font-thin mt-3">{teacherData.firstName } &nbsp; {teacherData.lastName}</p>
          </div> */}
          <div className="flex mx-3 items-start align-items-center">
    <h1 className="mr-2 font-bold text-2xl text-gray">Teacher : </h1>
    {teacherData.fullname ? (
        <p className="font-thin mt-3">{teacherData.fullname}</p>
    ) : (
        <p className="font-thin mt-3">{teacherData.firstName} &nbsp; {teacherData.lastName}</p>
    )}
</div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
