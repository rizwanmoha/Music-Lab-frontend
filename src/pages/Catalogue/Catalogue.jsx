import PropTypes from "prop-types";
import c1 from "../../images/carousel-1.jpg";
import c2 from "../../images/carousel-2.jpg";
import c3 from "../../images/carousel-3.jpg";
import anatomy from "../../images/song-lesson-pic.png";
import products from "./productdata";
import Slide from "./Slide";
import axios from "axios";
import "./Catalogue.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import CataMonial from "../../components/CataMonial/CataMonial";
import { backendUrl } from "../../url";

const Catalogue = (props) => {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  function openSearchHandler() {
    setOpen(!open);
  }
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/admin/allcourses?search=${searchInput}`
        );
        setCourses(response.data.courses);
      
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [searchInput]);

  const handleInputChange = (event) => {

    setSearchInput(event.target.value);
  };

  const customStyle = {
    height: "800px",
    width: "1500px",
    padding: "10px",
  };

  const customStyle2 = {
    color: "rgb(255, 255, 255)",
    fontFamily: "'Bruno Ace', cursive",
  };

  const customStyle3 = {
    height: "197px",
    width: "347px",
    // Add other CSS properties as needed
  };

  const customStyle4 = {
    marginBottom: "3rem",
  };

  return (
    <div>
      <div className="head-slides">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={c1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <CataMonial />

      {/* <hr/> */}
      <nav
        className="navbar bg-fuchsia-200"
        id="navbar-id"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid bg-fuchsia-200">
          <a className="text-neutral-950">OUR COURSES</a>
          <div className="p-3">
            <form className="max-w-lg mx-auto">
              <div className="flex">
                {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
                <div>
                  <button
                    onClick={openSearchHandler}
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                  >
                    Categories{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className={`z-10 ${
                      !open ? "hidden" : ""
                    } bg-white divide-y absolute mr-2 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Beginner
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rock
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Metal
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Blues
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Acoustic
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Music Theory
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Guitar Tone
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Legendary Artists
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchHandler}
                          className="inline-flex w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Guitar Technique
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative w-full">
                  
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search Here"
                    value={searchInput}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="home_section p-2 mr-3 bg-fuchsia-200">
       

        {courses.length > 0 ? (
    Array.from({ length: Math.ceil(courses.length / 6) }).map((_, index) => (
      <Slide
        key={index}
        title="MUSIC THEORY"
        products={courses.slice(index * 6, (index + 1) * 6)}
      />
    ))
  ) : (
    
    <p>Loading courses...</p>
  )}
      </div>
      <hr />
      <div className="bg-fuchsia-200">
        <h1 className="text-black text-5xl">ANATOMY OF SONG LESSONS</h1>
        <img src={anatomy} style={customStyle} />
      </div>
    </div>
  );
};

Catalogue.propTypes = {};

export default Catalogue;
