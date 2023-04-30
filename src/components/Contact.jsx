import React,{useState,useRef} from 'react'
import {motion} from 'framer-motion'
import { slideIn } from '../utils/motion'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import {EarthCanvas} from './canvas'


const Contact = () => {
  const [loading , setLoading] = useState(false)
  const formRef = useRef()
  const [form , setForm]  = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleChange = (e) =>{
    const { name , value} = e.target;
    setForm({...form, [name]: value })
  }
  const handleClick = (e) => {
     e.preventDefault();
     setLoading(true)

     emailjs.send('service_falkg8j','template_9kce7pg',{
        from_name: form.name,
        to_name: 'Abdullah',
        from_email:form.email,
        to_email: 'codingbucketorg@gmail.com',
        message:form.message
     },
     'dh1UFv4Syxw0lEuu8'
     ).then(()=>{
      setLoading(false)
      alert(`Thank You.I will get back to you as soon as possible :) `)
      setForm({
        name:'',
        email:'',
        message:''
      })
     },(error)=>{
      setLoading(false)
      alert('Something went wrong.try again')
     })
  }
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form ref={formRef} onSubmit={handleClick} className="mt-12flex flex-col gap-8">
         <label className='flex flex-col'>
           <span className="text-white font-medium mb-4 mt-2">Your Name</span>
           <input
           type="text"
           name="name"
           value={form.name}
           placeholder='What is your Name?'
           onChange={handleChange}
           className="bg-tertiary placeholder:text-secondary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
           />
         </label>
         <label className='flex flex-col'>
           <span className="text-white font-medium mb-3 mt-2">Your Email</span>
           <input
           type="text"
           name="email"
           value={form.email}
           placeholder='Your Email'
           onChange={handleChange}
           className="bg-tertiary placeholder:text-secondary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
           />
         </label>
         <label className='flex flex-col'>
           <span className="text-white font-medium mb-4 mt-2">Your Message</span>
           <textarea
           name="message"
           rows="7"
           value={form.message}
           placeholder='What do you want to say?'
           onChange={handleChange}
           className="bg-tertiary placeholder:text-secondary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
           />
         </label>
         <button 
         type="submit"
         className="hover:bg-tertiary px-8 py-3 mt-4 font-bold w-fit rounded-lg shadow-card green-pink-gradient text-white outline-none "
         >
        {loading ? 'Loading...':'Send'}
         </button>
      </form>
      </motion.div>

      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
           <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")