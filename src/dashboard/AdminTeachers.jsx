import { useState } from 'react'

import './Sidebar.css';
import Header from './Header'
import Sidebar from './Sidebar'

import { Routes, Route } from 'react-router-dom';
import ListOfTeachers from './ListOfTeachers';



const AdminAcceptance = () =>{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
        
          <Sidebar  className="sidebar" openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          <div  className="overflow-y-auto h-screen w-1000"> 
         <ListOfTeachers />
            </div>
          </div>
     

      )
}


export default AdminAcceptance;