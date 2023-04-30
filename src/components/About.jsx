import React from 'react'
import { Tilt } from 'react-tilt'
import {fadeIn,textVariant} from '../utils/motion'
import {styles} from '../styles'
import {services} from '../constants'
import {motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
       <motion.div variants={fadeIn("right","spring",0.5* index, 0.75)} className='w-full green-pink-gradient p-[1px] shadow-card rounded-[20px]'>
           <div options={{
            max:45,
            scale:1,
            speed:450
           }}
           className='bg-tertiary rounded-[20px] px-5 py-12 min-h-[280px] flex flex-col justify-evenly items-center'
           >
             <img src={icon} alt="icon" className='w-16 h-16 object-contain'/>
             <h3 className='text-white font-bold text-[20px] text-center '>{title}</h3>
           </div>
       </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1 ,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    As Full Stack Web Developer , I am passionate about building Stunning 3D Visuals , UX/UI Interfaces and web Applications that provide seamless user Experience and Solve real Life Problems.With Strong Background in Software Engineering , I have a solid Foundation in Computer Science Concepts and I am highly skilled in writing Clean, reusable and maintainable code for Complex Dynamic web Applications using Vanilla Javascript and Its frameworks.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
     {services.map((service,index)=>(
      <ServiceCard key={service.title} {...service} index={index} />
     ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,'about')