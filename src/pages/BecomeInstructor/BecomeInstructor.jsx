import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import './Signup.css';
import 'react-toastify/dist/ReactToastify.css';
import signup from '../../images/signup1.jpg';
import { Input } from '@mui/base';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { backendUrl } from '../../url';

const BecomeInstructor = () => {

const navigate = useNavigate(); // Initialize useNavigate

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  
  password: '',
  resume: null,
  postGraduation : '',
  achievement : '',
  experience : '',
  masters : '',

});
const [showPostGraduation, setShowPostGraduation] = useState(false);
const [showMasters, setShowMasters] = useState(false);
const [showExperience, setShowExperience] = useState(false);
const [showAchievement, setShowAchievement] = useState(false);

  const handlePostGraduationClick = () => {
    setShowPostGraduation(!showPostGraduation);
  };
  const handleMastersClick = () => {
    setShowMasters(!showMasters);
  };
  const handleExperienceClick = () => {
    setShowExperience(!showExperience);
  };
  const handleAchievementClick = () => {
    setShowAchievement(!showAchievement);
  };



const handleResumeChange = (e) => {
  const file = e.target.files[0];

  // Update only the 'resume' field in the formData state
  setFormData((prevData) => ({
    ...prevData,
    resume: file,
  }));
};
const handleChange = (e) => {
  const { name, value } = e.target;
  // console.log(name);
  // console.log(value);
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleRegister = async () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    formData.firstName === '' ||
    formData.lastName === '' ||
    !emailPattern.test(formData.email) ||
    formData.password === '' ||
    formData.password.length < 6
  ) {
    // Your Request is pending to admin
    toast.info('Please fill all the details');
    return;
  }

  try {
   
    console.log(formData);
    const response = await axios.post(`${backendUrl}/api/v1/teacher/register`, formData);
    
    
    if (response.data.success === true) {
      toast.info('Your Request is pending to admin');
      navigate('/'); // Use navigate to redirect to the login page
    }
    else if(response.data.success === false){
      toast.info('Teacher already exist with this email');
    }
     else {
      toast.info('Internal server error');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    toast.info('An error occurred');
  }
};

  return (
    <div className="bg-white">
    <div className="min-w-screen bg-purple-100 min-h-screen flex items-center justify-center px-5 py-5">
    <div className="bg-white text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
      <div className="w-full py-10 px-5 md:px-10 mx-auto max-w-screen-md" style={{ maxWidth: '70%' }}>
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-black">REGISTER</h1>
          <p className="font-bold text-3xl text-black">Enter your information to register</p>
        </div>
        <div className="flex -mx-3">
          <div className="w-1/2 px-3 mb-5">
            <label htmlFor="firstName" className="text-xs font-semibold px-1">
              First name
            </label>
            <div className="flex">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="John"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-1/2 px-3 mb-5">
            <label htmlFor="lastName" className="text-xs font-semibold px-1">
              Last name
            </label>
            <div className="flex">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Smith"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="email" className="text-xs font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                 
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
           
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="adminData" className="text-xs font-semibold px-1">
              Resume
            </label>
            <div className="flex">
              
              <input
                type="file"
                id="adminData"
                accept="image/*"
                name="resume"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Select your Resume"
                onChange={handleResumeChange}
              />
            </div>
          </div>
        </div>
      
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="password" className="text-xs font-semibold px-1">
                  Password
                </label>
                <div className="flex">
                  
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="******"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
           
            {!showPostGraduation && ( <div className="mb-4  flex">
           
        <button class="bg-black text-white text-center hover:bg-green-500 font-bold py-2 px-1 rounded-sm w-40 ml-auto " onClick={handlePostGraduationClick}>
             Post Graduation
        </button>
        


          </div>

            )}

            {showPostGraduation && (  <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="Post Graduation" className="text-xs font-semibold px-1">
                  Post Graduation
                </label>
                <div className="flex">
                  
                 

                  
            <input
              type="text"
              id="Post Graduation"
              name="postGraduation"
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="California University"
              onChange={handleChange}
            />
                
                </div>
              </div>
            </div>
            )}

            {showPostGraduation && ( <div className="mb-4  flex">
           
           <button class="bg-white  hover:bg-red-500 font-bold py-2 px-3 rounded w-30 ml-auto " onClick={handlePostGraduationClick}>
                Delete
           </button>
           
   
   
               </div>
            )}
            {!showMasters && ( <div className="mb-4  flex">
           
           <button class="bg-black text-white  hover:bg-green-500 font-bold py-2 px-1 rounded-sm w-40 ml-auto " onClick={handleMastersClick}>
                Add Masters
           </button>
           
   
   
               </div>
   
               )}
   
               {showMasters && (  <div className="flex -mx-3">
                 <div className="w-full px-3 mb-5">
                   <label htmlFor="Masters" className="text-xs font-semibold px-1">
                     Masters
                   </label>
                   <div className="flex">
                     
                    
   
                     
               <input
                 type="text"
                 id="Masters"
                 name="masters"
                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                 placeholder="Oxford University"
                 onChange={handleChange}
               />
                   
                   </div>
                 </div>
               </div>
               )}
   
               {showMasters && ( <div className="mb-4  flex">
              
              <button className="bg-white  hover:bg-red-500 font-bold py-2 px-3 rounded w-30 ml-auto " onClick={handleMastersClick}>
                   Delete
              </button>
              
      
      
                  </div>
               )}

            {!showExperience && ( <div className="mb-4  flex">
           
           <button class="bg-black text-white  hover:bg-green-500 font-bold py-2 px-1 rounded-sm w-40 ml-auto " onClick={handleExperienceClick}>
                Add Experience
           </button>
           
   
   
               </div>
   
               )}
   
               {showExperience && (  <div className="flex -mx-3">
                 <div className="w-full px-3 mb-5">
                   <label htmlFor="Add Experience" className="text-xs font-semibold px-1">
                     Add Experience
                   </label>
                   <div className="flex">
                     
                    
   
                     
               <input
                 type="text"
                 id="Add Experience"
                 name="experience"
                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                 placeholder="Singer at XYZ club"
                 onChange={handleChange}
               />
                   
                   </div>
                 </div>
               </div>
               )}
   
               {showExperience && ( <div className="mb-4  flex">
              
              <button class="bg-white  hover:bg-red-500 font-bold py-2 px-3 rounded w-30 ml-auto " onClick={handleExperienceClick}>
                   Delete
              </button>
              
      
      
                  </div>
               )}

              

               {!showAchievement && ( <div className="mb-4  flex">
           
           <button class="bg-black text-white  hover:bg-green-500 font-bold py-2 px-1 rounded-sm w-40 ml-auto " onClick={handleAchievementClick}>
                Add Achievement
           </button>
           
   
   
               </div>
   
               )}
   
               {showAchievement && (  <div className="flex -mx-3">
                 <div className="w-full px-3 mb-5">
                   <label htmlFor="Achievement" className="text-xs font-semibold px-1">
                     Achievement
                   </label>
                   <div className="flex">
                     
                    
   
                     
               <input
                 type="text"
                 id="achievement"
                 name="achievement"
                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                 placeholder="Gold Medalist at XYZ university"
                 onChange={handleChange}
               />
                   
                   </div>
                 </div>
               </div>
               )}
   
               {showAchievement && ( <div className="mb-4  flex">
              
              <button class="bg-white  hover:bg-red-500 font-bold py-2 px-3 rounded w-30 ml-auto " onClick={handleAchievementClick}>
                   Delete
              </button>
              
      
      
                  </div>
               )}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              className="block w-full max-w-xs mx-auto bg-black text-white rounded-sm px-1 py-1 font-semibold"
              type="submit"
              onClick={handleRegister}
            >
              Request for Register
            </button>
          </div>
        </div>
        <div className="font-bold text-center text-black mt-3">
          <p className='text-black pb-5'>OR</p>
                <Link to='/register'>Sign up as a User</Link>
            </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default BecomeInstructor;