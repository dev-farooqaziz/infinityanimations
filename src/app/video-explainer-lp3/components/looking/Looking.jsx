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
            <section className={`w-full flex items-center justify-start py-6 md:pt-20 md:pb-12 lg:py-16 bg-black relative `}>
                <div className="px-[35px] sm:px-8 lg:px-16 mx-auto">
                    <div className="mb-14">
                        <h2 className={`text-[35px] md:text-[50px] font-semibold font-sans leading-tight mb-5 capitalize text-center`}>
                            {main}
                        </h2>
                    </div>
                    <div className='grid grid-cols-12 '>
                        <div className="col-span-12 lg:col-span-5 flex flex-col items-start ">
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
                            <div className="btns flex-wrap flex items-center justify-center md:justify-start gap-5 mt-4">
                                <div className="btn">
                                    <a href="tel:012-345-6789" className='flex items-center text-[16px] text-white font-[600] montserrat bg-[#A70A0E] hover:bg-white hover:text-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Toll Free: 012-345-6789
                                    </a>
                                </div>
                                <div className="btn">
                                    <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-[#1c2a49] hover:text-white bg-white hover:bg-[#A70A0E] font-bold montserrat py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Live Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Looking
