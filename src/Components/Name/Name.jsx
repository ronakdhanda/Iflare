import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from '../Typewriter/Typewriter'

const container = (delay) =>({
  hidden: {x: -100, opacity: 0 },
  visible:{
      x:0,
      opacity:1,
      transition:{ duration: 0.5, delay: delay}
  }
})

const Name = () => {
  return (
    <div className='h-2/3 w-full flex flex-wrap flex-col  items-center justify-center
    '>
      <motion.h1
      variants={container(0)}
      initial='hidden'
      animate='visible'
      className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-8xl tracking-tight text-transparent font-aref text-wrap'>IFLARE <br /> DIGITALS</motion.h1>
      <Typewriter/>
    </div>

  )
}

export default Name