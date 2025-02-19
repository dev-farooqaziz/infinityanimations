"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Company = ({ content }) => {
    const { title, para: { componyArray }, list: { listArray }, subtitle, checkImg, subPara, flodImg, css, btn, lists } = content;
    // set fold Image
    const router = usePathname();
    let lookinImage;
    let lookingSecCol;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        default:
            break;
    }

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 relative`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-y-7'>
                        <div className={`w-full lg:w-[500px] ${lookinImage}`}>
                            <Image src={flodImg} className={`w-9/12 lg:w-full mx-auto ${css}`} alt="Infinity Animation" quality={85} />
                        </div>
                        <div className={`w-full lg:w-[800px] ${lookingSecCol}`}>
                            <div>
                                <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-bold font-sans leading-[65px] mb-5">
                                    {title}
                                </h1>
                                {componyArray.map((para, index) => (
                                    <p key={index} className="text-[16px] font-normal font-sans leading-[24px] tracking-wider text-justify mb-5">
                                        {para}
                                    </p>
                                ))}
                                {btn ?
                                    <div className="flex gap-6">
                                        <CTA
                                            text="Get Started"
                                            icon="/icons/arrow-red.png"
                                            iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                            bg="bg-prime"
                                            color={`text-white`}
                                            border={`border-2 border-[#f5090b]`}
                                            hover="hover:bg-transparent"
                                            href="tel:012-345-6789"
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            {lists ?
                                <div className="mt-4">
                                    <h2 className="text-[50px] font-bold font-sans">
                                        {subtitle}
                                    </h2>
                                    <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-7">{subPara}</p>
                                    <ul>
                                        {listArray.map((list, index) => (
                                            <li key={index} className="flex items-start space-x-2 mb-1">
                                                <Image src={checkImg} alt="check-image" />
                                                <span className="text-[16px] font-light font-sans leading-normal tracking-wider text-justify lg:w-11/12">
                                                    {list}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company
