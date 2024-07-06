import { Link } from 'react-router-dom'
import course1 from '../../images/beginnerpic.jpg'
import course2 from '../../images/course_rock.jpg'
import course3 from '../../images/metalpic.jpg'
import course4 from '../../images/bluespic.jpg'
import course5 from '../../images/acousticpic.jpg'
import course6 from '../../images/musictheorypic.jpg'
import course7 from '../../images/guitartone.jpg'
import course8 from '../../images/legendstyles.jpg'
import course9 from '../../images/guitartechnique.jpg'

const Grid = () => {
  return (
    <div className='p-5 pr-3 bg-white'>
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Have a look at our Categories! </h1>

            {/* <button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button> */}
        </div>

        <hr className="my-8 border-gray-700 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className='border-2 rounded-xl border-purple-400 p-3'>
                <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course1} alt="" />
                 </Link>
  

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">BEGINNER</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Get Started with your Music journey!
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Learn from the best of the instructors, from the most beginner chords to Arpeggios. We cover everything!
                    </p>


                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course2} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">rock</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        For those about to rock, we salute you!</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Ever wondered how Jimmy Page wrote such heart touching solos? How to play the "Iron Man" Riff? Check out our rock courses for all the answers!
                    </p>



                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course3} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">metal</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Become a Master of Metal! 
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        From the basic 0-0-0-0 Riffs, to the fastest solos - we have everything. Turn your distortion pedal on and join us!
                    </p>

                   
                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course4} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">blues</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        There's nothing better than The Blues!
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Explore the legacy of The Beatles, the composition of Pink Floyd solos, and much more under our Blues courses!
                    </p>

                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course5} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Acoustic</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        The soothingness of the classical guitar
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Go back to the roots of guitar with us with the best acoustic guitar courses available on the internet!
                    </p>

                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course6} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Music Theory</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        No need to be scared of sheet music anymore!
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Understand the scales, melodies, harmonies and circle of fifths of music. Join us and you'll never be afraid of music theory again!
                    </p>


                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course7} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Guitar Tone</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Find the right tone which you love
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Finding the right tone is the key to produce the kind of music that you love. Learn everything about tones and pedals with us!
                    </p>

                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course8} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Legendary Artists</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Chase your dreams with us!
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Learn the guitar Techniques of your favourite artists! Van Halen, Slash, Angus Young, James Hetfield, or David Gilmour - we know everything!
                    </p>

                </div>
            </div>

            <div className='border-2 rounded-xl border-purple-400 p-3'>
            <Link to ="/catalogue">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course9} alt="" />
                 </Link>
  
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Guitar Technique</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        If you play it, own it
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Worry no more about how to learn tapping or sweep picking! Check out our Technique lessons to learn every skill that you always wanted to!
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default Grid
