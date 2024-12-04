import React from 'react'
import { motion } from 'framer-motion'
import contact from "../../assets/contact-24hr-svgrepo-com.svg"
import mail from "../../assets/letter-contact-svgrepo-com.svg"

export const Contact = () => {
    return (
        <div className='border-b border-white pb-10'>
            {/* <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-8xl rounded text-white font-thin ">Get in Touch</motion.h1>
            <div className="text-center tracking-tighter pt-4 text-white"> */}
            {/* <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration:0.5 }}
                    className='my-4'>address</motion.p> */}

            {/* <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='my-4'><div className='flex flex-row items-center justify-center gap-2 cursor-pointer'>
                        <div><img className='h-[50px]' src={contact} alt="" /></div>
                        <div>8595249588</div>
                        </div></motion.p> */}
            {/* <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='my-4'><div className='flex flex-row items-center justify-center gap-2 cursor-pointer'>
                    <div><img className='h-[50px] ' src={mail} alt="" /></div>
                    <div>iflaredigitals@gmail.com</div>
                    </div></motion.p> */}
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            
            
            className='flex flex-row flex-wrap justify-around p-10'>
                <div className='w-1/2 justify-center items-center flex flex-col'>
                    <h1 className='text-wrap text-8xl font-bold text-black'>We're here</h1>
                    <span className='text-black pt-4' >Our door is always open for a cup of coffee</span>
                </div>
                <div className='bg-blue-500 backdrop-blur-sm rounded-xl'>
                    <div className='w-fit p-16'>
                        <h1 className='text-wrap text-7xl font-bold text-black font-aref'>Let's talk.</h1>
                        <span className='text-white pt-5 font-tittle'>Get in touch at:</span>
                        <div className='flex justify-left items-center gap-2 pt-7 text-black'>
                            <div><img className='h-[50px] ' src={mail} alt="" /></div>
                            <div className='font-Parkinsans'>iflaredigitals@gmail.com</div>
                        </div>

                        <div>
                            <div className='flex flex-row items-center justify-left gap-2 cursor-pointer pt-6 text-white'>
                                <div><img className='h-[50px]' src={contact} alt="" /></div>
                                <div className='font-Parkinsans'>8595249588</div>
                            </div>
                        </div>





                    </div>

                </div>
            </motion.div>

        </div>
    )
}
export default Contact;
