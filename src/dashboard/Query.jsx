import {useState , useEffect} from 'react';
import {backendUrl} from '../url';

import axios from 'axios';

const Query = () =>{

    const [queryData, setQueryData] = useState([]);
    const [replyData, setReplyData] = useState({});
    const [showReply, setShowReply] = useState(false);
     const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    
    const apiUrl = `${backendUrl}/api/v1/admin/query`;

    const fetchData = async () => {
      try {
        
        const response = await axios.get(apiUrl);

      
        setQueryData(response.data.query);
        console.log(response.data);
        console.log(queryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   
    fetchData();
  }, []); 

  const handleReplyClick = (requestId) => {
    
    const selectedRequest = queryData.find((request) => request._id === requestId);
    setReplyData(selectedRequest);

    
    setShowReply(true);
  };

  const handleSendReply = () => {
   
    console.log('Reply Data:', replyData);
    console.log('Reply Message:', replyMessage);

   
    setReplyMessage('');
    setShowReply(false);
  };



    return (
        <>

{/* 
<div className="flex justify-center">
  <div className="bg-gray-700 rounded-full px-4 py-2 mt-5 mb-4">
    <h1 className="font-bold text-4xl text-white">All Queries</h1>
  </div>
</div>
<div className="mt-4">
  {queryData.map((request) => (
    <div
      key={request._id}
      className="mb-4 mx-auto py-6 px-4 max-w-md bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105"
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-white font-bold">
          {request.firstname} {request.lastname}
        </p>
        <p className="text-gray-400 text-sm">{request.email}</p>
      </div>
      <div className="mb-4">
        <p className="text-white">{request.message}</p>
      </div>
      <div className="flex justify-end">
        {showReply && replyData._id === request._id ? (
          // Render Reply Section
          <div className="w-full bg-gray-700 p-4 rounded-lg">
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="w-full h-20 border p-2 bg-gray-600 text-white hover:border-blue-500 focus:border-blue-500 rounded-md"
              placeholder="Type your reply here..."
            />
            <div className="flex justify-end mt-3">
              <button
                onClick={handleSendReply}
                className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
              >
                Send Reply
              </button>
            </div>
          </div>
        ) : (
          // Render Reply Button
          <button
            onClick={() => handleReplyClick(request._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          >
            Reply
          </button>
        )}
      </div>
    </div>
  ))}
</div> */}

<div className="flex justify-center bg-white">
  {/* <div className="bg-gray-700 rounded-full px-4 py-2 mt-5 mb-4"> */}
    <h1 className="font-bold text-4xl text-blue-400">All Queries</h1>
  {/* </div> */}
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white ml-4">
  {queryData.map((request) => (
    <div
      key={request._id}
      className="bg-gray-800 rounded-lg shadow-md p-4 transition-transform hover:scale-105"
    >
      <div className="flex items-center mb-3">
        {/* <div className="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center mr-3">
          <span className="text-white font-bold">{request.firstname.charAt(0)}{request.lastname.charAt(0)}</span>
        </div> */}
        <div>
          <p className=" font-bold text-red-400">
            {request.firstname} {request.lastname}
          </p>
          <p className="text-gray-400 text-sm">{request.email}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-white">{request.message}</p>
      </div>
      <div className="flex justify-end">
        {showReply && replyData._id === request._id ? (
          // Render Reply Section
          <div className="w-full bg-gray-700 p-4 rounded-lg">
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="w-full h-20 border p-2 bg-gray-600 text-white hover:border-blue-500 focus:border-blue-500 rounded-md"
              placeholder="Type your reply here..."
            />
            <div className="flex justify-end mt-3">
              <button
                onClick={handleSendReply}
                className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
              >
                Send Reply
              </button>
            </div>
          </div>
        ) : (
          // Render Reply Button
          <button
            onClick={() => handleReplyClick(request._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          >
            Reply
          </button>
        )}
      </div>
    </div>
  ))}
</div>



 </>
    )

}

export default Query;
