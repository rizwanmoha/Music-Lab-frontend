import  { useEffect, useState } from "react";
import axios from "axios";


function Query() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("your-api-endpoint");
        
        
        setContacts(response.data.array);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Array Items</h1>
      <div className="grid grid-cols-3 gap-4">
        {contacts.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow">
           
            <p className="text-lg font-bold mb-2">{item.firstname}</p>
            <p className="text-lg font-bold mb-2">{item.lastname}</p>
            <p className="text-lg font-bold mb-2">{item.email}</p>
            <p className="text-gray-700">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Query;
