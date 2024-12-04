import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,

  };

  return (
    <div className='w-[400px] m-auto
    '>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d,id) => (
            <div key={id} className=' h-[450px] text-white rounded-xl backdrop-blur-sm bg-black/70 '>
              <div className='h-36 rounded-t-xl flex items-center justify-center'>
                <img className='h-[40px]' src={d.img} alt="image" />
              </div>
              <div className='flex  flex-col justify-evenly items-center gap-4 p-5 rounded-sm text-zinc-900' >
                <h1 className='text-6xl text-pretty text-black text-transparent font-medium text-wrap  font-protest'>{d.name} </h1>
                <p className='text-wrap text-left font-review '>{d.review}</p>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  )
}


const data = [
  {
    name: `Concept`,
    review: `At Iflare Digitals, we transform visionary concepts into innovative idea and strategies that drive your brand forward.`,
    img: `src/assets/concept.svg`,
  },
  {
    name: `Ideas`,
    review: `Our expert team blends creativity with cutting-edge technology to develop social media platform that captivate and engage your audience.`,
    img:`src/assets/idea.svg`,
  },
  {
    name: `Solutions`,
    review: `We deliver practical Social media solutions tailored to your needs, ensuring your business thrives in the digital landscape.`,
    img: `src/assets/solutions.svg`,
  }
]


export default Carousel;