import { Fragment, useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom"
import Footer from "./Footer/Footer";
import DefaultHeader from './Header/DefaultHeader';
// import TeacherHeaderTest from "./Header/TeacherHeaderTest";
import TeacherHeader from "./Header/TeacherHeaderTest";

import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import TeacherHeaderTest from "./Header/TeacherHeaderTest";
import StudentHeaderTest from "./Header/StudentHeaderTest";
import AdminHeader from './Header/AdminHeader';
import WishlistPage from "./Wishlist/Wishlist";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import HeaderBar from "../components/Header";
// import SideBar from "../components/Sidebar";
// import HeaderBarUnsigned from "../components/Header2";

// import classes from './RootLayout.module.css'

function RootLayout(){
    
    const user = useSelector(state => state.auth);
    const location = useLocation();
    const [showHeader,setShowHeader] = useState(true);

    useEffect(()=>{
        if(location.pathname.split('/')[1] == 'checkout'){
            setShowHeader(false)
        } else {
            setShowHeader(true)
        }
    },[location])
    return(
    
    <Fragment>  
            

            <ToastContainer />
            {/* <Header/> */}
            <div className="relative z-[10]">
          {/* {showHeader ? (user?.role?.toLowerCase() == 'teacher' ? <TeacherHeaderTest/> : (user?.role?.toLowerCase() == 'user' ? <StudentHeaderTest/> :<DefaultHeader/>)) : ""} */}
          {showHeader ? (
    user?.role?.toLowerCase() === 'teacher' ? <TeacherHeaderTest/> :
    user?.role?.toLowerCase() === 'user' ? <StudentHeaderTest/> :
    user?.role?.toLowerCase() === 'admin' ? <AdminHeader/> : <DefaultHeader/>
) : ""}
            </div>
            {/* <Headertest /> */}
            
            <div className="relative z-[5]">    
            <Outlet/>
            </div>

           {showHeader ? <Footer/> : '' }
      
    </Fragment> 
    
    )
}

export default RootLayout;
