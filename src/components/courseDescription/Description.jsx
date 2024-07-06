import React from 'react';

import './Description.css';


const Description = () =>{

    return (
        <>
        <div class="content-bg">
        <div class="maintop">
                <div class="container">
                    <div class="row px-5 mx-4">
                        <div class="col-lg-8 px-3">
                        <div class="course-title">
                            <h1 style="font-family: 'Archivo Black', sans-serif; color:aqua">Web Development
                            </h1>
                        </div>

                        <div class="course-info">
                          <p>This is the best Course of Web Development</p>
                        </div>

                        <div class="d-flex mb-2">
                            <div>
                                <span class="mr-3">4.0</span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class ="mx-2">(2200 Ratings) </span>    
                            </div>
                                   
                                <div>
                                    
                                </div>
                        </div>
                        <div class="author"><a href="#" style="color: white; text-decoration: none;">Created By Mayank Gupta</a></div>
                    </div>
                <div class="col-lg-4">
                    <div class="course-leftbar">
                        <div class="inner">
                            <div class="card d-none d-lg-block" style="width: 21rem; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                                <img src='' class="card-img-top" alt="Card image cap">

                              <a href="/coursepage">
                                <div class = "play">
                                    <img src = "" width="40px">
                                </div></a>
                                <div class="card-body">
                                  <h5 class="card-title prc" style="color: black;"><p style="color: black;">Price:</p> <p style="color: black;">$ <%=course.price %> </p></h5>
                                  <p class="card-text" style="color: black; ">This is the best Course of Web Development</p>
                                <div class="d-flex justify-content-between">
                                    <a href="/checkout/1" class="btn btn-dark">Buy This Course</a>
                                    <a onclick="return AddToWishlist(1)" class="btn btn-dark" id="wlbutton">Add to Wishlist</a>
                                </div>
                                    

                                        
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
                
                </div>
                </div>
        </div>
        <div class="container">

            
            <div class="row g-5">
                <div class="col-lg-8">
                    <div class="course_info">
                        <div class="thumnail course-box container-img">
                            <img src="" alt="" class="w-100">
                            <div class="bottom-right">
                                <div style="color:black"></div>
                            <div></div>
                            
                            </div>
                        </div>

                        <div class="course-box">
                            <div class="title-style">
                                <div class = "style1">Course Content: </div>
                               
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="list1">
                                        <ul class="list1">
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                1)<a style="text-decoration: none; color:black;" href="#">Your very first acoustic guitar lesson</a>
                                                <hr style="color:black;">
                                            </li>
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                2)<a style="text-decoration: none; color:black;" href="#">The A major chord</a>
                                                <hr/>
                                            </li>

                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                3)The G major chord
                                                <hr/>
                                            </li>
                            
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                4)The D major chord
                                                <hr/>
                                            </li>
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                5)The A minor and E major Chords
                                                <hr/>
                                            </li>
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                6)The C major chord
                                                <hr/>
                                            </li>
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                7)The F major chord
                                                <hr/>
                                            </li>
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                8)The D minor chord
                                                <hr/>
                                            </li>
                                    </div>
                               </ul>
                        </div>
                     
                        </div>
                    </div>
                        

                        <div class="course-box">
                            <div class="title-style">
                                <div class = "style1">This Course Includes: </div>
                               
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="list1">
                                        <ul class="list1">
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                10 Hours of Video Lectures
                                            </li>
                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                Closed Captions
                                            </li>

                                            <li class="mt-0">
                                                <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                                Community Support
                                            </li>
                            
                                    </div>
                               </ul>
                        </div>
                        <div class="col-lg-6">
                            <div class="list1">
                                <ul class="list1">
                                    
                                    <li class="mt-0">
                                        <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                        Live Support 24/7
                                    </li>
                                    <li class="mt-0">
                                        <span class = "greentick mt-0"><img src="" alt="" width="20px"></span>
                                        Certification
                                    </li>
                    
                            </div>
                       </ul>
                </div>
                    </div>
                        
                    </div>

                    <div class="course-box mt-4
                    ">
                    <div class="course-content">
                        <div class="row g-5 mb-5">
                            <div class="col-lg-6">
                                <div class="title">
                                    <div class="title-style">
                                        <h4 class = "style1">Requirements</h3>
                                    </div>
                                </div>
                                <div class="list1 req">
                                    <ul class="list1 req">
                                        <li class="mt-0">
                                            <span class = "greentick mt-1"><img src="" alt=""></span>
                                            No Prior Experience Required. 
                                        </li>
                                        <li class="mt-0">
                                            <span class = "greentick mt-1"><img src="" alt=""></span>
                                            A working Internet connection. 
                                        </li>
                                        <li>
                                            <span class = "greentick mt-1"><img src="" alt=""></span>
                                            Access to a well tuned Guitar.
                                        </li>

                                        <li>
                                            <span class = "greentick mt-1"><img src="" alt="">
                                            </span>
                                            A Burning Passion to Learn. 
                                        </li>
                        
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="title">
                                    <div class="title-style">
                                        <h4 class = "style1">Description</h3>
                                    </div>
                                </div>
                                <div class="list1 req">
                                    <ul class="list1 req">
                                        <li class="mt-0">
                                            <span class = "greentick mt-1"><img src="" alt=""></span>
                                            Learn Basics of Music Notes and pitches 
                                        </li>
                                      

                                        <li>
                                            <span class = "greentick mt-1"><img src="" alt=""></span>
                                            Be Able to Play Pop Songs
                                        </li>
                                        <li>
                                            <span class = "greentick mt-1"><img src="" alt=""></span>
                                            Become an advanced and confident Guitar Player within a month. 
                                        </li>
                                      
                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                    
                    </div>
                    <div class="course-box" style="margin-bottom: 10px;">
                        <div class="title">
                            <div class="title-style">
                                <h4 class = "style1">Rating</h3>
                            </div>
                        </div>

                        <div class="row g-5 mb-5">
                            <div class="col-lg-12">
                                <div class="ratingval">
                                    <div class="numb">4.3</div>
                                    <div class="rating">
                                   
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                </div>

                                <span class="gb">
                                   Course Rating
                                </span>
                                </div>
                            </div>


                            <a href="/checkout" class="btn btn-dark">Buy This Course</a>
                                  <a href="/wishlist" class="btn btn-dark">Add to Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </>
    )
}

export default Description;

