"use client"
import React from 'react'
import Image from 'next/image'
// Import Images
import AwardBg from "media/infinity-studio-lp-2/awardwinning-bg.png"
import Partners1 from 'media/infinity-studio/partner1.png'
import Partners1a from 'media/infinity-studio/partner1a.png'
import Partners2 from 'media/infinity-studio/partner2.png'
import Partners2a from 'media/infinity-studio/partner2a.png'
import Partners3 from 'media/infinity-studio/partner3.png'
import Partners3a from 'media/infinity-studio/partner3a.png'
import Partners4 from 'media/infinity-studio/partner4.png'
import Partners4a from 'media/infinity-studio/partner4a.png'
import Partners5 from 'media/infinity-studio/partner5.png'
import Partners5a from 'media/infinity-studio/partner5a.png'
import Partners6 from 'media/infinity-studio/partner6.png'
import Partners6a from 'media/infinity-studio/partner6a.png'
import Partners7 from 'media/infinity-studio/partner7.png'
import Partners7a from 'media/infinity-studio/partner7a.png'
import Partners8 from 'media/infinity-studio/partner8.png'
import Partners8a from 'media/infinity-studio/partner8a.png'
import Partners9 from 'media/infinity-studio/partner9.png'
import Partners9a from 'media/infinity-studio/partner9a.png'
import Partners10 from 'media/infinity-studio/partner10.png'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AwardWinning = () => {

    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: false,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <section className='bg-white pt-[30px] md:pt-[80px] relative'>
            <Image src={AwardBg} alt='Inifnity Animation' fill={true} className='z-[1] object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div>
                            <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2'>An <span className='text-[#F5090B]'>Clients </span> We Serve</h2>
                            <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-7/12 mx-auto mb-4 md:mb-0'>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 px-2 mx-auto">
                <Slider {...testiSlider} className="partnerSlider">
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners1} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners1a} alt='Partners' className='  w-[75%] md:w-[50%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners2} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners2a} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners3} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners3a} alt='Partners' className='  w-[80%] md:w-[60%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners4} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners4a} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners5} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners5a} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners6} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners6a} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners7} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners7a} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners8} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners8a} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners9} alt='Partners' className='  w-[80%] md:w-[60%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners9a} alt='Partners' className='  w-[80%] md:w-[50%] mx-auto px-5' />
                    </div>
                    <div className='mx-[45px] px-[15px]'>
                        <Image src={Partners10} alt='Partners' className='  w-[100%] md:w-[80%] mx-auto px-5' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default AwardWinning
