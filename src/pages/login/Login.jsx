// import  { useState } from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import './login.css';
// import { login } from '../../store/auth';
// import { Link } from 'react-router-dom';
// import signup from '../../images/signup1.jpg';
// import { useDispatch } from 'react-redux';
// import OAuth from './GoogleAuth';
// import { toast } from 'react-toastify';
// import logo from '../../images/logo-new.png';

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false)
//   const [firstEmail, setEmail] = useState();
//   const [firstPassword, setPassword] = useState();


  

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const [loginData, setLoginData] = useState({
//     email: firstEmail,
    
//     password: firstPassword,
//   });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setLoginData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value,
//   //   }));
//   // };

//   const handleLogin = async () => {
//     try {
      
//       if(loginData.email==='' || loginData.password===''){
//         toast.info('Please fill all the details');
//         return ;
//       }
//       setLoading(true)
//       const response = await axios.post('http://localhost:8000/api/v1/user/login', loginData);
//       setLoading(false)
//       console.log(response.data);
//       if (response.data.success===true) {
        
       
//         console.log(response.data);
//         const user = response.data.user
//         const token = response.data.token;
//         console.log(user)
//         dispatch(login({firstName : user.firstName , 
//                         lastName : user.lastName , 
//                         role : user.role , 
//                         token : token, 
//                         email : user.email, 
//                         id : user._id,
//                         wishlist : user.wishlist,
//                         courses : user.courses}));
       
//           navigate('/');
        
//         toast.success("Login Successfully")
//       } else if(response.data.success===false) {
  
//         toast.info("Your details didn't match");
//         console.error('Login failed:', response.data.message);
//       }
//     } catch (error) {
//       // navigate('/')
//       // console.error('Error during login:', error);
//       // Handle error
//       toast.info('Internal Server error');
//     }
//   };

//   return (<div className='bg-white py-3' style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/00/56/23/00/360_F_56230053_UPCciR8WZrH5DeCYVbPD9daVMZw0XtIr.jpg)`, backgroundRepeat: 'no-repeat' }} >

//     <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
//         <div
//           className="hidden bg-cover lg:block lg:w-1/2"
//           style={{ backgroundImage: `url(https://www.itl.cat/pngfile/big/285-2851575_guitar-phone-wallpaper-hd-guitar-wallpapers-for-phone.jpg)`, maxWidth: '1000px'}} 
//         ></div>

//         <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
//           <div className="flex justify-center mx-auto">
//             <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
//           </div>

//           <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
//             Welcome back!
//           </p>

//           <div className="flex items-center justify-between mt-4">
//             <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

//             <Link
//               to="/"
//               className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
//             >
//               login with email
//             </Link>

//             <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
//           </div>

//           <div className="mt-4">
//             <label
//               className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//               htmlFor="LoggingEmailAddress"
//             >
//               Email Address
//             </label>
//             <input
//               id="LoggingEmailAddress"
//               className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//               type="email"
//               value={loginData.email}
//               onChange={handleEmailChange}
//               placeholder="johnsmith@example.com"
//             />
//           </div>

//           <div className="mt-4">
//             <div className="flex justify-between">
//               <label
//                 className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//                 htmlFor="loggingPassword"
//               >
//                 Password
//               </label>
//               <Link
//                 to="/forgot"
//                 className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <input
//               id="loggingPassword"
//               className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//               type="password"
//               value={firstPassword}
//               onChange={handlePasswordChange}
//               placeholder="****"
//             />
//           </div>

//           <div className="mt-6">
//             <button type="submit" onClick={handleLogin} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
//             {!loading && "LOGIN"}
//                 {loading && "Loading..."}
//             </button>
//           </div>

//           <div className="flex items-center justify-between mt-4">
//             <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

//             <Link
//               to="/register"
//               className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
//             >
//               or sign up
//             </Link>

//             <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
//           </div>
//         </div>
//       </div>
//       </div>


//     // <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
//     //   <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
//     //     <div className="md:flex w-full">
//     //       <div className="hidden md:block w-1/2 py-10 px-10">
//     //         <img
//     //           src={signup}
//     //           alt="Side Image"
//     //           className="object-cover object-center w-full h-full rounded-full"
//     //         />
//     //       </div>
//     //       <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
//     //         <div className="text-center mb-10">
//     //           <h1 className="font-bold text-3xl">LOGIN</h1>
//     //           <p>Enter your login information</p>
//     //         </div>
//     //         <div className="flex -mx-3">
//     //           <div className="w-full px-3 mb-5">
//     //             <label htmlFor="email" className="text-xs font-semibold px-1">
//     //               Email
//     //             </label>
//     //             <div className="flex">
        
//     //               <input
//     //                 type="email"
//     //                 id="email"
//     //                 name="email"
//     //                 value={loginData.email}
//     //                 onChange={handleInputChange}
//     //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//     //                 placeholder="johnsmith@example.com"
//     //               />
//     //             </div>
//     //           </div>
//     //         </div>
//     //         {/* <div className="flex -mx-3">
//     //           <div className="w-full px-3 mb-5">
//     //             <label htmlFor="role" className="text-xs font-semibold px-1">
//     //               Role
//     //             </label>
//     //             <div className="flex">
//     //               <select
//     //                 id="role"
//     //                 name="role"
//     //                 value={loginData.role}
//     //                onChange={handleInputChange}
//     //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500"
//     //               >
//     //                 <option value="User">User</option>
//     //                 <option value="teacher">Teacher</option>
//     //                 <option value="admin">Admin</option>
//     //               </select>
//     //             </div>
//     //           </div>
//     //         </div> */}
//     //         <div className="flex -mx-3">
//     //           <div className="w-full px-3 mb-12">
//     //             <label htmlFor="password" className="text-xs font-semibold px-1">
//     //               Password
//     //             </label>
//     //             <div className="flex">
             
//     //               <input
//     //                 type="password"
//     //                 id="password"
//     //                 name="password"
//     //                 value={loginData.password}
//     //             onChange={handleInputChange}
//     //                 className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//     //                 placeholder="****"
//     //               />
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="flex -mx-3 ">
//     //           <div className="w-full px-3 mb-5 ">
//     //             <button
//     //               className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-1 mb-10 font-semibold "
//     //               type="submit"
//     //               onClick={handleLogin}
//     //             >
//     //             {!loading && "LOGIN"}
//     //             {loading && "Loading..."}
//     //             </button>
//     //               <OAuth />
//     //           </div>
//     //         </div>
//     //         <div className="font-bold text-blue-400 mt-3">
//     //             Don't have account <Link to='/register'>Sign up</Link>
//     //         </div>
//     //         <div className="font-bold text-blue-400 mt-3">
//     //              <Link to='/forgot'>forgot Password</Link>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { login } from '../../store/auth';
import { Link } from 'react-router-dom';
import signup from '../../images/signup1.jpg';
import { useDispatch } from 'react-redux';
import OAuth from './GoogleAuth';
import { toast } from 'react-toastify';
import { backendUrl } from '../../url';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      
      if(loginData.email==='' || loginData.password===''){
        toast.info('Please fill all the details');
        return ;
      }
      setLoading(true)
      const response = await axios.post(`${backendUrl}/api/v1/user/login`, loginData);
      setLoading(false)

      if (response.data.success===true) {
        
        const user = response.data.user
        const token = response.data.token;

        dispatch(login({firstName : user.firstName , 
                        lastName : user.lastName , 
                        role : user.role , 
                        token : token, 
                        email : user.email, 
                        id : user._id,
                        wishlist : user.wishlist,
                        courses : user.courses}));
       
          navigate('/');
        
        toast.success("Login Successfully")
      } else if(response.data.success===false) {
  
        toast.info("Your details didn't match");
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      // navigate('/')
      // console.error('Error during login:', error);
      // Handle error
      toast.info('Internal Server error');
    }
  };

  return (
    <div className="bg-white">
    <div className="min-w-screen min-h-screen bg-purple-100 flex items-center justify-center px-5 py-5">
      <div className="bg-white text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 ">
            <img
              src={signup}
              alt="Side Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-black">LOGIN</h1>
              <p className="font-bold text-3xl text-black">Enter your login information</p>
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
                    value={loginData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com"
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="role" className="text-xs font-semibold px-1">
                  Role
                </label>
                <div className="flex">
                  <select
                    id="role"
                    name="role"
                    value={loginData.role}
                   onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500"
                  >
                    <option value="User">User</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div> */}
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
                    value={loginData.password}
                onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="****"
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3 ">
              <div className="w-full px-3 mb-5 ">
                <button
                  className="block w-full max-w-xs mx-auto bg-black hover:bg-gray-700 focus:bg-gray-700 text-white rounded-sm px-3 py-1 mb-10 font-semibold "
                  type="submit"
                  onClick={handleLogin}
                >
                {!loading && "LOGIN"}
                {loading && "Loading..."}
                </button>
                  <OAuth />
              </div>
            </div>
            <div className="font-bold text-gray-700 text-center mt-3">
                Don't have account?<Link to='/register'> Switch to Sign up</Link>
            </div>
            <div className="font-bold text-gray-700 text-center mt-3">
                 <Link to='/forgot'>Forgot Password ?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
          
    </div>
  );
};

export default LoginForm;