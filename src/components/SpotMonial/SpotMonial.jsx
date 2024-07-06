import background from '../../images/martyyy.jpeg';

function SpotMonial() {
  return (
    <div className='p-5 bg-white'>
      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={background} alt="" />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                    STUDENT SPOTLIGHT
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    “ For those who have enrolled our program, we have our instructor Mr. Carl Brown providing help to our students in whatever the problems they face during their learning. ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">Carl Brown (on Screen) </h3>
                <p className="text-gray-600 dark:text-gray-300">Classical and Western music Specialist at Stech</p>

            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default SpotMonial
