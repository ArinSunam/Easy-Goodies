"use client"
import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonialData } from '@/dummy/testimonialData';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCourasel = () => {

  let settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <div className='slider-container py-[100px]'>
      <Slider {...settings}>




        {testimonialData.map((el: any, index) => (
          <div key={index}>
            <div className='py-[60px] flex flex-col items-center gap-5'>
              <Image src={el.photo} alt='reviewer photo' height={110} width={110} className='rounded-full' />
              <h3 className='text-secondary text-xl font-semibold'>{el.name}</h3>
              <p className='text-[#999999] text-[14px] font-semibold'>{el.job}</p>
              <blockquote className='w-[60vw] text-[#999999] text-[17px] text-center tracking-[0.1px] leading-[180%] italic'>"{el.review}"</blockquote>
              <p className='text-[#999999] text-2xl font-bold'><FaQuoteRight /></p>
            </div>
          </div>
        ))}

      </Slider>

    </div>
  )
}

export default TestimonialCourasel
