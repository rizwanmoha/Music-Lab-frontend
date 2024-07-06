import {useState} from "react";
import "./TeacherEditProfile.css";
import profileImage from "./teacher_Profile_image copy.png";
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { backendUrl } from "../../url";

const TeacherEditProfile = () => {

  const teacher  = useSelector((state) => state.auth);

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [education,setEducation] = useState("");
    const [experience,setExperience] = useState("");
    const [achievement,setAchievement] = useState("");
    // const [file,setFile] = useState("");
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState(profileImage);

    const navigate = useNavigate();
    const { id } = useParams();


    const updateProfileDataChange = (e) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };


    const addTeacherData = async() =>{
      const formData = new FormData();
      // formData.append("photo",file);
      formData.set("avatar", avatar);
      formData.set("firstName",firstName);
      formData.set("lastName",lastName);
      formData.append("username",username);
      formData.set("email",email);
      formData.set("location",location);
      formData.set("description",description);
      formData.set("education",education);
      formData.set("experience",experience);
      formData.set("achievement",achievement);
      console.log(formData);
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      try{
        console.log(formData);
          const response = await axios.put(`${backendUrl}/api/v1/user/teachereditprofile/${id}`,formData, config);

            console.log("yaha tak code chala hai")

          if(response.status == 200){
             navigate('/teacher/dashboard');
            toast.success("Your Profile Updated is Successfully");
          }else{
            alert("error");
          }



      }catch(error){
        console.error("Request error:", error);
        alert("An error occurred while sending the request.");
      }

    }

  return (
    <>
      <div className="container-body">
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl w-full overflow-hidden"
            style={{ maxWidth: "1000px" }}
          >
            <div
              className="w-full py-10 px-5 md:px-10 mx-auto max-w-screen-md"
              style={{ maxWidth: "70%" }}
            >
              <h2 className="updateProfileHeading">Update Teacher Profile</h2>

              <div className="flex -mx-3 py-5">
                <div className="w-1/2 px-3">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-semibold px-1"
                  >
                    First name
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(e)=>setFirstName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-3">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-semibold px-1"
                  >
                    Last name
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    UserName
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e)=>setUserName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="username9430"
                      // onChange={handleChange}
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
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Location
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={location}
                      onChange={(e)=>setLocation(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Delhi"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Description
                  </label>
                  <div className="flex">
                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write Your Description..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Education
                  </label>
                  <div className="flex">
                    <textarea
                      id="education"
                      name="education"
                      value={education}
                      onChange={(e)=>setEducation(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write your Education..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Experience
                  </label>
                  <div className="flex">
                    <textarea
                      id="experience"
                      name="experience"
                      value={experience}
                      onChange={(e)=>setExperience(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write Your Experience..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Achievements
                  </label>
                  <div className="flex">
                    <textarea
                      id="achievements"
                      name="achievements"
                      value={achievement}
                      onChange={(e)=>setAchievement(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write Your Achievements..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div id="updateProfileImage" className="flex items-center">
                <img src={avatarPreview} alt="Avatar Preview" className="mr-4" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  // onChange={(e)=>setFile(e.target.files[0])}
                  // onChange={updateProfileDataChange}
                  onChange={updateProfileDataChange}
                />
              </div>

              <div className="flex -mx-3 py-5">
                <div className="w-full px-3 ">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-1 py-1 font-semibold"
                    type="submit"
                    onClick={addTeacherData}
                    // onClick={handleRegister}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherEditProfile;
