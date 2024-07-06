
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from "react-router-dom";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    // to='/dashboard/admin/query'

    //dashboard/admincourses
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to='/dashboard/adminpurchases' className="flex items-center">
                    {/* <BsGrid1X2Fill className='icon'/> Dashboard */}
                    <BsGrid1X2Fill className='icon'  />
                    <span className="ml-2">Purchases</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link  to='/dashboard/admincourses' className="flex items-center">
                    <BsFillArchiveFill className='icon'/>
                     <span className="ml-2"> Courses </span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/dashboard/admincategory' className="flex items-center">
                    <BsFillGrid3X3GapFill className='icon'/>
                     <span className="ml-2">Categories</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/dashboard/admin/Users' className="flex items-center">
                    <BsPeopleFill className='icon'/>
                    <span className="ml-2"> Users</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/dashboard/admin/accept' className="flex items-center">
                    <BsListCheck className='icon'/> 
                    <span className="ml-2">Approve Teachers</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/dashboard/admin/Teachers' className="flex items-center">
                    <BsListCheck className='icon'/> 
                    <span className="ml-2">Teachers</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/dashboard/admin/query'  className="flex items-center">
                    <BsMenuButtonWideFill className='icon'/> 
                    <span className="ml-2">Queries</span>
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="" className="flex items-center">
                    <BsFillGearFill className='icon'/> 
                    <span className="ml-2"> Settings</span>
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar