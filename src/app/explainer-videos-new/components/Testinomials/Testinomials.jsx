"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images 
import Slide1 from "media/explainer-videos-new/testi1.png"
import Slide2 from "media/explainer-videos-new/testi2.png"

const Testinomials = () => {

    const explainerTestinomials = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className="py-[50px] lg:py-[100px] bg-[url('../../public/explainer-videos-new/testinomials-bg.png')] bg-cover bg-no-repeat">
                <div className="px-5 lg:px-8 xl:px-0 max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-7 items-center">
                        <div className="col-span-12 lg:col-span-5">
                            <span className='text-[#333] text-[18px] md:text-[24px] font-[400] font-sans mb-[4px]'>TESTIMONIALS</span>
                            <h2 className='text-[#333] text-[30px] md:text-[40px] mb-[13px] font-[700] poppins leading-[1.1]'>What Our Valuable
                                Clients Say</h2>
                            <p className='text-[#333] text-[18px] font-sans leading-[1.43] lg:w-10/12'>We have proudly served an awesome client base by
                                delivering comprehensive design solutions. Our clients'
                                feedback and appreciation will explain it all.</p>

                            <div className="flex items-center justify-between mt-6 lg:mt-14">
                                <div className="btn1">
                                    <a href="tel:012-345-6789;" className='text-[12px] md:text-[16px] border border-[#f36e16] rounded-[30px] text-[#282828] font-[700] poppins py-[12px] px-[18px] md:px-[35px] hover:bg-[#f36e16] hover:duration-700 duration-700 ease-in-out hover:text-white'>
                                        CHAT NOW <span className='font-[500]'>TO AVAIL THIS OFFER</span>
                                    </a>
                                </div>
                                <div className="chat">
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-[#261564] font-[700] text-[16px] md:text-[20px] leading-[1.2] inline-block cursor-pointer poppins text-center'>
                                        <span className='block text-[13px]'>24/7 Available </span>
                                        Live Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <div className="slides lg:w-10/12 ml-auto">
                                <Slider {...explainerTestinomials} className="explainerTestinomials">
                                    <div className='px-4'>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5">
                                            <div className='group'>
                                                <div className="testicard bg-white border-[#d5d5d5] border pt-[1.5rem] px-[1.5rem] pb-[2rem] shadow-md mb-[3.5rem] group-hover:bg-[#261564] group-hover:duration-700 duration-700 ease-in-out relative before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-[-30px] before:w-0 before:h-0">
                                                    <p className='text-[16px] leading-[1.5] font-sans text-black group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out mb-4'>
                                                        A true professional - no fuss, hassle-free cooperation -
                                                        Explainer Videos Team quickly understands your needs and
                                                        gets straight to it. Quality of work is excellent. Highly
                                                        recommended.
                                                    </p>
                                                    <h5 className='text-[18px] font-[700] text-black group-hover:text-white group-hover:duration-700 duration-700 ease-in-out poppins'>RICK JONAS</h5>
                                                    <h6 className='text-[#333] text-[18px] font-[400] font-sans group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out'>Creative Manager</h6>
                                                </div>
                                                <Image src={Slide1} alt='Infinity Animations' className='mx-auto block' />
                                            </div>
                                            <div className='group'>
                                                <div className="testicard bg-white border-[#d5d5d5] border pt-[1.5rem] px-[1.5rem] pb-[2rem] shadow-md mb-[3.5rem] group-hover:bg-[#261564] group-hover:duration-700 duration-700 ease-in-out relative before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-[-30px] before:w-0 before:h-0">
                                                    <p className='text-[16px] leading-[1.5] font-sans text-black group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out mb-4'>
                                                        It was really great working with Explainer Videos Team, They
                                                        was very responsive and helped customize a great, short
                                                        video for my son who graduated medical school. They was able
                                                        to incorporate all of my ideas for the video and bring the
                                                        animations to life. It made a very special day all the more
                                                        memorable.
                                                    </p>
                                                    <h5 className='text-[18px] font-[700] text-black group-hover:text-white group-hover:duration-700 duration-700 ease-in-out poppins'>RANDY OBREIN</h5>
                                                    <h6 className='text-[#333] text-[18px] font-[400] font-sans group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out'>Creative Head</h6>
                                                </div>
                                                <Image src={Slide2} alt='Infinity Animations' className='mx-auto block' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-4'>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5">
                                            <div className='group'>
                                                <div className="testicard bg-white border-[#d5d5d5] border pt-[1.5rem] px-[1.5rem] pb-[2rem] shadow-md mb-[3.5rem] group-hover:bg-[#261564] group-hover:duration-700 duration-700 ease-in-out relative before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-[-30px] before:w-0 before:h-0">
                                                    <p className='text-[16px] leading-[1.5] font-sans text-black group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out mb-4'>
                                                        A true professional - no fuss, hassle-free cooperation -
                                                        Explainer Videos Team quickly understands your needs and
                                                        gets straight to it. Quality of work is excellent. Highly
                                                        recommended.
                                                    </p>
                                                    <h5 className='text-[18px] font-[700] text-black group-hover:text-white group-hover:duration-700 duration-700 ease-in-out poppins'>RICK JONAS</h5>
                                                    <h6 className='text-[#333] text-[18px] font-[400] font-sans group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out'>Creative Manager</h6>
                                                </div>
                                                <Image src={Slide1} alt='Infinity Animations' className='mx-auto block' />
                                            </div>
                                            <div className='group'>
                                                <div className="testicard bg-white border-[#d5d5d5] border pt-[1.5rem] px-[1.5rem] pb-[2rem] shadow-md mb-[3.5rem] group-hover:bg-[#261564] group-hover:duration-700 duration-700 ease-in-out relative before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-[-30px] before:w-0 before:h-0">
                                                    <p className='text-[16px] leading-[1.5] font-sans text-black group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out mb-4'>
                                                        It was really great working with Explainer Videos Team, They
                                                        was very responsive and helped customize a great, short
                                                        video for my son who graduated medical school. They was able
                                                        to incorporate all of my ideas for the video and bring the
                                                        animations to life. It made a very special day all the more
                                                        memorable.
                                                    </p>
                                                    <h5 className='text-[18px] font-[700] text-black group-hover:text-white group-hover:duration-700 duration-700 ease-in-out poppins'>RANDY OBREIN</h5>
                                                    <h6 className='text-[#333] text-[18px] font-[400] font-sans group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out'>Creative Head</h6>
                                                </div>
                                                <Image src={Slide2} alt='Infinity Animations' className='mx-auto block' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-4'>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5">
                                            <div className='group'>
                                                <div className="testicard bg-white border-[#d5d5d5] border pt-[1.5rem] px-[1.5rem] pb-[2rem] shadow-md mb-[3.5rem] group-hover:bg-[#261564] group-hover:duration-700 duration-700 ease-in-out relative before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-[-30px] before:w-0 before:h-0">
                                                    <p className='text-[16px] leading-[1.5] font-sans text-black group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out mb-4'>
                                                        A true professional - no fuss, hassle-free cooperation -
                                                        Explainer Videos Team quickly understands your needs and
                                                        gets straight to it. Quality of work is excellent. Highly
                                                        recommended.
                                                    </p>
                                                    <h5 className='text-[18px] font-[700] text-black group-hover:text-white group-hover:duration-700 duration-700 ease-in-out poppins'>RICK JONAS</h5>
                                                    <h6 className='text-[#333] text-[18px] font-[400] font-sans group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out'>Creative Manager</h6>
                                                </div>
                                                <Image src={Slide1} alt='Infinity Animations' className='mx-auto block' />
                                            </div>
                                            <div className='group'>
                                                <div className="testicard bg-white border-[#d5d5d5] border pt-[1.5rem] px-[1.5rem] pb-[2rem] shadow-md mb-[3.5rem] group-hover:bg-[#261564] group-hover:duration-700 duration-700 ease-in-out relative before:content-[''] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-[-30px] before:w-0 before:h-0">
                                                    <p className='text-[16px] leading-[1.5] font-sans text-black group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out mb-4'>
                                                        It was really great working with Explainer Videos Team, They
                                                        was very responsive and helped customize a great, short
                                                        video for my son who graduated medical school. They was able
                                                        to incorporate all of my ideas for the video and bring the
                                                        animations to life. It made a very special day all the more
                                                        memorable.
                                                    </p>
                                                    <h5 className='text-[18px] font-[700] text-black group-hover:text-white group-hover:duration-700 duration-700 ease-in-out poppins'>RANDY OBREIN</h5>
                                                    <h6 className='text-[#333] text-[18px] font-[400] font-sans group-hover:text-[#938ab2] group-hover:duration-700 duration-700 ease-in-out'>Creative Head</h6>
                                                </div>
                                                <Image src={Slide2} alt='Infinity Animations' className='mx-auto block' />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testinomials
