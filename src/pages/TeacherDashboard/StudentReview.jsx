import { Fragment, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./studentReview.css";
import SideBar from "./Sidebar";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { backendUrl } from "../../url";


const StudentReview = () => {

  const teacher  = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const id = teacher.id;

  const [comments, setComments] = useState([]);

  const usercomment = async() => {
    try{
      const response = await axios.get(`${backendUrl}/api/v1/teacher/teacher/studentcomment/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setComments(response.data.comments);
      console.log("Response data:", response.data);
        
    }catch(error){
      console.error("Fetch error:", error.message);
      
    }
  };


  useEffect(() => {
    usercomment();
  }, [id]);

  const columns = [
    { field: "userId", headerName: "Student ID", minWidth: 150, flex: 0.8 },

    { field: "courseId", headerName: "Course ID", minWidth: 150, flex: 0.8 },

    {
      field: "review",
      headerName: "Reviews",
      minWidth: 200,
      flex: 0.7,
    }, 
  ];

  const rows = [];

  comments &&
  Array.isArray(comments) &&
  comments.forEach((comment) => {
    rows.push({
      userId: comment.userId,
      courseId:comment.courseId,
      review: comment.comment,
    });
  });

  return (
    <Fragment>
      <div className="dashboard" >
        <SideBar teacher={teacher} />
        <div className="productListContainer" >
          <h1 id="productListHeading" >ALL Reviews</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default StudentReview;



