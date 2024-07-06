
import "./sidebar.css";
import logo from "../../images/logo-new.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const Sidebar = ({teacher}) => {
  return (
    <div className="sidebar bg-white flex flex-col py-16 ">
      <Link className=" ml-5  " to="/">
        <img
          className=" transition-all duration-500 filter hover:drop-shadow-md "
          src={logo}
          alt="Music Mastery"
        />
      </Link>

      <Link to="/teacher/dashboard">
        <p
          className="font-roboto text-lg font-medium"
          style={{ color: "gray", paddingTop: "60px" }}
        >
          <DashboardIcon
            className="text-gray-500 hover:text-tomato"
            style={{ color: "gray" }}
          />
          Dashboard
        </p>
      </Link>



      {/* <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon style={{ color: "gray" }} />}
          defaultExpandIcon={<ImportExportIcon style={{ color: "gray" }} />}
          style={{ color: "gray" }}
        >
          <TreeItem nodeId="1" label="Courses" style={{ color: "gray" }}>
            <Link to={`/dashboardteacherproductlist/${teacher.id}`}>
              <TreeItem
                nodeId="2"
                label="All"
                style={{ color: "gray", "&:hover": { color: "gray" } }}
                icon={<PostAddIcon style={{ color: "gray" }} />}
              />
            </Link>

            <Link to="#">
              <TreeItem
                nodeId="3"
                label="Create"
                style={{ color: "gray" }}
                icon={<AddIcon style={{ color: "gray" }} />}
              />
            </Link>
          </TreeItem>
        </TreeView>
      </Link> */}


      
      <Link to={`/dashboardteacheruploadcourses/${teacher.id}`}>
        <p style={{ color: "gray" }}>
          <DriveFolderUploadIcon style={{ color: "gray" }} />
          <span>UploadCourses</span>
        </p>
      </Link>



      <Link to={`/dashboardteacherprofile/${teacher.id}`}>
        <p style={{ color: "gray" }}>
          <AccountBoxIcon style={{ color: "gray" }} />
          <span>Profile</span>
        </p>
      </Link>

      <Link to={`/teachereditprofile/${teacher.id}`}>
        <p style={{ color: "gray" }}>
          <BorderColorIcon style={{ color: "gray" }} />
          <span>EditProfile</span>
        </p>
      </Link>
      <Link to={`/teacher/studentlist/${teacher.id}`}>
        <p style={{ color: "gray" }}>
          <PeopleIcon style={{ color: "gray" }} /> Students
        </p>
      </Link>
      <Link to="/teacher/reviews">
        <p style={{ color: "gray" }}>
          <RateReviewIcon style={{ color: "gray" }} />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
