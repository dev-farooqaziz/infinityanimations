import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Css
import styles from "./Streamed.module.css"
// Import Images
import Thumbnail1 from "media/logo-animation/2d/1.jpg"
import Thumbnail2 from "media/logo-animation/2d/2.jpg"
import Thumbnail3 from "media/logo-animation/2d/3.jpg"
import Thumbnail4 from "media/logo-animation/2d/4.jpg"
import Thumbnail5 from "media/logo-animation/2d/5.jpg"
import Thumbnail6 from "media/logo-animation/2d/6.jpg"
import Thumbnail7 from "media/logo-animation/2d/7.jpg"
import Thumbnail8 from "media/logo-animation/2d/8.jpg"
import Thumbnail9 from "media/logo-animation/2d/9.jpg"
import Thumbnail10 from "media/logo-animation/2d/10.jpg"
import Thumbnail11 from "media/logo-animation/3d/1.jpg"
import Thumbnail12 from "media/logo-animation/3d/2.jpg"
import Thumbnail13 from "media/logo-animation/3d/3.jpg"
import Thumbnail14 from "media/logo-animation/3d/4.jpg"
import Thumbnail15 from "media/logo-animation/3d/5.jpg"
import Thumbnail16 from "media/logo-animation/3d/6.jpg"
import Thumbnail17 from "media/logo-animation/3d/7.jpg"
import Thumbnail18 from "media/logo-animation/3d/8.jpg"
import Thumbnail19 from "media/logo-animation/3d/9.jpg"
import Thumbnail20 from "media/logo-animation/3d/10.jpg"
import Thumbnail21 from "media/logo-animation/intro/1.jpg"
import Thumbnail22 from "media/logo-animation/intro/2.jpg"
import Thumbnail23 from "media/logo-animation/intro/3.jpg"
import Thumbnail24 from "media/logo-animation/intro/4.jpg"
import Thumbnail25 from "media/logo-animation/intro/5.jpg"
import Thumbnail26 from "media/logo-animation/intro/6.jpg"
import Thumbnail27 from "media/logo-animation/mascot/1.jpg"
import Thumbnail28 from "media/logo-animation/mascot/2.jpg"
import Thumbnail29 from "media/logo-animation/mascot/3.jpg"
import Thumbnail30 from "media/logo-animation/mascot/4.jpg"
import Thumbnail31 from "media/logo-animation/mascot/5.jpg"
import Thumbnail32 from "media/logo-animation/mascot/6.jpg"
import Thumbnail33 from "media/logo-animation/mascot/7.jpg"
import Thumbnail34 from "media/logo-animation/mascot/8.jpg"
import Thumbnail35 from "media/logo-animation/mascot/9.jpg"
import Thumbnail36 from "media/logo-animation/mascot/10.jpg"
import PlayIcon from "media/icons/play.png"

const tabInfo = [
    { label: "2D LOGO", index: 0 },
    { label: "3D LOGO", index: 1 },
    { label: "INTRO", index: 2 },
    { label: "MASCOT", index: 3 },
];

