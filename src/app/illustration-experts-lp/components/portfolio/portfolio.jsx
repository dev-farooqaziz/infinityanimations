import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Component
import usePopup from '@/app/configs/store/Popup';
// Import Css
import styles from "./portfolio.module.css"
// Import Images
import Thumbnail1 from "media/illustration-experts/profolio-img-1.webp"
import Thumbnail2 from "media/illustration-experts/profolio-img-2.png"
import Thumbnail3 from "media/illustration-experts/profolio-img-3.webp"
import Thumbnail4 from "media/illustration-experts/profolio-img-4.png"
import Thumbnail5 from "media/illustration-experts/profolio-img-5.png"
import Thumbnail6 from "media/illustration-experts/profolio-img-6.png"
import Thumbnail7 from "media/illustration-experts/profolio-img-7.png"
import Thumbnail8 from "media/illustration-experts/profolio-img-8.png"
import Thumbnail9 from "media/illustration-experts/profolio-img-9.png"
import { FaEye } from "react-icons/fa";
import CTA from '@/components/cta/CTA';


const tabContents = [
    [
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/1.webp",
            thumbnail: Thumbnail1
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/2.png",
            thumbnail: Thumbnail2
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/3.webp",
            thumbnail: Thumbnail3
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/4.png",
            thumbnail: Thumbnail4
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/5.png",
            thumbnail: Thumbnail5
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/6.png",
            thumbnail: Thumbnail6
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/7.png",
            thumbnail: Thumbnail7
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/8.png",
            thumbnail: Thumbnail8
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/9.png",
            thumbnail: Thumbnail9
        },
    ],

];
const Portfolio = () => {
    // Popup
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    // Fancy box
    function Fancybox(props) {
        const containerRef = useRef(null);
        useEffect(() => {
            const container = containerRef.current;
            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};
            NativeFancybox.bind(container, delegate, options);
            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });
        return <div ref={containerRef}>{props.children}</div>;
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
            <section className={` ${styles.portfolioSec} py-[50px] lg:pb-[60px] lg:pt-[100px] bg-[#000]`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 justify-content-center ">
                            <h2 className='text-[#fff] text-center font-[700] montserrat text-[30px] lg:text-[35px] pb-3'>Our Portfolio</h2>
                            <p className='text-[#f2f2f2] text-center text-[16px] lg:text-[15px] montserrat leading-[1.5]'>Whether you're preparing for new advertising materials or looking to upgrade your book covers, we’ve got you covered! Check out our exciting illustration portfolio for book covers, cartoons, children books, mascots, storyboards, and more.</p>
                            <div className={styles.folioBox}>
                                <div className="tabs-content pt-7 md:pt-12 ">
                                    <Fancybox options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                            {tabContents[activeTab].map((item, index) => (
                                                <Link key={index} href={item.image} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                    <div className={` ${styles.box18}`}>
                                                        <Image src={item.thumbnail} alt="Infinity Animations" width={468} height={263} className='min-h-[263px]' />
                                                        <div className={styles.boxContent}> <FaEye size={34} /> </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </Fancybox>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 md:gap-8 justify-center py-0 lg:py-[35px]">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio 
