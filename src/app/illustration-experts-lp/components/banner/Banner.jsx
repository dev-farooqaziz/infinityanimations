import Image from 'next/image';
import React from 'react';
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css';
// ===== Images
import BannerLogos2 from 'media/illustration-experts/banner-side-img-4.png';
import BannerLogos3 from 'media/illustration-experts/banner-side-img-6.png';
import BannerLogos4 from 'media/illustration-experts/banner-side-img-8.png';
import BannerLogos5 from 'media/illustration-experts/banner-side-img-9.png';
import BannerLogos6 from 'media/illustration-experts/banner-side-img-10.png';
import BannerLogos7 from 'media/illustration-experts/banner-side-img-11.png';
import BannerLogos8 from 'media/illustration-experts/banner-side-img-12.png';
import BannerLogos9 from 'media/illustration-experts/banner-side-img-14.png';
import BannerLogos10 from 'media/illustration-experts/banner-side-img-15.png';
import BannerLogos11 from 'media/illustration-experts/banner-side-img-16.png';

import CTA from '@/components/cta/CTA';
// Import Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    };

    const testiCard = [
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos2,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos3,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos4,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos5,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos6,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos7,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos8,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos9,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos10,
        },
        {
            title: 'TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .',
            desc: 'We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!',
            imageSrc: BannerLogos11,
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
        <section className="bg-fixed bg-cover bg-right-bottom sm:bg-center bg-[#000000] bg-[url('../../public/illustration-experts/main-banner-bg.webp')] h-[100%] pt-[200px] md:pt-[160px] pb-[30px] md:pb-[50px] mt-[-85px]">
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <Swiper
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                >
                    {testiCard.map((e, i) => (
                        <SwiperSlide key={i} className={`${styles.BannerDiv}`}>
                            <div className="grid grid-cols-12 justify-content-center items-center">
                                <div className="col-span-12 lg:col-span-6 content-center px-[15px]">
                                    {e.title && (
                                        <>
                                            <h1 className="text-[#ffffff] text-center sm:text-start text-[30px] lg:text-[50px] font-[700] uppercase montserrat lg:w-11/12 leading-[1.2] md:leading-[60px]">
                                                {e.title}
                                            </h1>
                                            <p className="text-[#f2f2f2] font-normal text-center sm:text-start text-[16px] lg:text-[15px] montserrat lg:w-11/12 leading-[25px] py-[25px]">
                                                {e.desc}
                                            </p>
                                            <div className="flex justify-center sm:justify-start gap-4 md:gap-6">
                                                <div className="flex gap-6">
                                                    <CTA
                                                        text="Get Started"
                                                        icon="/icons/arrow-red.png"
                                                        iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                                        bg="bg-prime"
                                                        color="text-white"
                                                        border="border-2 border-[#f5090b]"
                                                        hover="hover:bg-transparent"
                                                    />
                                                    <CTA
                                                        text="Live Chat"
                                                        icon="/icons/chat.png"
                                                        iconCss="w-[40px]"
                                                        bg="bg-[#000]"
                                                        color="text-white"
                                                        border="border-2 border-[#fff]"
                                                        hover="hover:bg-prime"
                                                        href="javascript:$zopim.livechat.window.show();"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="col-span-12 lg:col-span-6 content-center px-[15px] Banner">
                                    <div className={`${styles.bannerImage}`}>
                                        <Image src={e.imageSrc} alt="banner-logos" className=" " />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;