const tabContents = [
    [
        {
            video: "https://www.youtube.com/watch?v=jLXXdB3Vpy8&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=1&pp=iAQB",
            thumbnail: Thumbnail1
        },
        {
            video: "https://www.youtube.com/watch?v=3hrAgESl8-E&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=2&pp=iAQB",
            thumbnail: Thumbnail2
        },
        {
            video: "https://www.youtube.com/watch?v=laQb6bIYOI8&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=3&pp=iAQB",
            thumbnail: Thumbnail3
        },
        {
            video: "https://www.youtube.com/watch?v=sNdZTYvp5pI&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=4&pp=iAQB",
            thumbnail: Thumbnail4
        },
        {
            video: "https://www.youtube.com/watch?v=nVdXNxyxSBQ&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=5&pp=iAQB",
            thumbnail: Thumbnail5
        },
        {
            video: "https://www.youtube.com/watch?v=JNypHbVmNpQ&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=6&pp=iAQB",
            thumbnail: Thumbnail6
        },
        {
            video: "https://www.youtube.com/watch?v=J-PWjI_XtL8&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=7&pp=iAQB",
            thumbnail: Thumbnail7
        },
        {
            video: "https://www.youtube.com/watch?v=ROSN5ddQAyE&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=8&pp=iAQB",
            thumbnail: Thumbnail8
        },
        {
            video: "https://www.youtube.com/watch?v=ja_YuqOmL48&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=9&pp=iAQB",
            thumbnail: Thumbnail9
        },
        {
            video: "https://www.youtube.com/watch?v=C6Yhp-LsDBM&list=PL9O32s63QtcDYOq7SUIaK6flv_-aytf5j&index=10&pp=iAQB",
            thumbnail: Thumbnail10
        },
    ],
    [
        {
            video: "https://www.youtube.com/watch?v=LibV8fENKco&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=1&pp=iAQB",
            thumbnail: Thumbnail11
        },
        {
            video: "https://www.youtube.com/watch?v=UGxx7DyYmdc&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=2&pp=iAQB",
            thumbnail: Thumbnail12
        },
        {
            video: "https://www.youtube.com/watch?v=6X-byyeqI08&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=3&pp=iAQB",
            thumbnail: Thumbnail13
        },
        {
            video: "https://www.youtube.com/watch?v=yvYDzAiDPFc&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=4&pp=iAQB",
            thumbnail: Thumbnail14
        },
        {
            video: "https://www.youtube.com/watch?v=7lAJMEwj3nA&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=5&pp=iAQB",
            thumbnail: Thumbnail15
        },
        {
            video: "https://www.youtube.com/watch?v=ka8cXNuqTRg&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=6&pp=iAQB",
            thumbnail: Thumbnail16
        },
        {
            video: "https://www.youtube.com/watch?v=Cg0qQ-xgZtA&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=7&pp=iAQB",
            thumbnail: Thumbnail17
        },
        {
            video: "https://www.youtube.com/watch?v=VFkzkfVOdj8&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=8&pp=iAQB",
            thumbnail: Thumbnail18
        },
        {
            video: "https://www.youtube.com/watch?v=d3FImJPWX90&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=9&pp=iAQB",
            thumbnail: Thumbnail19
        },
        {
            video: "https://www.youtube.com/watch?v=BvGm4RYoWJw&list=PL9O32s63QtcCyZ_UUdWUVjq8U8SaEv1Yo&index=10&pp=iAQB",
            thumbnail: Thumbnail20
        },
    ],
    [
        {
            video: "https://www.youtube.com/watch?v=Ues26tKLIrI&list=PL9O32s63QtcCpB18qewzg0vDdVRYuBymL&index=1&pp=iAQB",
            thumbnail: Thumbnail21
        },
        {
            video: "https://www.youtube.com/watch?v=EetPY-NojyQ&list=PL9O32s63QtcCpB18qewzg0vDdVRYuBymL&index=2&pp=iAQB",
            thumbnail: Thumbnail22
        },
        {
            video: "https://www.youtube.com/watch?v=nfO8gn54VTA&list=PL9O32s63QtcCpB18qewzg0vDdVRYuBymL&index=3&pp=iAQB",
            thumbnail: Thumbnail23
        },
        {
            video: "https://www.youtube.com/watch?v=VKUaMmKX3yY&list=PL9O32s63QtcCpB18qewzg0vDdVRYuBymL&index=4&pp=iAQB",
            thumbnail: Thumbnail24
        },
        {
            video: "https://www.youtube.com/watch?v=g1qTG-raIX4&list=PL9O32s63QtcCpB18qewzg0vDdVRYuBymL&index=5&pp=iAQB",
            thumbnail: Thumbnail25
        },
        {
            video: "https://www.youtube.com/watch?v=F_ozZD0ADgc&list=PL9O32s63QtcCpB18qewzg0vDdVRYuBymL&index=6&pp=iAQB",
            thumbnail: Thumbnail26
        },
    ],
    [
        {
            video: "https://www.youtube.com/watch?v=86C5ehjaGBw&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=1&pp=iAQB",
            thumbnail: Thumbnail27
        },
        {
            video: "https://www.youtube.com/watch?v=S20v_s1p2A0&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=2&pp=iAQB",
            thumbnail: Thumbnail28
        },
        {
            video: "https://www.youtube.com/watch?v=52HUxKleOfI&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=3&pp=iAQB",
            thumbnail: Thumbnail29
        },
        {
            video: "https://www.youtube.com/watch?v=_LD192iZqEE&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=4&pp=iAQB",
            thumbnail: Thumbnail30
        },
        {
            video: "https://www.youtube.com/watch?v=nrnee7beHBI&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=5&pp=iAQB",
            thumbnail: Thumbnail31
        },
        {
            video: "https://www.youtube.com/watch?v=VZs9oGWjtUc&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=6&pp=iAQB",
            thumbnail: Thumbnail32
        },
        {
            video: "https://www.youtube.com/watch?v=Xfzo227sm20&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=7&pp=iAQB",
            thumbnail: Thumbnail33
        },
        {
            video: "https://www.youtube.com/watch?v=pf9ziyE-TJU&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=8&pp=iAQB",
            thumbnail: Thumbnail34
        },
        {
            video: "https://www.youtube.com/watch?v=pA2pip3t3mY&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=9&pp=iAQB",
            thumbnail: Thumbnail35
        },
        {
            video: "https://www.youtube.com/watch?v=J9ER7_IeB28&list=PL9O32s63QtcCxm2y2Thp1O3y_ZNEwSFJV&index=10&pp=iAQB",
            thumbnail: Thumbnail36
        },
    ]
];
const Streamed = () => {
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
    // ====== Responsive Slider 
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <>
            <section className="py-[50px] lg:py-[100px] bg-[url('../../public/logo-animation-lp/portfolio-bg.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className="text-[#f5090b] text-[25px] md:text-[40px] font-[700] mb-0 text-center leading-[30px] font-sans relative before:absolute before:content-[''] before:top-[-20px] before:left-0 before:right-[35px] before:mx-auto before:h-[8px] before:w-[70px] before:bg-[#f5090b]">
                                OUR AWESOME WORKS
                            </h2>
                            <div className={`mt-8 md:mt-12`}>
                                <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                                    {tabInfo.map((tab, index) => (
                                        <li key={index}
                                            className={`inline-block px-5 md:px-6 py-2 text-[13px] font-[600] montserrat cursor-pointer border-2 border-[#f5090b] rounded-[50px] text-white ${activeTab === index ? "bg-[#f5090b]" : "bg-transparent"}`}
                                            onClick={() => handleTabClick(index)}>
                                            {tab.label}
                                        </li>
                                    ))}
                                </ul>
                                <div className="tabs-content pt-7 md:pt-12 hidden md:block">
                                    {tabContents[activeTab] && (
                                        <Fancybox options={{
                                            Carousel: {
                                                infinite: false,
                                            },
                                        }}>
                                            <div className='flex items-center flex-wrap gap-3 lg:gap-6 justify-center'>
                                                {tabContents[activeTab].map((item, index) => (
                                                    <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-[31%] rounded-none`}>
                                                        <div className="">
                                                            <Image src={item.thumbnail} alt="Infinity Animations" className='h-auto' />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </Fancybox>
                                    )}
                                </div>
                                <div className="block md:hidden mt-4">
                                    {tabContents[activeTab] && (
                                        <Fancybox options={{
                                            Carousel: {
                                                infinite: false,
                                            },
                                        }}>
                                            <Slider {...testiSlider} className="streamedSlider">
                                                {tabContents[activeTab].map((item, index) => (
                                                    <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-[31%] rounded-none`}>
                                                        <div className="">
                                                            <Image src={item.thumbnail} alt="Infinity Animations" className='h-auto' />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </Slider>
                                        </Fancybox>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Streamed
