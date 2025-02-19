"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { title, para: { paraArray }, isCTA, flodImg, css, isBtns } = content;
    // set fold Image
    const router = usePathname();
    let lookinImage;
    let lookingSecCol;
    let bgTransparent;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        case '/2d-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/3d-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/architectural-visualization':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/cgi-and-vfx-services':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/contact-us':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/infographics-design':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/motion-graphics':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case 'video-animation-portfolio':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case 'video-animation-pricing':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/tech-videos':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/video-editing':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/whiteboard-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/why-us':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        default:
            break;
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative ${bgTransparent}`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-y-7'>
                        <div className={`w-full lg:w-[500px] ${lookinImage}`}>
                            <Image src={flodImg} className={`w-full mx-auto ${css}`} alt="Infinity Animation" quality={85} />
                        </div>
                        <div className={`w-full lg:w-[800px] ${lookingSecCol}`}>
                            <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5">
                                {title}
                            </h2>
                            {paraArray.map((para, index) => (
                                <p key={index} className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-5">
                                    {para}
                                </p>
                            ))}

                            {isBtns ?
                                <div className="flex gap-6">
                                    <CTA
                                        text="Get A Free Quote"
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
