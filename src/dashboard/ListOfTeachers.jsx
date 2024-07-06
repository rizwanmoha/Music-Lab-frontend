import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import { backendUrl } from "../url";
import Checkbox from '@mui/material/Checkbox';

const ListOfTeachers = () => {
  const theme = useTheme();
  const [teachers, setTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/admin/teacheruniversalSearch?query=${searchQuery}`
        );
        setTeachers(response.data.teachers);
        console.log(teachers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleViewProfile = (teacherId) => {
    
    
   
    navigate(`/teachereditprofile/${teacherId}`);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl text-white">List of Teachers</h1>
      </div>

      <div>
        <div className="w-full px-3 mb-5 flex justify-end">
          <div className="flex">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full pl-10 pr-3 py-2  ml-4 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <TableContainer
        component={Paper}
        sx={{
          marginTop: theme.spacing(4),
          backgroundColor: "#1d2634",
          marginBottom: 5,
        }}
      >
        <Table sx={{ color: "white" }}>
          <TableHead>
            <TableRow>
            <TableCell sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}>
          
        </TableCell>
              <TableCell
                // sx={{ fontSize: "5xl", fontWeight: "bolder", color: "white" }}
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}
              >
                Name
              </TableCell>
              <TableCell
                // sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}
              >
                Email
              </TableCell>
              <TableCell
                // sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}
              >
                Master's
              </TableCell>
              <TableCell
                // sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}
              >
                Experience
              </TableCell>
              <TableCell
                // sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}
              >
                View Profile
              </TableCell>
              <TableCell
                // sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher._id}>
              <TableCell sx={{ borderLeft: "1px solid white" }}>
            <Checkbox color="primary" />
          </TableCell>
                <TableCell sx={{ color: "white", borderLeft: "1px solid white" }}>
                  {teacher.fullname
                    ? teacher.fullname
                    : `${teacher.firstName} ${teacher.lastName}`}
                </TableCell>
                <TableCell sx={{ color: "white" }}>{teacher.email}</TableCell>
                
                <TableCell sx={{ color: "white" }}>
                  {teacher.master ? teacher.master : "Not done"}
                </TableCell>
                
                <TableCell sx={{ color: "white" }}>
                  {teacher.experience ? teacher.experience : "Not experience"}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#3b82f6",
                      },
                    }}
                    onClick={() => handleViewProfile(teacher._id)}
                  >
                    View Profile
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#ef4444",
                      },
                    }}
                    onClick={() => handleViewProfile(teacher._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListOfTeachers;
