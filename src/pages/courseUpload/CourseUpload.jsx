import { useState } from 'react'
import sidepic from '../../images/signup-pic.jpg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import background from '../../images/contactUsBg.jpg';
import { backendUrl } from '../../url';


const CourseUpload = () => {

    const navigate = useNavigate();
    const teacher  = useSelector((state) => state.auth);
    const [file, setFile]  = useState();
    const [loading,setLoading] = useState(false);

    async function submitFormHandler(e){
        e.preventDefault();
        console.log(e.target.coursename.value);
        const formData = new FormData();
        
        formData.append('title',e.target.coursename.value);
        formData.append('description',e.target.coursedesc.value);
        formData.append('instructor',e.target.instructor.value);
        formData.append('teacherId', teacher.id);
        formData.append('category',e.target.category.value);
        formData.append('price',e.target.price.value);
        formData.append('image', file);
        

        console.log(formData);
        setLoading(true)
        const response = await axios.post(`${backendUrl}/api/course/createcourse`,formData,{
          headers:{
            'Content-Type': 'multipart/form-data',
            'Authorization' : teacher.token
          }
        });

        console.log(response)
        if(response.status  === 200){
          toast.success("Course Uploaded Successfully");
          navigate(`/createcourse/${response.data.course._id}`);
        }

        setLoading(false)
    }







  return (
    <div className="flex flex-row bg-fuchsia-200" >
      <div className="basis-1/3"/>

    <div className='p-4 m-4 basis-1/3'>
          <form className="w-full max-w-lg bg-purple-50 border-black border-double border-3 rounded-xl p-3" onSubmit={(e)=>submitFormHandler(e)}>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-[100%] px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name" >
          Course Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="coursename"/>
        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
     

    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Course Description
        </label>
        <div className="">
        <textarea className="appearance-none block w-full max-w-[700px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name ="coursedesc" id="grid-password"  
        placeholder="This Course will Teach you the basics of ...." type="text" rows={5}/>
        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city" >
        Instructor Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" name="instructor" defaultValue={teacher.firstName} />
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          Category
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  name="category">
            <option>Beginner</option>
            <option>Rock</option>
            <option>Metal</option>
            <option>Blues</option>
            <option>Acoustic</option>
            <option>Music Theory</option>
            <option>Guitar Tone</option>
            <option>Guitar Technique</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
          Set Price
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" defaultValue="500" name='price' />
      </div>
      <div className='flex justify-center align-middle w-[100%] mt-2'>
          <div className='form-control'>
          <ImageUpload center name="file" id="image" file={file} setFile={setFile} />
          </div>
      </div>
    </div>
      <div className='flex justify-end'>
    <button type='submit' className='bg-purple-700 border-r-4 p-3 rounded-md text-white'>Submit</button>
    </div>
  </form>
        
      </div>

    
    <div className="basis-1/3"/>
    </div>
  )
}

export default CourseUpload;
