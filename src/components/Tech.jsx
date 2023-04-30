import React from 'react'
import {SectionWrapper} from '../hoc'
import {technologies} from '../constants'
import {BallCanvas} from '../components/canvas'


const Tech = () => {
  return (
    <>
    <div className="flex flex-row flex-wrap gap-10 justify-center">
          {technologies.map((technology)=>(
            <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon}/>
            </div>
          ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,'tech')