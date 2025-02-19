"use client"
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import icon1 from "media/icons/concept-icon1.png"
import icon2 from "media/icons/concept-icon2.png"
import icon3 from "media/icons/concept-icon3.png"
import icon4 from "media/icons/concept-icon4.png"


const Concept = ({ content }) => {
    const { title, para, text1, text2, text3, text4 } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className="pt-6 md:pt-20 mb-[40px] lg:mb-[-40px]">
                <div className='flex items-center justify-around'>
                    <div className='w-full text-center px-3 md:px-0'>
                        <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5 capitalize`}>
                            {title}
                        </h2>
                        <p className="w-full md:w-[70%] lg:w-[60%] mx-auto text-[15px] lg:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                            {para}
                        </p>
                    </div>
                </div>
            </section>
            <section className={`w-full h-full pb-0 lg:pb-16 flex items-center justify-star bg-none lg:bg-[url("../../public/home/concept-bg.gif")] bg-no-repeat bg-center bg-[length:100%_90%]`}>
                <div className="container">
                    <div className='lg:w-[550px] xl:w-[650px] ml-auto mt-0 lg:mt-48 pb-8 lg:pb-20'>
                        <div className="grid grid-cols-2 gap-12 relative">
                            <div className="absolute left-[50%] w-[1px] h-full bg-white text-white"></div>
                            <div className="absolute top-[50%] w-full h-[1px] bg-white text-white"></div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon1} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">01</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Concept</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">{text1}</p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon2} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">02</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Storyboarding</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">{text2}</p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon3} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">03</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Creation</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">{text3}</p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon4} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">04</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Delivery</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">{text4}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-7 sm:mt-4 sm:p-4">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Concept
