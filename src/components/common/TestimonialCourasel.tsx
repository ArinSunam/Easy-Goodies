"use client"
import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonialData } from '@/dummy/testimonialData';
import Image from 'next/image';

const TestimonialCourasel = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <div className='slider-container py-[60px]'>
      <Slider {...settings}>

        {testimonialData.map((el) => (
          <div className='flex flex-col items-center w-[90vw]'>
            <Image src={el.photo} alt='reviewer photo' height={110} width={110} className='rounded-full' />
            <h3 className='text-secondary text-xl font-semibold'>{el.name}</h3>
            <p className='text-[#999999] text-[14px] font-semibold'>{el.job}</p>
            <blockquote className='text-[#999999] text-[17px] italic'>{el.review}</blockquote>

          </div>
        ))}
      </Slider>

    </div>
  )
}

export default TestimonialCourasel
