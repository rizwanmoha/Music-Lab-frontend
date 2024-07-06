import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./teacherdashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import webFont from "webfontloader";
import { useSelector } from 'react-redux';
import axios from "axios";
import { backendUrl } from "../../url";


const TeacherDashboard = () => {

  const teacher  = useSelector((state) => state.auth);
  const teacherId = teacher.id;

  const [noofstudents,setNoOfStudents] = useState({numberOfStudents:0});
  const [course, setCourse] = useState({ categoryCounts: {}, numberOfCourse: 0 });
  const [totalMoney, setTotalMoney] = useState({ totalSellingPrice: 0 });


  // For Number of Students
  const NumberOfStudents = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/teacher/teacher/numberofstudent/${teacherId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status);

      if (response.status !== 200) {
        console.error("Error response:", response);
        throw new Error("No data available");
      }
      setNoOfStudents(response.data);
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Error fetching data");
    }
  };



  // For Total Number of Courses and Total Number of Course with Category Wise
  const NoOfCourseAndCourseWithCategory = async() => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/teacher/teacher/noofcourseandcoursewithcategory/${teacherId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status);

      if (response.status !== 200) {
        console.error("Error response:", response);
        throw new Error("No data available");
      }

      setCourse(response.data.responseObject);
      console.log("Response data:", response);
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Error fetching data");
    }
  }


  // Total Earned Money
  const EarnedMoney = async() => {
    try{
      const response = await axios.get(`${backendUrl}/api/v1/teacher/teacher/earnmoney/${teacherId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status);

      if (response.status !== 200) {
        console.error("Error response:", response);
        throw new Error("No data available");
      }

      setTotalMoney(response.data);
      console.log("Response data:", response.data);
    }catch(error){
      console.error("Fetch error:", error.message);
      alert("Error fetching data");
    }
  }




  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    NumberOfStudents();
    NoOfCourseAndCourseWithCategory();
    EarnedMoney();
  }, []);
  

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalMoney.totalSellingPrice],
      },
    ],
  };

  const beginnerCount =course && course.categoryCounts && course.categoryCounts.Beginner ? course.categoryCounts.Beginner : 0;
  const rockCount = course && course.categoryCounts && course.categoryCounts.Rock ? course.categoryCounts.Rock : 0;
  const metalCount = course && course.categoryCounts && course.categoryCounts.Metal ? course.categoryCounts.Metal : 0;
  const bluesCount = course && course.categoryCounts && course.categoryCounts.Blues ? course.categoryCounts.Blues : 0;
  const acousticCount = course && course.categoryCounts && course.categoryCounts.Acoustic ? course.categoryCounts.Acoustic : 0;
  const musicTheoryCount = course && course.categoryCounts && course.categoryCounts.MusicTheory ? course.categoryCounts.MusicTheory : 0;
  const guitarToneCount = course && course.categoryCounts && course.categoryCounts.GuitarTone ? course.categoryCounts.GuitarTone : 0;
  const guitarTechniqueCount = course && course.categoryCounts && course.categoryCounts.GuitarTechnique ? course.categoryCounts.GuitarTechnique : 0;


  const doughnutState = {
    labels: ["Beginner", "Rock", "Metal", "Blues", "Acoustic", "Music Theory", "Guitar Tone", "Guitar Technique"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4", "#FFC0CB", "#FFD700", "#008080", "#00FF00", "#FF8C00", "#FF6347"],
        hoverBackgroundColor: ["#4B5000", "#35014F", "#FF69B4", "#FFD700", "#20B2AA", "#32CD32", "#FFA500", "#FA8072"],
        data: [beginnerCount, rockCount, metalCount, bluesCount, acousticCount, musicTheoryCount, guitarToneCount, guitarTechniqueCount],
      },
    ],
  };

  return (

    <div className="dashboard">
      
      <Sidebar teacher={teacher} />

      <div className="dashboardContainer">
        <Typography component="h1">Teacher Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              {teacher.firstName + " " + teacher.lastName}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="#">
              <p>Students</p>
              <p>{noofstudents.numberOfStudents}</p>
            </Link>
            <Link to="#">
              <p>Courses</p>
              <p>{course.numberOfCourse}</p>
            </Link>
            <Link to="#">
              <p>Earn</p>
              <p>{totalMoney.totalSellingPrice}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
