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
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import { backendUrl } from "../url";

const ListOfTeachers = () => {
  const theme = useTheme();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  console.log(backendUrl);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/admin/universalSearch?query=${searchQuery}`
        );
        setUsers(response.data.users);
        console.log(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleViewProfile = (userId) => {
    
    
   
    navigate(`/studenteditprofile/${userId}`);
  };


  // navigate(`/studenteditprofile/${userId}`);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl text-white">List of Users</h1>
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

            {/* backgroundColor: "#f2f2f2" */}
            <TableCell sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6", borderLeft: "1px solid white", borderTop: "1px solid white",backgroundColor: "#f2f2f2"  }}>
          {/* <Checkbox color="primary" /> */}
        </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6",  borderLeft: "1px solid white" ,  borderTop: "1px solid white", backgroundColor: "#f2f2f2" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6" ,   borderTop: "1px solid white" ,  backgroundColor: "#f2f2f2" }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6" ,  borderTop: "1px solid white" , backgroundColor: "#f2f2f2"}}
              >
                Courses Purchased
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6" ,  borderTop: "1px solid white" , backgroundColor: "#f2f2f2" }}
              >
                View Profile
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bolder", color: "#3b82f6" ,  borderTop: "1px solid white" , backgroundColor: "#f2f2f2" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                {/* <TableCell sx={{ color: 'white' }}>{user.firstName} &nbsp; {user.lastName}</TableCell> */}
                <TableCell sx={{ borderLeft: "1px solid white" }}>
            <Checkbox color="primary" />
          </TableCell>
                <TableCell sx={{ color: "white", borderLeft: "1px solid white" }}>
                  {user.fullname
                    ? user.fullname
                    : `${user.firstName} ${user.lastName}`}
                </TableCell>
                <TableCell sx={{ color: "white" }}>{user.email}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.courses.length}</TableCell>
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
                    onClick={() => handleViewProfile(user._id)}
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
                    onClick={() => handleViewProfile(user._id)}
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
