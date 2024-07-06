import  {useState} from 'react';
import signup from '../../images/signup1.jpg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { backendUrl } from '../../url';
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotData, setForgotData] = useState({
    email: '',
    
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForgotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleForgotPassword = async () => {
    try {
      
      if(forgotData.email==='' || forgotData.password===''){
        toast.info('Please fill all the details');
        return ;
      }
     console.log(forgotData);
      const response = await axios.post(`${backendUrl}/api/v1/user/forgot`, forgotData);

      console.log(response.data);
      if (response.data.success===true) {
        
        toast.info('Password changed Successfully');

       
        

        navigate('/login');
      } else if(response.data.success===false) {
  
        toast.info("User didn't exist with this account");
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      
      toast.info('Internal Server error');
    }
  };


  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2  py-10 px-10">
            <img
              src={signup}
              alt="Side Image"
              className="object-cover object-center w-full h-full rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Forgot Password</h1>
              <p>Reset Password</p>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="email" className="text-xs font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={forgotData.email}
                    onChange={handleInputChange}
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com"
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
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    {/* <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i> */}
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={forgotData.password}
                    onChange={handleInputChange}
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="****"
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  type="submit"
                  onClick={handleForgotPassword}
                >
                  Reset Password 
                </button>
              </div>
            </div>

            <div className="font-bold text-blue-400 mt-3">
                Don't have account <a href='/register'>Sign up</a>
            </div>
            <div className="font-bold text-blue-400 mt-3">
                 <Link to='/login'>Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;