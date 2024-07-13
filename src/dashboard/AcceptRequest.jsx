import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../url';
import { useDispatch, useSelector } from "react-redux";



const AcceptRequest = () => {
  const [requestData, setRequestData] = useState([]);
  const user = useSelector(state=> state.auth)
  const api = axios.create({
    baseURL: backendUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  api.interceptors.request.use(
    (config) => {
      const token = user?.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );



  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user.token);
        const response = await api.get(`/api/v1/teacher/lsitofteachersrequest`);
        console.log(user?.token);
        setRequestData(response.data.teachers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (user?.token) {  // Only fetch if token exists
      fetchData();
  }

  }, [user?.token]);

  const handleAccept = async (id) => {
    try {
   
      await api.put(`/api/v1/teacher/acceptrequest/${id}`);
      
      
      const updatedData = requestData.filter(request => request._id !== id);

      setRequestData(updatedData);
      console.log(requestData);
      console.log(`Accepted request with id: ${id}`);
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleIgnore = async (id) => {
    try {
     
      await api.delete(`/api/v1/teacher/ignorerequest/${id}`);
      
     
      const updatedData = requestData.filter(request => request._id !== id);
      setRequestData(updatedData);

      console.log(`Ignored request with id: ${id}`);
    } catch (error) {
      console.error('Error ignoring request:', error);
    }
  };

  


  return (
    <>
     <div className="flex justify-center">
  <div className="bg-gray-200 rounded-full px-2 mt-5 mb-4">
    <h1 className="font-bold text-4xl text-black">Teachers Request</h1>
  </div>
</div>
      <div className=" mt-4">
       
        {requestData.map((request) => (
          <div key={request._id} className="mb-4 mx-auto py-4 px-2 max-w-md bg-gray-200 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex justify-center">
              <p className="text-black text-xl"><strong>Name :</strong> &nbsp;  </p> 
                <p className="text-black text-xl">{request.firstName} &nbsp;   {request.lastName}</p>
            
            </div>
            <div className="flex justify-center mt-3">
              <p className="text-black text-xl"><strong>Email :</strong> &nbsp;  </p> 
                <p className="text-black text-xl">{request.email}</p>
            
            </div>
            <div className="flex justify-center mt-3">
              <p className="text-black text-xl"><strong>Master :</strong> &nbsp;  </p> 
                <p className="text-black text-xl">{request.master}</p>
            
            </div>
            <div className="flex justify-center mt-3">
              <p className="text-black text-xl"><strong>Highlights :</strong> &nbsp;  </p> 
                <p className="text-black text-xl">{request.achievement}</p>
            
            </div>
            <div className="flex justify-center mt-3">
              <p className="text-black text-xl"><strong>Experience :</strong> &nbsp;  </p> 
                <p className="text-black text-xl">{request.experience}</p>
            
            </div>
            <div className="mt-3 flex justify-center">
              <button
                onClick={() => handleAccept(request._id)}
                className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded mr-2"
              >
                Accept
              </button>
              <button
                onClick={() => handleIgnore(request._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
              >
                Ignore
              </button>
            </div>
            
            
           
          </div>
        ))}
        
      </div>
    </>
  );
};

export default AcceptRequest;



