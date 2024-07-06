import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material/styles";
import BasicBars from "./Chart";
import BasicLineChart from "./LineCharts";

import { backendUrl } from "../url";

const Purchases = () => {
  const theme = useTheme();
  const [teachers, setTeachers] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [timeStamp , settimeStamp] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchPurchaseData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/admin/getpurchases`
        );

        setPurchaseData(response.data.purchases);
        settimeStamp(response.data.timestamp);
        console.log(purchaseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPurchaseData();
  }, [searchQuery]);
  // {purchase.courseId.title}

  // {purchase.userId ? (
  //   purchase.userId.firstName && purchase.userId.lastName ? (
  //     <span>
  //       {purchase.userId.firstName} {purchase.userId.lastName}
  //     </span>
  //   ) : (
  //     <span>Rizwan</span>
  //   )
  // ) : (
  //   <span>Rizwan</span>
  // )}

  return (
    <>
      {/* <div className="flex justify-center">
        <h1 className="font-bold text-4xl text-white">Sales </h1>
      </div> */}
      <div className="flex justify-center bg-white">
        <h1 className="font-bold text-4xl text-red-400">Sales</h1>
      </div>
      <div className="display flex bg-white">
        <BasicBars />
        <BasicLineChart />
      </div>

      <div className="flex justify-center bg-white mb-0">
        <h1 className="font-bold text-4xl text-red-400">
          Transaction History{" "}
        </h1>
      </div>
      <TableContainer
        component={Paper}
        sx={{
         
          backgroundColor: "#1d2634",
          marginBottom: 5,
        }}
      >
        <Table sx={{ color: "white" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#3b82f6",
                  borderLeft: "1px solid white",
                  borderTop: "1px solid white",
                  backgroundColor: "#f2f2f2",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#3b82f6",
                  borderLeft: "1px solid white",
                  borderTop: "1px solid white",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Student Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#3b82f6",
                  borderLeft: "1px solid white",
                  borderTop: "1px solid white",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Course Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#3b82f6",
                  borderLeft: "1px solid white",
                  borderTop: "1px solid white",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Teacher Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#3b82f6",
                  borderLeft: "1px solid white",
                  borderTop: "1px solid white",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchaseData.map((purchase , index) => (
              <TableRow key={purchase._id}>
                <TableCell sx={{ borderLeft: "1px solid white" }}>
                  <Checkbox color="primary" />
                </TableCell>

                <TableCell
                  sx={{ color: "white", borderLeft: "1px solid white" }}
                >
                  {[purchase.firstName, purchase.lastName].join(" ")}
                </TableCell>

                <TableCell sx={{ color: "white" }}>
                  {" "}
                  {purchase.title ? purchase.title : "Learn Piano"}
                </TableCell>

                <TableCell sx={{ color: "white" }}>
                  {purchase.teachers && purchase.teachers.length > 0 ? (
                    purchase.teachers[0].firstName &&
                    purchase.teachers[0].lastName ? (
                      <span>
                        {purchase.teachers[0].firstName}{" "}
                        {purchase.teachers[0].lastName}
                      </span>
                    ) : (
                      <span>null</span>
                    )
                  ) : (
                    <span>null</span>
                  )}
                </TableCell>

                <TableCell sx={{ color: "white" }}>
                  {/* {purchase.updatedAt.substring(0, 10)} */}
                  {timeStamp[index] && timeStamp[index].updatedAt
          ? timeStamp[index].updatedAt.substring(0, 10)
          : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Purchases;
