
import intro_carl from "../../Videos/jamplay_vid.mp4"
import Button from '../Buttons/Button'

function Testimonial() {
  return (
    <div className='p-8 pl-2 bg-violet-300'>
      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <video controls={true} className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-50 rounded-lg lg:h-[36rem]" src={intro_carl} alt="" ></video>
            {/* <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /> */}
            
            <div className="mt-8 ml-10 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                    Have a look at Our team!
                </h1>

                <p className=" max-w-2xl mt-6 text-gray-500 dark:text-gray-400 ">
                    “ We have music instructors from the best institutes of music. Heavy metal like Metallica, Megadeth, Black Sabbath. Hard Rock like AC/DC and Guns-and-Roses, Classy Blues like Pink Floyd and The Beatles, Jimi Hendrix's blues chords, core music theory, Amplifier settings, guitar tone, guitar
            maintenance. You name it, we have it. Have a look at our instructors below! ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">(On screen) Carl Brown</h3>
                <p className="text-gray-600 dark:text-gray-300">Classical and Western music Specialist at Stech</p>
                <div className='py-3'>
                 <Button>Our Instructors</Button>
                </div>

                {/* <div className="flex items-center justify-between mt-12 lg:justify-start">

                    <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Testimonial
