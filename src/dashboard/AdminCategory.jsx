import { useState } from 'react'

import './Sidebar.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
import Category from './Category';



const AdminCategory = () =>{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
        
          <Sidebar  className="sidebar" openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          <div  className="overflow-y-auto h-screen w-1000"> 
         <Category />
            </div>
          </div>
     

      )
}


export default AdminCategory;
