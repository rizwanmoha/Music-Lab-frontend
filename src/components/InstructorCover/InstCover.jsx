import React from 'react'
import background from '../../images/spotlight.jpg'

function InstCover() {
  return (
    <div className='p-3 bg-white' >
     <div className="w-full bg-white bg-center bg-cover h-[38rem]" >
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}} className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">Our Instructors</h1>
                <p className="text-3xl font-semibold text-white lg:text-xl">If you’re gonna take guitar lessons, why not learn from the
                best? At Masters Of Music, you can learn guitar from the best players and the best instructors! Our
                roster includes a Grammy Award winner, a Country Music Hall of Famer, the National Flatpicking
                Champion, dozens of professional touring musicians and many more lifelong educators.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default InstCover
