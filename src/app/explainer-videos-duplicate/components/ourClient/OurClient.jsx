"use client"

import React from 'react'
import Image from 'next/image'
import { Star } from 'heroicons-react';

//   Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// // ===== Images
import ClientImage from "media/explainer-videos/client.png"
import Client1 from "media/explainer-videos/client1.png"
import Client2 from "media/explainer-videos/client2.png"

const OurClient = () => {

    // Slider Start
    const ClientSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <section className="py-[30px] md:py-[70px] bg-[#FF2D4B] relative sm:before:absolute sm:before:content-[''] sm:before:h-full sm:before:w-[111px] 3xl:before:w-[145px] sm:before:right-0 sm:before:top-0 lg:before:bg-[#ff2d4c73] sm:before:z-50 lg:h-full">
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12">
                            <h2 className='text-[30px] sm:text-[45px] md:text-[50px] leading-tight font-bold font-sans text-center text-white mb-3'>Let’s Read What Our Clients Have to Say</h2>
                            <p className='text-[13px] lg:text-[16px] leading-[21px] font-sans text-center text-white mx-auto mb-10'>If you can’t trust us, try trusting them.</p>
                        </div>
                        <div className="col-span-4 lg:col-span-8">
                            <Image src={ClientImage} alt='Clients' className='mt-[-57px] lg:mt-0 lg:mb-[-70px] lg:block hidden' />
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <Slider {...ClientSlider} className='clientSlider ourClients lg:w-[52%] xl:w-[40%] bottom-[7%] md:bottom-[33%] lg:bottom-[19%] right-0 mt-[25px] lg:mt-0'>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Vanessa Carpenter</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Animating Studio turned our ideas into pure magic! Their creativity knows no bounds, and the results totally blew us away!</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client2} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Bradley Lynch</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Working with Animating Studio was a pleasure. Their team is not only professional but also incredibly talented. The animations they created for our brand added that extra spark we were looking for.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Sophia Zimmerman</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>I can't express how impressed we were with Animating Studio. They took our complex data and turned it into beautiful, engaging infographics. Their attention to detail and commitment to our project were truly outstanding.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Tara Figueroa</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Animating Studio made our logo come alive in a way we couldn't have imagined. It added a dynamic touch to our branding that we love.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Priscilla Pearson</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>The architectural visualizations crafted by Animating Studio are simply breathtaking. They have a unique talent for bringing architectural concepts to life, and we couldn't be happier.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Randolph Simpson</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Animating Studio worked wonders with CGI-VFX for our product. Their work took our marketing efforts to a whole new level and made us stand out in the market.</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurClient
