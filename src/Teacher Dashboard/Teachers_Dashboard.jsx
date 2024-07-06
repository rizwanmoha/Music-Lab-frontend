import { useState } from 'react'


import Teacher_Sidebar from './Teacher_Sidebar';
import Home from './Home'


const Teacher_Dashboard = () =>{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
         
          <Teacher_Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Home />

          </div>

      )
}



export default Teacher_Dashboard ;