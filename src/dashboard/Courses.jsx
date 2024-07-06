import { useState, useEffect } from "react";
import axios from "axios";
import course1 from "../images/beginnerpic.jpg";
import { Link } from "react-router-dom";
import { backendUrl } from "../url";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/admin/allcourses`
        );
        setCourses(response.data.courses);
        console.log("here");
        console.log(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const fetchTeacherData = async (teacherId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/teacher/getTeacher/${teacherId}`
      );
      return response.data.teacher;
    } catch (error) {
      console.error("Error fetching teacher data:", error);
      return null;
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-thin">List of Courses</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {courses.map((course) => (
          <Link
            to={`admin/courses/${course._id}`}
            key={course._id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
          >
            <img className="w-full" src={course1} alt={course.title} />
            <div className="px-6 py-4">
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{course.title}</div>
              </div>

              <p
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "thin",
                }}
              >
                {course.description.split(" ").slice(0, 10).join(" ")}
                {course.description.split(" ").length > 10 ? " ..." : ""}
              </p>

              <div className="flex items-center px-6 py-2">
                <p className="text-black font-bold mr-2">Price:</p>
                <p className="text-black mt-2">${course.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
