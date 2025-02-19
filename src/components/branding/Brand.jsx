"use client"
import Image from "next/image";
// Import Components
import CTA from "../cta/CTA";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = ({ content }) => {
    const branding = content;
    // Slider Setting
    const brandsSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 5,
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
            <section className="w-full flex py-8 md:py-12 lg:py-16">
                <div className="container">
                    <div className="slider">
                        <Slider {...brandsSlider} className="brandsSlider">
                            {branding.map((brands, index) => (
                                <div key={index} className="h-full border-r border-r-white px-5">
                                    <Image src={brands.slide1} width={60} height={60} quality={85} className="w-[50px] h-[50px] object-contain mb-3" alt='Brands Image' />
                                    <h3 className="text-white text-[20px] font-bold leading-[24px] font-sans mb-4 pr-[20px]">{brands.title}</h3>
                                    <p className="text-white text-[16px] leading-[20px] font-sans pr-[20px]">{brands.desc}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="flex gap-6 mt-6 lg:mt-14">
                        <CTA
                            text="Get Started"
                            icon="/icons/arrow-red.png"
                            iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                            bg="bg-prime"
                            color={`text-white`}
                            border={`border-2 border-[#f5090b]`}
                            hover="hover:bg-transparent"
                            href="tel:012-345-6789;"
                        />
                        <CTA
                            text="Live Chat"
                            icon="/icons/chat.png"
                            iconCss="w-[40px]"
                            bg="bg-[#000]"
                            color={`text-white`}
                            border={`border-2 border-[#fff]`}
                            hover="hover:bg-prime"
                            href="javascript:$zopim.livechat.window.show();"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
