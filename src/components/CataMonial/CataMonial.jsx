import React from 'react'
import cover from '../../images/catalogueCover.jpeg'

function CataMonial() {
  return (
    <div className=' bg-white'>
      <section className=" bg-white dark:bg-gray-900">
    <div className="max-w-6xl px-6 py-10 mx-auto">
        

        <h1 className="pb-5 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Guitar Lessons that really work!
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-fuchsia-300 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-fuchsia-300 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={cover} alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white"></p>
                        <p className="text-purple-950 ">We are MusicLabs</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> “Learn from the best, know what you need. Easy to access courses and help is what we provide. If you are a professional musician then you must Join us to become an instructor and more importantly, become a patrion of MusicLabs”.</p>
                    
                  
                </div>
            </div>
        </main>
    </div>
</section>
    </div>
  )
}

export default CataMonial
