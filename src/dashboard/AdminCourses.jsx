import { useState } from 'react'

import './Sidebar.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
import Courses from './Courses';



const AdminCourses = () =>{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
// "overflow-y-auto h-screen w-1000"
    return (
        <div className='grid-container'>
        
          <Sidebar  className="sidebar" openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          <div  className="overflow-y-auto h-screen w-1000"> 
            <Courses />
            </div>
          </div>
     

      )
}


export default AdminCourses;