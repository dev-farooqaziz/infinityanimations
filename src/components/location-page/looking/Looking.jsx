"use client"
import Image from "next/image";
import flodImg from "media/home/looking-img.gif"

// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { main, title, para: { paraArray }, isCTA, isBtns } = content;

    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:pt-20 md:pb-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
                <div className="px-[35px] sm:px-8 lg:px-16 mx-auto">
                    <div className='grid grid-cols-12 '>
                        <div className="col-span-12 lg:col-span-5 flex flex-col items-start ">
                            <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5 capitalize`}>
                                {main}
                            </h2>
                            <div className={`w-full`}>
                                <Image src={flodImg} className={`mx-auto`} alt="Infinity Animation" />
                            </div>
                        </div>
                        <div className={`col-span-12 lg:col-span-7 flex flex-col justify-end lg:ms-[15%] xl:ms-[12%] lg:pe-[35px] mt-[35px] md:mt-0`}>
                            <h3 className="text-[22px] lg:text-[28px] font-bold font-sans leading-tight mb-5">
                                {title}
                            </h3>
                            {paraArray.map((para, index) => (
                                <p key={index} className="text-[15px] lg:text-[16px] font-[300] font-sans leading-snug tracking-wider text-start mb-5">
                                    {para}
                                </p>
                            ))}

                            {isBtns ?
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
                                    {isCTA ?
                                        <CTA
                                            text="Live Chat"
                                            icon="/icons/chat.png"
                                            iconCss="w-[40px]"
                                            bg="bg-[#000]"
                                            color={`text-white`}
                                            border={`border-2 border-[#fff]`}
                                           hover="hover:bg-prime"
                                            href="javascript:$zopim.livechat.window.show();"
                                        /> : null}
                                </div> :
                                null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Looking
