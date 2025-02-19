"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import CSS
import styles from "./BlogHero.module.css"
// Import Images
import BannerLogo1 from "media/location-page/banner-logo-1.png"
import BannerLogo2 from "media/location-page/banner-logo-2.png"
import BannerLogo3 from "media/location-page/banner-logo-3.png"
import BannerLogo4 from "media/location-page/banner-logo-4.png"
import BannerLogo5 from "media/location-page/banner-logo-5.png"
import Profile from "media/inner-blogs/profile-hero.svg"
import WhiteDot from "media/inner-blogs/white-dot.svg"
import BlueCheck from "media/inner-blogs/blue-check.svg"
import Star from "media/inner-blogs/rating-star.svg"


const tabInfo = [
    { image: BannerLogo1 },
    { image: BannerLogo2 },
    { image: BannerLogo3 },
    { image: BannerLogo4 },
    { image: BannerLogo5 },
    { image: BannerLogo1 },
    { image: BannerLogo2 },
    { image: BannerLogo3 },
    { image: BannerLogo4 },
    { image: BannerLogo5 },
];

const BlogHero = ({ content }) => {
    const { subTitle, title, para, subPara } = content;
    // Set Bg-Image
    const router = usePathname();
    let backgroundImage;
    let margin;

    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    // ======== Video
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <>
        <section className={`w-full lg:h-[100vh] flex items-center justify-start sm:pb-5 bg-none bg-no-repeat relative overflow-hidden z-1 top-[97px] lg:top-auto pt-[35px] lg:pt-[85px]`}>
                <div className="container">
                    <div className='grid grid-cols-12 content-center lg:gap-16'>
                        <div className='col-span-12 lg:col-span-6 flex flex-col items-start py-[35px]'>
                            <h3 className='text-[#FF2D4A] text-[16px] md:text-[20px] w-full font-light font-sans leading-[30px] tracking-wider text-start my-3 '>
                                {subTitle}
                            </h3>
                            <h1 className={`text-white text-[28px] lg:text-[35px] xl:text-[50px] font-[600] poppins font-sans md:leading-[60px] text-start  ${margin}`}>
                                {title}
                            </h1>
                            <p className="text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify pt-3 pb-1 text-white text-opacity-90 text-[15px] sm:text-[17px] border-b-2 border-gray-500">
                                {para}
                            </p>

                            <div className="grid grid-cols-12 py-[15px] md:pb-[5px] md:pt-[30px]  ">
                                <div className=' py-[15px] col-span-12 md:col-span-5 text-center flex items-start  '>
                                    <div className="grid grid-cols-12  ">
                                        <div className="col-span-3 ">
                                            <Image src={Profile} />
                                        </div>
                                        <div className="col-span-9 flex flex-col  text-start ps-3 pe-[35px]">
                                            <span className='text-white text-opacity-90 text-[16px] font-normal poppins '>James D. Surratt</span>
                                            <span className='text-white text-opacity-90 text-[13px] font-normal poppins '>Animation Manager</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='pb-[15px] md:py-[15px] col-span-12 md:col-span-4 text-center  flex items-start '>
                                    <div className="flex items-center justify-between">
                                        <Image src={WhiteDot} width={10} className="hidden md:block"/>
                                        <span className='text-white text-opacity-90 text-[16px] font-normal poppins md:ps-[35px] pe-1'>Verified In Animation</span>
                                        <Image src={BlueCheck} />
                                    </div>

                                </div>
                                <div className=' md:py-[15px] col-span-12 md:col-span-3 text-center '>
                                    <div className="flex items-center justify-start md:justify-between md:ps-[25px]">
                                        <Image src={Star} width={20} className="" />
                                        <span className='text-white text-opacity-90 text-[16px] font-normal poppins ps-[10px]'>3 Yrs Exp</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify  lg:mb-5 text-white text-opacity-90">
                                {subPara}
                            </p>
                        </div>
                    <div className={`col-span-12 lg:col-span-6 flex flex-col items-center mb-[100px] lg:mb-0`}>
                        <div className="w-full  220px h-full " onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                            <figure className="relative h-full flex lg:justify-end">
                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-[25px] lg:w-[95%]" >
                                    <source src="https://player.vimeo.com/progressive_redirect/playback/950010334/rendition/720p/file.mp4?loc=external&log_user=0&signature=a761e4cb6edbbad24b418c5e42ebcc25598aa36503bb5e3f218b69efbb9a666b" type="video/mp4" />
                                </video>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        </>
    )
}

export default BlogHero
