import React from 'react'
import { motion } from 'framer-motion'

export const Services = () => {
    return (
        <div className='pb-24  rounded-3xl'>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='pb-16 pl-10 text-6xl font-bold font-Parkinsans tracking-tight lg:mt-16 lg:text-8xl text-black pt-20 pb-10'>
                Services :
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='flex gap-10 p-4 flex-wrap justify-center '>
                {data.map((d, id) => (

                    <div key={id}
                        className='flex flex-col cursor-pointer bg-gray-800 justify-center py-6 px-10 text-center
            items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl shadow-indigo-400 md:min-h-[340px]
            w-[500px] card-item-div max-w-screen-md min-h-[260px] '>
                        <img className='w-[75px] mb-4' src={d.img} alt="" />
                        <h2 className='text-5xl font-review text-white font-bold'>{d.name}</h2>
                        <p className='pt-6 text-[24px] text-bold font-charm text-white'>{d.des}</p>

                    </div>


                ))}
            </motion.div>
        </div>
    )
}
export default Services;


const data = [
    {
        img: `../../assets/digital.svg`,
        name: `Digital Marketing for Business`,
        des: `Digital Marketing for Businesses: Comprehensive strategies to boost online visibility, drive engagement, and increase conversions through SEO, content marketing, and targeted campaigns.`,
    },
    {
        img: `../../assets/social.svg`,
        name: `Social Media Management`,
        des: `

Social Media Management: Curating and managing content across platforms to build brand presence, engage audiences, and grow your customer base.
`,
    },
    {
        img: `../../assets/html.svg`,
        name: `Website Development`,
        des: `

Website Development: Creating responsive, user-friendly websites tailored to your business needs, ensuring optimal performance and seamless user experience.`,
    },
    {
        img: `../../assets/ads.svg`,
        name: `Managing Ads Campaigns`,
        des: `
Managing Ads Campaigns: Designing and optimizing paid advertising campaigns across search engines and social media to drive targeted traffic and maximize ROI.`,
    },

]