import { Fragment, startTransition, useEffect, useState } from "react"

// import { useDispatch } from '@reduxjs/toolkit'
import {useNavigate} from 'react-router'
import logo from '../../images/logo-new.png';
import './Wishlist.css'
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { logout, removeFromWl } from "../../store/auth";
import axios from "axios";
import CourseCard from "../../components/UserDashboard/CourseCard";
import LoadingSign from "../../components/UserDashboard/LoadingSign";
import { backendUrl } from "../../url";


function capitalizeFirstLetter(string) {
  if(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}




function WishlistPage(){

  //  const courses = useSelector((state)=>state.course)
   const [mode,setMode] = useState("wish");
   const [coursesLoading, setCoursesLoading] = useState(true);
   const [courses,setCourses] = useState(null)
   const dispatch = useDispatch();

   const user = useSelector(state=> state.auth)

   useEffect(()=>{
    async function getCourseInfo(){
      const timestamp = new Date().getTime();
      try {
        const req = await axios.get(`${backendUrl}/api/v1/user/your-courses/${user?.id}?timestamp=${timestamp}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': user?.token
          }
        })

        if(req.status == 200){
          console.log(req.data)
          setCourses(req.data.courses)
          setCoursesLoading(false)
        }
      } catch (e){
        console.log(e)
      }
    }

    getCourseInfo();
      
   },[])


   const navigate = useNavigate();

   function purchaseCourseHandler(wishitem){
      // dispatch(courseActions.addCourse(wishitem))
     startTransition(()=>{ 
       navigate(`/checkout/${wishitem._id}`)
      })
    }

    

    async function removeFromWishListHandler(course){
      
      try {
        const req = await axios.post(`${backendUrl}/api/v1/user/remove-wishlist`, {userId: user?.id, courseId: course._id},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${user?.token}`
      }}) 

      if(req.status === 200){
        console.log("nikal diya")
        dispatch(removeFromWl(course._id))
        toast.success("Course removed from wishlist")
      } 
    } catch(e) {
      console.log(e)
      toast.error("Error removing course from wishlist")
    }
  
    }
    useEffect(()=>{ 
      if(user.isLoggedin == false || !user.wishlist || !user ){
        navigate('/');
      }
    })


    return (
      <Fragment>
        <div className="bg-purple-300">

        <div className="bg-purple-400">
        <div className="bg-purple-400 toast-container position-fixed top-0 end-0 p-3">
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Masters Of Music</strong>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">Course removed from wishlist!</div>
          </div>
        </div>

        <div className="bodyMain bg-purple-200">
          <div className="outer3 ">
            <div>
              <div className="maincontainer ">
                <div className="wishmain d-flex ">
                  <div className="d-none d-lg-block mb-5">
                    <div className="">
                      <div
                        className="card"
                        style={{
                          width: "18rem",
                          backgroundColor: "#181a1b",
                          padding: "0rem",
                          marginTop: "1rem",
                        }}
                      >
                        <img
                          src={logo}
                          className="p-4"

                          alt="..."
                        />
                        <div
                          className="card-body"
                          style={{
                            borderBottom: "2px solid grey",
                            paddingBottom: "1.5rem",
                          }}
                        >
                          {/* <div className="userpic_con">
                            <div className="userpic"></div>
                          </div> */}

                          <h5 className="text-white pt-2 pl-6 align-items-center">
                            Welcome, {user?.firstName + ' ' + user?.lastName}
                          </h5>
                        </div>
                        <ul
                          className="list-group list-group-flush"
                          style={{ fontSize: "16px" }}
                        >
                          <li
                            className="list-group-item atb"
                            style={{
                              borderBottom: "2px solid grey",
                              backgroundColor: "#181a1b",
                            }}
                          >
                            <Link to="/studentprofile" color="#C0BAB2">
                              Your Profile
                            </Link>
                          </li>
                          <li
                            className="list-group-item atb"
                            style={{
                              borderBottom: "2px solid grey",
                              backgroundColor: "#181a1b",
                            }}
                          >
                            <div
                              onClick={() => {
                                setMode("wish");
                              }}
                            >
                              {" "}
                              Wishlist
                            </div>
                          </li>

                          <li
                            className="list-group-item atb"
                            style={{
                              borderBottom: "2px solid grey",
                              backgroundColor: "#181a1b",
                            }}
                          >
                            <div
                              onClick={() => {
                                setMode("courses");
                              }}
                            >
                              Your Courses
                            </div>
                          </li>

                          <li
                            className="list-group-item atb"
                            style={{
                              borderBottom: "2px solid grey",
                              backgroundColor: "#181a1b",
                            }}
                          >
                            <Link to="/">Home</Link>
                          </li>

                          <li
                            className="list-group-item atb"
                            style={{
                              borderBottom: "2px solid grey",
                              backgroundColor: "#181a1b",
                            }}
                          >
                            <Link
                              id="logoutbtn"
                              className="logout-button"
                              onClick={() => {
                                dispatch(logout());
                                navigate('/')
                              }}
                            >
                              Log Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blackblock"></div>
                  </div>
                  <div className="spaceline"></div>
                  <div className="rightpanel">
                    <div className="rightcont">
                      <div className="rightmain d-flex flex-column">
                        <div className="rhead">
                          <div className="font-black text-black" id="wishlist-count">
                            {" "}
                            {mode === "wish"
                              ? `YOUR WISHLIST (${user?.wishlist?.length})`
                              : `YOUR COURSES (${user?.courses?.length})`}
                          </div>
                        </div>

                        <div className="overflow-auto max-h-[70vh]">
                          {mode === "wish" ? (
                            user?.wishlist?.length != 0 ? (
                              user?.wishlist?.map((wishitem) => {
                                return (
                                  <div
                                    key={wishitem._id}
                                    className="wishblock"
                                    id={wishitem._id}
                                  >
                                    <div className="imgcontainer">
                                      <img
                                        src={wishitem?.imageUrl}

                                        className="course-img img-fluid"
                                        width="230px"
                                        style={{height: "138px"}}
                                      />
                                    </div>

                                    <div className="wishitemleft d-flex flex-column">
                                      <div className="title2">
                                        <Link
                                          to={`/coursedescription/${wishitem?._id}`}
                                          className="courselink"
                                        >
                                          {wishitem?.title}
                                        </Link>
                                      </div>

                                      <div className="teacher">
                                        <a>
                                          By{" "}
                                          {capitalizeFirstLetter(
                                            wishitem?.teacher[0].firstName
                                          )}
                                        </a>
                                      </div>

                                      <div className="rating">
                                        <div className="rate pt-1">
                                          <label htmlFor="star5">5 stars</label>
                                          <label htmlFor="star4">4 stars</label>
                                          <label htmlFor="star3">3 stars</label>
                                          <label htmlFor="star2">2 stars</label>
                                          <label htmlFor="star1">1 star</label>
                                        </div>
                                      </div>

                                      <div className="price">
                                        <div>
                                          <p>$ {wishitem?.price}</p>
                                        </div>
                                      </div>
                                    </div>F

                                    <div className="rightitembar">
                                      <div
                                        style={{ paddingLeft: "5.2rem" }}
                                        className="del-icon"
                                        onClick={() => {
                                          removeFromWishListHandler(wishitem);
                                        }}
                                      >
                                        <Delete
                                          sx={{ color: "grey", fontSize: 28 }}
                                          className=""
                                        ></Delete>
                                      </div>

                                      <button
                                        className="buy-now h-[48px]"
                                        onClick={() => {
                                          purchaseCourseHandler(wishitem);
                                        }}
                                      >
                                        Buy Now
                                      </button>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <div className="nothinginwish justify-center">
                                <div>Your Wishlist is Empty!</div>
                              </div>
                            )
                          ) : !coursesLoading ? (
                            courses.length != 0 ? (
                              courses.map((course) => {
                                return (
                                  course && ( 
                                  <CourseCard
                                    user={user}
                                    currentRating={course?.rating}
                                    // course={course?.course?._id}
                                    key={course?.course?._id}
                                    course={course?.course}
                                    progress={course?.progress}
                                  />)
                                );
                              })
                            ) : (
                              <div className="nothinginwish justify-center">
                                <div>You Have not Purchased Any Courses!</div>
                              </div>
                            )
                          ) : (
                            <LoadingSign />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>          
        </div>
      </Fragment>
    );



}

export default WishlistPage