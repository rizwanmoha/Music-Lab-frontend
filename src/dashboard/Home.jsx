import  {useState , useEffect} from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
 import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
 import axios from 'axios';
import { backendUrl } from '../url';

function Home() {
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


    const data = [
        {
          name: 'Piano ',
          comments: 4000,
          likes: 2400,
          amt: 2400,
        },
        {
          name: 'Guitar',
          comments: 3000,
          likes: 1398,
          amt: 2210,
        },
        {
          name: 'Music Theory',
          comments: 2000,
          likes: 9800,
          amt: 2290,
        },
        {
          name: 'Digital Music',
          comments: 2780,
          likes: 3908,
          amt: 2000,
        },
        {
          name: 'Ableton',
          comments: 1890,
          likes: 4800,
          amt: 2181,
        },
        {
          name: 'Songwriting',
          comments: 2390,
          likes: 3800,
          amt: 2500,
        },
        {
          name: 'Audio',
          comments: 3490,
          likes: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Courses</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1 className="text-black">{courses}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{categories}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Users</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{users}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Queries</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{queries}</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="likes" fill="#8884d8" />
                <Bar dataKey="comments" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home