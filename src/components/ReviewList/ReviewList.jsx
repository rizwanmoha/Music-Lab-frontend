
import background from '../../images/reviewBg.jpg'
import Rating from '../Rating/Rating'

function ReviewList() {
  return (
    <div className='p-3 mr-4 bg-fuchsia-400' >
      <section className="bg-white dark:bg-gray-900" style={{ backgroundImage: `url(${background})` }}>
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center pb-20">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"> What our Students think about us</h1>

        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="relative">
                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Guitarist at AC/DC</p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
                    The best courses you will find anywhere!
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className=" text-gray-500 text-lg dark:text-gray-400">
                    I had a hard time in finding good quality courses online. Being a busy bee, I find this website best for online music lessons.
                </p>

                <Rating />


            </div>

            <div>
                <div className="relative">

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <img className="object-cover object-center w-10 h-10 rounded-full"src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Arthur melo</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Sound Engineer at Fandom</p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
                    Easy to learn courses
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-lg text-gray-500 dark:text-gray-400">
                    The instructors have never been less helpful! Now I don't need to look around for advertisements for good quality music courses!
                </p>
                <Rating />

            </div>

            <div>
                <div className="relative">

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Drummer at The Music School</p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
                    Easy to access, low in cost
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-lg text-gray-500 dark:text-gray-400">
                    I never imagined that I will get such quality courses in such low costs! Thank you MusicLabs!
                </p>

                <Rating />



            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ReviewList
