import React from 'react'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github, goto } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const ProjectCard = ({name, index , source_code_link,description ,url_link,tags, image}) =>{
  return (
  <motion.div variants={fadeIn("up","spring", index * 0.5 , 0.75)}>
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
            <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 justify-end m-3 flex card-image_hover'>
                 <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>window.open(source_code_link,"_blank")}>
                     <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
                 </div>
                 {url_link && (
                   <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>window.open(url_link,"_blank")}>
                   <img src={goto} alt="github" className='w-1/2 h-1/2 rounded-full bg-white object-contain'/>
                   </div>
                 )}
            </div> 
        </div>

        <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
             {tags.map((tag)=>(
              <p className={`text-[14px] ${tag.color}`} key={tag.name}>
                #{tag.name}
              </p>
             ))}
        </div>
      </Tilt>
  </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p className='text-secondary text-[17px] leading-[30px] mt-3 max-w-3xl'>
           Following Projects showcases my skills and experience through real-world examples of my work.Each project briefly described with links to code repositories and live demos in it.It reflects my ability to solve complex problems , work with different technologies ,and manage projects effectively.
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) =>(
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"")