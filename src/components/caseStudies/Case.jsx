"use client"

import React, { useEffect, useRef } from 'react'; 
// Import Slick Slider 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { register } from "swiper/element/bundle";

const Case = ({ content }) => {
    const { title, sliderImages } = content;

    const swiperElRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerView: 9,
            injectStyles: [
                `.swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background: #00C0E4;
          }
        `,
            ],
        };

        Object.assign(swiperElRef.current, params);
        swiperElRef.current.initialize();
    }, []);

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 2000,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     centerMode: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     coverflowEffect: {
    //         rotate: 0,
    //         stretch: 200,
    //         depth: 280,
    //         modifier: 1,
    //         slideShadows: 5,
    //     },
    // };
    return (
        <>
            <section className='py-8 lg:py-16'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[50px] font-bold font-sans text-center text-white mb-6'>{title}</h2>

                            {/* <Slider {...settings}>
                                {sliderImages.map((sliderImages, index) => (
                                    <div key={index} >
                                        <Image src={sliderImages.sliderImage} height={505} width={356} alt='slider-Image' className='px-2 w-[550px] h-[470px] mt-[14px]' />
                                    </div>
                                ))}
                            </Slider> */}

                            {/* {sliderImages.map((sliderImages, index) => (
                                <swiper-slide className='newfold' key={index}>
                                    <div>
                                        <div className="w-[90%] m-auto py-10">
                                            <div className="card testimonialscard">
                                                <img quality={95}
                                                    src={sliderImages.sliderImage}
                                                    height={505} width={356} alt='slider-Image' className='px-2 w-[550px] h-[470px] mt-[14px]'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Case
