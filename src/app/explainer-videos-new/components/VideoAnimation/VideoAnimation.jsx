"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// icons
import { FaCaretRight } from "react-icons/fa";
// Images
import Slide1 from "media/explainer-videos-new/slide1.gif"
import Slide2 from "media/explainer-videos-new/slide2.gif"
import Slide3 from "media/explainer-videos-new/slide3.gif"
import Slide4 from "media/explainer-videos-new/slide4.gif"
import VideoImg from "media/explainer-videos-new/videoparticle.png"
import usePopup from '@/app/configs/store/Popup';

const VideoAnimation = () => {
    // Form Code Start
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (current) => {
        setCurrentSlide(current);
    };
    const brandSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        afterChange: handleSlideChange,
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
    const sliderContent = [
        {
            title: 'Typography',
            description: <>
                Give your business the exposure it needs <br className='lg:block hidden' />
                with a typography video that <br className='lg:block hidden' />
                helps you reach desired audiences and <br className='lg:block hidden' />
                boosts overall brand appeal.
            </>,
        },
        {
            title: 'Whiteboard Animation',
            description: <>
                Let the viewer see the concept come to <br className='lg:block hidden' />
                life as the animation gets drawn on the <br className='lg:block hidden' />
                whiteboard. Highly engaging video animation <br className='lg:block hidden' />
                for businesses that wants to connect.
            </>,
        },
        {
            title: 'Explainer Videos',
            description: <>
                Not just tell your audience the concept of <br className='lg:block hidden' />
                your animation, show it to them with explainer <br className='lg:block hidden' />
                videos that are relatable and communicate <br className='lg:block hidden' />
                on point.
            </>,
        },
        {
            title: '3D Animations',
            description: <>
                Give your viewers the engagement they <br className='lg:block hidden' />
                desire with 3D animations. Say more with <br className='lg:block hidden' />
                your animation and give your audience the <br className='lg:block hidden' />
                depth that adds to their experience.
            </>,
        },
        {
            title: '2D Animations',
            description: <>
                Get your illustrated 2D animations and <br className='lg:block hidden' />
                get the maximum results by communicating <br className='lg:block hidden' />
                with the audience as precisely as you <br className='lg:block hidden' />
                want to.
            </>,
        },

    ];
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='pt-[50px] pb-[90px] md:py-[70px] relative'>
                <div className="particle absolute right-0 top-0 bottom-0 flex items-center">
                    <Image src={VideoImg} alt='Infinity Animations' className='' />
                </div>
                <div className="txtOne lg:block hidden -rotate-90 absolute left-[-180px] xl:left-[-150px] top-[260px]">
                    <h3 className='text-[90px] text-[#f36e16] poppins font-[800]'>
                        Animation
                    </h3>
                </div>
                <div className="txtTwo lg:block hidden -rotate-90 absolute right-[-70px] top-[75px]">
                    <h3 className='text-[90px] text-[#010078] poppins font-[800]'>
                        Video
                    </h3>
                </div>
                <div className="px-5 lg:px-8 xl:px-0 max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12">
                            <h2 className="text-black font-[700] text-[30px] md:text-[40px] lg:text-[48px] capitalize mb-[8px] leading-[1.1] font-sans text-center">Choose Your Preferred Kind Of <span className="text-[#f36e16]"> Video Animation</span></h2>
                            <p className="text-[#333] text-[16px] mb-0 poppins leading-[1.43] text-center">We make creative Video animations of all types Come to us and we will make amazing animated videos for you!</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-y-7 items-center md:mt-9 lg:mt-16">
                        <div className="lg:col-span-1"></div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="md:ml-[43px]">
                                <h3 className='text-[#333] text-[30px] mb-[20px] font-[700] font-sans'>{sliderContent[currentSlide].title}</h3>
                                <p className='text-[20px] text-[#333] font-sans mb-[40px] leading-[1.43]'>
                                    {sliderContent[currentSlide].description}
                                </p>

                                <div className="flex items-center gap-x-4">
                                    <div className="btn1">
                                        <button onClick={popupHandle} className='text-[14px] md:text-[18px] border-2 border-[#f36e16] rounded-[30px] text-[#282828] font-[800] font-sans py-[14px] px-[25px] md:px-[35px] hover:bg-[#f36e16] hover:duration-700 duration-700 ease-in-out hover:text-white'>
                                            Let’s Get Started!
                                        </button>
                                    </div>
                                    <div className="btn1 group">
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-[14px] md:text-[18px] rounded-[30px] text-[#282828] font-[800] font-sans group-hover:bg-[#f36e16] group-hover:duration-700 duration-700 ease-in-out group-hover:text-white py-[14px] px-[35px] group-hover:px-[35px] flex items-center relative'>
                                            Live Chat
                                            <FaCaretRight className='text-[#f36e16] group-hover:text-white absolute right-0 top-[50%] translate-y-[-50%] text-[20px] duration-700 group-hover:right-[9px]' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1"></div>
                        <div className="col-span-12 lg:col-span-3">
                            <Slider {...brandSlider} className="expaliner_brandslider">
                                <div className='p-2'>
                                    <div className="card cardSliderShadow px-2 py-5 h-full min-h-[430px] flex items-center justify-center rounded-lg relative">
                                        <div className='slide'>
                                            <div className="content">
                                                <Image src={Slide1} alt='Infinity Animations' className='lg:min-h-auto md:min-h-[280px] lg:min-w-[120px] lg:min-h-[120px] md:min-w-[280px] mx-auto w-12/12 mb-3' />
                                                <h5 className='text-[23px] md:text-[30px] lg:text-[20px] font-[700] leading-[32px] lg:leading-[22px] tracking-normal text-[#2d3436] font-sans text-center'>
                                                    Typography <br />
                                                    Videos
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className="card cardSliderShadow px-2 py-5 h-full min-h-[430px] flex items-center justify-center rounded-lg relative">
                                        <div className='slide'>
                                            <div className="content">
                                                <Image src={Slide2} alt='Infinity Animations' className='lg:min-h-auto md:min-h-[280px] lg:min-w-[120px] lg:min-h-[120px] md:min-w-[280px] mx-auto w-12/12 mb-3' />
                                                <h5 className='text-[23px] md:text-[30px] lg:text-[20px] font-[700] leading-[32px] lg:leading-[22px] tracking-normal text-[#2d3436] font-sans text-center'>
                                                    Whiteboard  <br />
                                                    Animation
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className="card cardSliderShadow px-2 py-5 h-full min-h-[430px] flex items-center justify-center rounded-lg relative">
                                        <div className='slide'>
                                            <div className="content">
                                                <Image src={Slide3} alt='Infinity Animations' className='lg:min-h-auto md:min-h-[280px] lg:min-w-[120px] lg:min-h-[120px] md:min-w-[280px] mx-auto w-12/12 mb-3' />
                                                <h5 className='text-[23px] md:text-[30px] lg:text-[20px] font-[700] leading-[32px] lg:leading-[22px] tracking-normal text-[#2d3436] font-sans text-center'>
                                                    Explainer  <br />
                                                    Videos
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className="card cardSliderShadow px-2 py-5 h-full min-h-[430px] flex items-center justify-center rounded-lg relative">
                                        <div className='slide'>
                                            <div className="content">
                                                <Image src={Slide4} alt='Infinity Animations' className='lg:min-h-auto md:min-h-[280px] lg:min-w-[120px] lg:min-h-[120px] md:min-w-[280px] mx-auto w-12/12 mb-3' />
                                                <h5 className='text-[23px] md:text-[30px] lg:text-[20px] font-[700] leading-[32px] lg:leading-[22px] tracking-normal text-[#2d3436] font-sans text-center'>
                                                    3d <br />
                                                    Animations
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className="card cardSliderShadow px-2 py-5 h-full min-h-[430px] flex items-center justify-center rounded-lg relative">
                                        <div className='slide'>
                                            <div className="content">
                                                <Image src={Slide1} alt='Infinity Animations' className='lg:min-h-auto md:min-h-[280px] lg:min-w-[120px] lg:min-h-[120px] md:min-w-[280px] mx-auto w-12/12 mb-3' />
                                                <h5 className='text-[23px] md:text-[30px] lg:text-[20px] font-[700] leading-[32px] lg:leading-[22px] tracking-normal text-[#2d3436] font-sans text-center'>
                                                    2d <br />
                                                    Animations
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div >
                        <div className="col-span-1"></div>
                    </div >
                </div >
            </section >
        </>
    )
}

export default VideoAnimation
