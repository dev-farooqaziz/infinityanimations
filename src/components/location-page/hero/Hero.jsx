"use client"
import Image from "next/image";
// Import CSS
import styles from "./hero.module.css"
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import icon1 from "media/icons/banner-logo-1.png";
import icon2 from "media/icons/banner-logo-2.png";
import icon3 from "media/icons/banner-logo-3.png";
import icon4 from "media/icons/banner-logo-4.png";
import icon5 from "media/icons/banner-logo-5.png";
import icon6 from "media/icons/banner-logo-6.png";
import icon7 from "media/icons/banner-logo-7.png";
// Import Slider
import { AutoScroll } from '@/components/sliders';

const Hero = ({ content }) => {
    const { title, para, banImg, BannerImg, topLeft, topRight, bottomRight } = content;

    return (
        <>
            <section className={`w-full h-[100vh] flex items-center justify-start mt-0 md:mt-10 lg:mt-0 mb-0 md:mb-16 lg:mb-5 bg-none bg-no-repeat relative overflow-hidden z-1 top-[97px] lg:top-auto`}>
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-5'>
                            <h1 className={`text-[40px] md:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-5 mt-4 lg:mt-32`}>
                                {title}
                            </h1>
                            <p className="text-[15px] lg:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5">
                                {para}
                            </p>
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
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
                            <AutoScroll wrapperClass="mt-[40px] border-t-2 border-gray-500 pt-4" options={{ loop: true, align: "start" }}>
                                {
                                    [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7].map((e, i) => (
                                        <div key={i} className="shrink-0 grow-0 basis-1/4 mr-5">
                                            <Image src={e} alt="logo" className='w-[70%]' />
                                        </div>
                                    ))
                                }
                            </AutoScroll>
                        </div>
                        {banImg ? (
                            <div className={`${styles.bannerImg} relative col-span-12 lg:col-span-7`}>
                                <div className="flex justify-between relative">
                                    <div>
                                        <Image src={topLeft} alt='Infinity Animation' className={`${styles.topLeft}`} />
                                    </div>
                                    <div>
                                        <Image src={topRight} alt='Infinity Animation' className={`${styles.topRight}`} />
                                    </div>
                                </div>
                                <div className={styles.mainImg}>
                                    <Image src={BannerImg} alt="Infinity Animations" />
                                </div>
                                <div>
                                    <Image src={bottomRight} alt='Infinity Animation' className={`${styles.bottomRight}`} />
                                </div>
                            </div>
                        ) : (
                            <div className={`${styles.bannerImg2} col-span-12 lg:col-span-7`}>
                                <div className="w-full h-full flex items-end justify-end">
                                    <Image src={BannerImg} alt="Infinity Animations" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
