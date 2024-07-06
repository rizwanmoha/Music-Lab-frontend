import { useState } from 'react'

import './Sidebar.css';
import Header from './Header'
import Sidebar from './Sidebar'

import { Routes, Route } from 'react-router-dom';
import ListOfUsers from './ListOfUsers';



const AdminUsers = () =>{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
        
          <Sidebar  className="sidebar" openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          <div  className="overflow-y-auto h-screen w-1000 ml-5"> 
            <ListOfUsers />
            </div>
          </div>
     

      )
}


export default AdminUsers;