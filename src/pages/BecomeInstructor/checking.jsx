  // <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
    //   <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
    //     <div className="md:flex w-full">
    //       <div className="hidden md:block w-1/2  py-10 px-10">
    //         <img
    //           src=""
    //           alt="Side Image"
    //           className="object-cover object-center w-full h-full rounded-full"
    //         />
    //       </div>
    //       <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
    //         <div className="text-center mb-10">
    //           <h1 className="font-bold text-3xl ">REGISTER</h1>
    //           <p>Enter your information to register</p>
    //         </div>
    //         <div className="flex -mx-3">
    //           <div className="w-1/2 px-3 mb-5">
    //             <label htmlFor="firstName" className="text-xs font-semibold px-1">
    //               First name
    //             </label>
    //             <div className="flex">
                
    //               <input
    //                 type="text"
    //                 id="firstName"
    //                 name="firstName"
    //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //                 placeholder="John"
    //                 onChange={handleChange}
    //               />
    //             </div>
    //           </div>
    //           <div className="w-1/2 px-3 mb-5">
    //             <label htmlFor="lastName" className="text-xs font-semibold px-1">
    //               Last name
    //             </label>
    //             <div className="flex">
                
    //               <input
    //                 type="text"
    //                 id="lastName"
    //                 name="lastName"
    //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //                 placeholder="Smith"
    //                 onChange={handleChange}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex -mx-3">
    //           <div className="w-full px-3 mb-5">
    //             <label htmlFor="email" className="text-xs font-semibold px-1">
    //               Email
    //             </label>
    //             <div className="flex">
                 
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //                 placeholder="johnsmith@example.com"
    //                 onChange={handleChange}
    //               />
    //             </div>
    //           </div>
    //         </div>
           
    //     <div className="flex -mx-3">
    //       <div className="w-full px-3 mb-5">
    //         <label htmlFor="adminData" className="text-xs font-semibold px-1">
    //           Resume
    //         </label>
    //         <div className="flex">
              
    //           <input
    //             type="file"
    //             id="adminData"
    //             accept="image/*"
    //             name="resume"
    //             className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //             placeholder="Select your Resume"
    //             onChange={handleResumeChange}
    //           />
    //         </div>
    //       </div>
    //     </div>
      
    //         <div className="flex -mx-3">
    //           <div className="w-full px-3 mb-5">
    //             <label htmlFor="password" className="text-xs font-semibold px-1">
    //               Password
    //             </label>
    //             <div className="flex">
                  
    //               <input
    //                 type="password"
    //                 id="password"
    //                 name="password"
    //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //                 placeholder="******"
    //                 onChange={handleChange}
    //               />
    //             </div>
    //           </div>
    //         </div>
           
    //         {!showPostGraduation && ( <div className="mb-4  flex">
           
    //     <button class="bg-white  hover:bg-green-500 font-bold py-2 px-1 rounded w-40 ml-auto " onClick={handlePostGraduationClick}>
    //          Post Graduation
    //     </button>
        


    //         </div>

    //         )}

    //         {showPostGraduation && (  <div className="flex -mx-3">
    //           <div className="w-full px-3 mb-5">
    //             <label htmlFor="Post Graduation" className="text-xs font-semibold px-1">
    //               Post Graduation
    //             </label>
    //             <div className="flex">
                  
                 

                  
    //         <input
    //           type="text"
    //           id="Post Graduation"
    //           name="postGraduation"
    //           className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //           placeholder="California University"
    //           onChange={handleChange}
    //         />
                
    //             </div>
    //           </div>
    //         </div>
    //         )}

    //         {showPostGraduation && ( <div className="mb-4  flex">
           
    //        <button class="bg-white  hover:bg-red-500 font-bold py-2 px-1 rounded w-30 ml-auto " onClick={handlePostGraduationClick}>
    //             Delete
    //        </button>
           
   
   
    //            </div>
    //         )}
    //         {!showMasters && ( <div className="mb-4  flex">
           
    //        <button class="bg-white  hover:bg-green-500 font-bold py-2 px-1 rounded w-40 ml-auto " onClick={handleMastersClick}>
    //             Add Masters
    //        </button>
           
   
   
    //            </div>
   
    //            )}
   
    //            {showMasters && (  <div className="flex -mx-3">
    //              <div className="w-full px-3 mb-5">
    //                <label htmlFor="Masters" className="text-xs font-semibold px-1">
    //                  Masters
    //                </label>
    //                <div className="flex">
                     
                    
   
                     
    //            <input
    //              type="text"
    //              id="Masters"
    //              name="Masters"
    //              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //              placeholder="Oxford University"
    //              onChange={handleChange}
    //            />
                   
    //                </div>
    //              </div>
    //            </div>
    //            )}
   
    //            {showMasters && ( <div className="mb-4  flex">
              
    //           <button class="bg-white  hover:bg-red-500 font-bold py-2 px-1 rounded w-30 ml-auto " onClick={handleMastersClick}>
    //                Delete
    //           </button>
              
      
      
    //               </div>
    //            )}

    //         {!showExperience && ( <div className="mb-4  flex">
           
    //        <button class="bg-white  hover:bg-green-500 font-bold py-2 px-1 rounded w-40 ml-auto " onClick={handleExperienceClick}>
    //             Add Experience
    //        </button>
           
   
   
    //            </div>
   
    //            )}
   
    //            {showExperience && (  <div className="flex -mx-3">
    //              <div className="w-full px-3 mb-5">
    //                <label htmlFor="Add Experience" className="text-xs font-semibold px-1">
    //                  Add Experience
    //                </label>
    //                <div className="flex">
                     
                    
   
                     
    //            <input
    //              type="text"
    //              id="Add Experience"
    //              name="experience"
    //              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //              placeholder="Singer at XYZ club"
    //              onChange={handleChange}
    //            />
                   
    //                </div>
    //              </div>
    //            </div>
    //            )}
   
    //            {showExperience && ( <div className="mb-4  flex">
              
    //           <button class="bg-white  hover:bg-red-500 font-bold py-2 px-1 rounded w-30 ml-auto " onClick={handleExperienceClick}>
    //                Delete
    //           </button>
              
      
      
    //               </div>
    //            )}

              

    //            {!showAchievement && ( <div className="mb-4  flex">
           
    //        <button class="bg-white  hover:bg-green-500 font-bold py-2 px-1 rounded w-40 ml-auto " onClick={handleAchievementClick}>
    //             Add Achievement
    //        </button>
           
   
   
    //            </div>
   
    //            )}
   
    //            {showAchievement && (  <div className="flex -mx-3">
    //              <div className="w-full px-3 mb-5">
    //                <label htmlFor="Achievement" className="text-xs font-semibold px-1">
    //                  Achievement
    //                </label>
    //                <div className="flex">
                     
                    
   
                     
    //            <input
    //              type="text"
    //              id="achievement"
    //              name="achievement"
    //              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
    //              placeholder="Gold Medalist at XYZ university"
    //              onChange={handleChange}
    //            />
                   
    //                </div>
    //              </div>
    //            </div>
    //            )}
   
    //            {showAchievement && ( <div className="mb-4  flex">
              
    //           <button class="bg-white  hover:bg-red-500 font-bold py-2 px-1 rounded w-30 ml-auto " onClick={handleAchievementClick}>
    //                Delete
    //           </button>
              
      
      
    //               </div>
    //            )}

    //         <div className="flex -mx-3">
    //           <div className="w-full px-3 mb-5">
    //             <button
    //               className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-1 py-1 font-semibold"
    //               type="submit"
    //               onClick={handleRegister}
    //             >
    //               Request Register
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>