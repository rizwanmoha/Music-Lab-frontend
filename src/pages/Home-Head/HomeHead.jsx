import bg from '../../images/homebg2.jpg';
import  {useState , useEffect} from 'react'

import axios from 'axios';
import {Link, } from 'react-router-dom'
import { backendUrl } from '../../url';

const links = [
    { name: 'All Courses', href: '/catalogue' },
    { name: 'Our Team', href: '/instructor' },
    { name: 'About Us', href: '/' },

  ]
 
  
  export default function HomeHead() {


    const [courses, setCourses] = useState();
  const [categories, setCategories] = useState();
  const [queries, setQueries] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
            
            const coursesResponse = await axios.get(`${backendUrl}/api/v1/admin/custom`);
            setCourses(coursesResponse.data.courseCount);
            setCategories(coursesResponse.data.categoryCount);
            setQueries(coursesResponse.data.contactCount);
            setUsers(coursesResponse.data.userCount);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

const stats = [
  { name: 'Students', value: users },
  { name: 'Instructors', value: '36' },
  { name: 'Courses', value: courses },
  { name: 'Reviews', value: '35' },
]
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img style={{opacity: 0.45}}
          src={bg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff55f1] to-[#a40882] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-6 max-w-2xl lg:mx-0" style={{color:"blue"}}>
            <h1 className="text-3xl font-bold tracking-tight text-purple-400 sm:text-9xl">MusicLab</h1>
            {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">REVERB</h1> */}
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Begin your Musical Journey with MusicLabs! From guitar basics to Heavy Metal, we have got everything covered for you
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} to={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  