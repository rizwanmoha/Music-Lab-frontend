import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css';
import signup from '../../images/signup1.jpg';

import { toast } from 'react-toastify';
import { backendUrl } from '../../url';
const RegistrationForm = () => {

const navigate = useNavigate(); // Initialize useNavigate

// toast.info('Please Login to add to wishlist');
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  confirmPassword: '',
  password: '',
  
});


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleRegister = async () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  if (
    formData.firstName === '' ||
    formData.lastName === '' ||
    !emailPattern.test(formData.email) ||
    formData.password === '' ||
    formData.password.length < 6 ||
    !passwordPattern.test(formData.password)
  ) {
    console.log("here comes");
    
    toast.info('Please fill in all fields, ensure the password is at least 6 characters, and contains at least one special character, one number, and one alphabet character.');
    return;
  }
  if(formData.confirmPassword!==formData.password){
    toast.info("Password not match with confirm Password");
    return ;
  }


  try {
    console.log("Here is coming");
    console.log(formData);
    const response = await axios.post(`${backendUrl}/api/v1/user/register`, formData);
    console.log(response.data);
    const check = "User already exist please login"
    console.log(typeof response.data.messages);
    console.log(typeof check);
    // const check = false;
    if (response.data.message === "User Registered Successfully") {
      toast.info('User registered successfully');
      navigate('/login'); 
    }
    else if(response.data.message == "User already exist please login"){
      toast.info('User already exist please login');
      return ;
    }
     else {
      toast.info('An error occurred during registration');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    toast.info('An error occurred during registration');
  }
};

  return (
    <div className="bg-white">

    <div className="min-w-screen min-h-screen bg-purple-100 flex items-center justify-center px-5 py-5">
      <div className="bg-white text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2">
            <img
              src={signup}
              alt="Side Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-black ">REGISTER</h1>
              <p className="font-bold text-3xl text-black ">Enter your information to register</p>
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
              <div className="w-full px-3 mb-12">
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
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label htmlFor="password" className="text-xs font-semibold px-1">
                 Confirm Password
                </label>
                <div className="flex">
                  
                  <input
                    type="password"
                    id="password"
                    name="confirmPassword"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="******"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-black hover:bg-gray-700 focus:bg-gray-700 text-white rounded-sm px-3 py-3 font-semibold"
                  type="submit"
                  onClick={handleRegister}
                >
                  Register Now
                </button>
              </div>
            </div>
            <div className="font-bold text-center text-gray-700 text-xl">
                <Link to='/becomeInstructor'>Register as an Instructor here!</Link>
            </div>
            <div className="font-bold text-center text-gray-700 mt-3">
                Already a member?<Link to='/login'> Switch to Sign in here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;

