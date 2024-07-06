import { useState } from 'react'

import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import RootLayout from './pages/RootLayout'

import ContactUs from './pages/ContactUs/ContactUs'
import WishlistPage from './pages/Wishlist/Wishlist'
import Instructor from './pages/Instructor/Instructor';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import Homepage from './pages/Homepage/Homepage'
import Spotlight from './pages/Spotlight/Spotlight'
import Faq from './pages/Faq/Faq'
import StudentProfile from './pages/StudentProfile/StudentProfile';
import SigninSignupForm from './pages/Signup/Signup';
import BecomeInstructor from './pages/BecomeInstructor/BecomeInstructor';
import AdminCourses from './dashboard/AdminCourses';
import AdminQuery from './dashboard/AdminQuery';
import Certificate from './pages/Certificate/Certificate';
import AdminAcceptance from './dashboard/AdminAcceptance';
import LoginForm from './pages/login/Login';
import AdminUsers from './dashboard/AdminUsers';
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import CourseLayout from './pages/CoursePage/CourseLayout'
import Teacher from './pages/TeacherProfile/TeacherProfile';
import AdminTeachers from  './dashboard/AdminTeachers'; 
import AdminDashboard from './dashboard/Admin';
import Catalogue from './pages/Catalogue/Catalogue'
import TeacherEditProfile from './pages/TeacherEditProfile/TeacherEditProfile';
import StudentEditProfile from './pages/StudentEditProfile/StudentEditProfile';
import CreateCourseLayout from './pages/CreateCoursePage.jsx/CreateCourse'
// import Headertest from './pages/Header/Headertest'
import DefaultHeader from './pages/Header/DefaultHeader';
import CourseUpload from './pages/courseUpload/CourseUpload'
import Teachers_Dashboard from './Teacher Dashboard/Teachers_Dashboard';
import Dashboard from './admin/Dashboard'
import Quiz from  './pages/Quiz/Quiz';
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";

import CourseDescription from './pages/CourseDescription/CourseDescription';
import StudentList from './pages/TeacherDashboard/StudentList';
import DashboardTeacherProfile from './pages/TeacherDashboard/DashboardTeacherProfile';
import StudentReview from './pages/TeacherDashboard/StudentReview';

// import CourseDescription from './pages/CourseDescription/CourseDescription'
import SingleCourse from  './dashboard/SingleCourse'; 
import AdminCategory from './dashboard/AdminCategory';
import AdminPurchases from './dashboard/AdminPurchases';
import RegistrationForm from './pages/Signup/Signuptest';
// import VideoBox from './components/Video-box/VideoBox';


function App() {
  const [count, setCount] = useState(0);

  // const PaymentPage = React.lazy(() => import('./pages/PaymentPage/PaymentPage'))
  
  const router = createBrowserRouter([
    // {path:'/dashboard', element:<AdminDashboard/>},
    
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/', element: <Homepage/> },
        // {path: '/testing', element: <NewHeader /> },
        {path: '/ContactUs', element: <ContactUs/> },
        // {path: '/abcd', element: <AdminQuery/> },
        {path: '/DefaultHeader', element: <DefaultHeader />},
        {path: '/Teacher-Dashboard', element: <Teachers_Dashboard />},
        {path: '/quiz', element: <Quiz />},
        {path: '/becomeInstructor', element: <BecomeInstructor />},
        
        {path : '/dashboard/admin/query' , element : <AdminQuery/>},
        {path:'/dashboard', element:<AdminDashboard/>},
        {path: '/dashboard/admin/accept' , element : <AdminAcceptance/>},
        {path: '/dashboard/admincourses' , element : <AdminCourses/>},
        {path: '/dashboard/admincategory' , element : <AdminCategory/>},
        {path: '/dashboard/adminpurchases' , element : <AdminPurchases/>},
        {path: '/dashboard/admin/Teachers' , element : <AdminTeachers/>},
        {path: '/dashboard/admin/Users' , element : <AdminUsers/>},
       
        
        {path: '/teacher/dashboard', element: <TeacherDashboard/>},
        {path: '/teacher/studentlist/:id', element:<StudentList/>},
        {path: '/teacher/reviews', element:<StudentReview/>},
        {path: '/dashboardteacherprofile/:id', element:<DashboardTeacherProfile/>},
        {path:'/dashboardteacheruploadcourses/:id',element:<CourseUpload/>},
        {path: '/instructor',element:<Instructor/>},
        {path:'/teacher/:id', element:<Teacher/>},
        {path:'/teachereditprofile/:id',element:<TeacherEditProfile/>},
        {path:'/catalogue', element:<Catalogue />},
        {path: '/studenteditprofile/:id', element: <StudentEditProfile/>},
        {path:'/studentprofile', element:<StudentProfile/>},
        {path: '/checkout/:id', element: <PaymentPage/>},
        
        {path: '/wishlist', element: <WishlistPage/>},
        {path: '/spotlight', element: <Spotlight/>},
        {path: '/faq', element: <Faq/>},
        {path: '/register', element: <SigninSignupForm/>},
        {path: '/registerTest', element: <RegistrationForm />},
        {path: '/certificate', element: <Certificate/>},
        {path: '/login', element: <LoginForm/>},
        { path: '/dashboard', element: <AdminDashboard /> },
       
        {path: '/forgot', element: <ForgotPassword/>},
        {path: '/coursedescription/:courseId', element: <CourseDescription/>},
        
        {path: '/course/:courseId', element: <CourseLayout/>},
        {path: '/dashboard/admincourses/admin/courses/:courseId' ,  element: <SingleCourse /> },
        {path: '/createcourse', element: <CreateCourseLayout/>},
        {path: '/createcourse/:courseid', element: <CreateCourseLayout/>},
        {path: '/createcourse/:courseid/:section', element: <CreateCourseLayout/>},
      
        {path: '/courseUpload', element: < CourseUpload />},
        // {path: '/videoPlayerTest', element: < VideoBox />},
        {path: '/aboutus', element: < Faq />}

        
      ]
    },  
  ]);

  return (
    <>

      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App