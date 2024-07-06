import { Fragment, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./studentlist.css";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from "react-router";
import { toast } from 'react-toastify';
import { backendUrl } from "../../url";

const StudentList = () => {

  
  
  const teacher  = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {id} = useParams();

  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/teacher/teacher/studentlist/${id}`,
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

      setStudents(response.data.students);
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Error fetching data");
    }
  };


  const deleteUserHandler = async(id) => {
    try{
      const res = await axios.delete(`${backendUrl}/api/v1/teacher/teacherdashboard/student/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });
        if(res.status === 200){
          toast.success("Student Successfully Deleted!");
        }
    }catch(error){
      console.error("Fetch error:", error.message);
      alert("Student is not deleted");
    }
  };


  useEffect(() => {
    fetchStudents();
  }, [id]);

  const columns = [
    { field: "id", headerName: "Student ID", minWidth: 150, flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 0.7,
    },
    {
      field: "firstName",
      headerName: "FirstName",
      minWidth: 150,
      flex: 0.4,
    },

    {
      field: "lastName",
      headerName: "LastName",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
             <Button
                onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  students &&
  Array.isArray(students) &&
  students.forEach((item) => {
    rows.push({
      id: item._id,
      email: item.email,
      firstName: item.firstName,
      lastname: item.lastName,
    });
  });

  return (
    <Fragment>
      

      <div className="dashboard" >
        <SideBar teacher={teacher} />
        <div className="productListContainer" >
          <h1 id="productListHeading" >ALL Students</h1>

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

export default StudentList;



