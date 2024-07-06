// import  { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { backendUrl } from "../url";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
 

//   const [categoryName, setCategoryName] = useState("");

//   const handleAddCategory = async () => {
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/v1/admin/create-category`,
//         {
//           name: categoryName,
//         }
//       );
//       console.log(response.data);

//       setCategoryName("");
//       toast.info("Category Added ");
//     } catch (error) {
//       console.error("Error adding category:", error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `${backendUrl}/api/v1/admin/allcategories`
//       );
//       setCategories(response.data.categories);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleDelete = async (categoryId) => {
//     try {
//       await axios.delete(
//         `${backendUrl}/api/v1/admin/deletecategories/${categoryId}`
//       );

//       setCategories(categories.filter((c) => c._id !== categoryId));
//       toast.info("Category Deleted");
//     } catch (error) {
//       console.error("Error deleting category:", error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [categories]);

//   return (
//     <>
     

// <div className="flex justify-center mb-8">
//   <h1 className="font-bold text-4xl text-white">List of Categories</h1>
// </div>
// <div className="max-w-3xl mx-auto">
//   <div className="px-4">
//     <h1 className="text-2xl font-bold text-gray-300 mb-4">Add category</h1>
//   </div>
//   <div className="w-full px-4 mb-6 flex justify-start">
//     <div className="flex w-full">
//       <input
//         type="text"
//         id="categoryName"
//         name="categoryName"
//         className="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-white outline-none focus:border-indigo-400"
//         placeholder="Enter category name"
//         value={categoryName}
//         onChange={(e) => setCategoryName(e.target.value)}
//       />
//     </div>
//   </div>
//   <div className="px-4 mb-8">
//     <button
//       className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-semibold"
//       type="submit"
//       onClick={handleAddCategory}
//     >
//       Add Category
//     </button>
//   </div>
// </div>
// <div className="max-w-3xl mx-auto">
//   <table className="w-full table-auto">
//     <thead>
//       <tr className="bg-gray-800 text-gray-300">
//         <th className="px-4 py-2">Name</th>
//         <th className="px-4 py-2">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {categories.map((c) => (
//         <tr key={c._id} className="bg-gray-900 hover:bg-gray-800">
//           <td className="px-4 py-2 text-gray-300">{c.name}</td>
//           <td className="px-4 py-2 flex gap-2">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-3 py-1 font-semibold"
//               onClick={() => {
//                 setVisible(true);
//                 setUpdatedName(c.name);
//                 setSelected(c);
//               }}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-1 font-semibold"
//               onClick={() => {
//                 handleDelete(c._id);
//               }}
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>



//     </>
//   );
// };

// export default Category;

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../url";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [visible, setVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [selected, setSelected] = useState(null);

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/admin/create-category`,
        {
          name: categoryName,
        }
      );
      console.log(response.data);
      setCategoryName("");
      toast.info("Category Added ");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/admin/allcategories`
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(
        `${backendUrl}/api/v1/admin/deletecategories/${categoryId}`
      );
      setCategories(categories.filter((c) => c._id !== categoryId));
      toast.info("Category Deleted");
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${backendUrl}/api/v1/admin/updatecategory/${selected._id}`,
        {
          name: updatedName,
        }
      );
      setCategories(
        categories.map((c) =>
          c._id === selected._id ? { ...c, name: updatedName } : c
        )
      );
      setVisible(false);
      toast.info("Category Updated");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categories]);

  return (
    <>
      <div className="flex justify-center mb-8">
        <h1 className="font-bold text-4xl text-white">List of Categories</h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="px-4">
          <h1 className="text-2xl font-bold text-gray-300 mb-4">
            Add category
          </h1>
        </div>
        <div className="w-full px-4 mb-6 flex justify-start">
          <div className="flex w-full">
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-white outline-none focus:border-indigo-400"
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
        </div>
        <div className="px-4 mb-8">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-semibold"
            type="submit"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c._id} className="bg-gray-900 hover:bg-gray-800">
                <td className="px-4 py-2 text-gray-300">
                  {visible && selected._id === c._id ? (
                    <input
                      type="text"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                      className="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-white outline-none focus:border-indigo-400"
                    />
                  ) : (
                    c.name
                  )}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  {visible && selected._id === c._id ? (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white rounded-lg px-3 py-1 font-semibold"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-3 py-1 font-semibold"
                      onClick={() => {
                        setVisible(true);
                        setUpdatedName(c.name);
                        setSelected(c);
                      }}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-1 font-semibold"
                    onClick={() => {
                      handleDelete(c._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Category;
