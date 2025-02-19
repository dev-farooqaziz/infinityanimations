import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// Import Css
import "./Illustrative.module.css"
// Import Component
import usePopup from '@/app/configs/store/Popup';
// Import Images
import IlluImage1 from "media/illustration-experts/illu-img-li-1.png"
import IlluImage2 from "media/illustration-experts/illu-img-2d-2.png"
import IlluImage3 from "media/illustration-experts/illu-img-3d-3.png"
import IlluImage4 from "media/illustration-experts/illu-img-flat-4.png"
import IlluImage5 from "media/illustration-experts/illu-img-wb-5.png"
import IlluImage6 from "media/illustration-experts/illu-img-mas-6.png"
import TabImage1 from "media/illustration-experts/tab-illus-inner-li-1.png"
import TabImage2 from "media/illustration-experts/tab-illus-inner-1.png"
import TabImage3 from "media/illustration-experts/tab-illus-inner-3d-2.png"
import TabImage4 from "media/illustration-experts/tab-illus-inner-wb-5.png"
import TabImage5 from "media/illustration-experts/tab-illus-inner-mas-3.png"
import TabImage6 from "media/illustration-experts/tab-illus-inner-fl-4.png"
import CheckIcon from "media/illustration-experts/check-icon.png"
import CTA from '@/components/cta/CTA';
// import Slider
import { register } from 'swiper/element/bundle'

register();

const tabInfo = [
    { label: "Logo Illustration", image: IlluImage1, index: 0 },
    { label: "2D Illustration", image: IlluImage2, index: 1 },
    { label: "3D Illustration", image: IlluImage3, index: 2 },
    { label: "Whiteboard Illustration", image: IlluImage4, index: 3 },
    { label: "Mascot Illustration", image: IlluImage5, index: 4 },
    { label: "Flat Illustration", image: IlluImage6, index: 5 },
];

const tabContents = [
    [
        {
            image: TabImage1,
            title: "Logo Illustration",
            desc: `You can’t make your brand standout without an astounding logo that can speak volumes. To make
            sure you are provided with the finest quality of logo illustration service, we follow a
            client-first approach, which helps us understand your specifications and work accordingly to
            meet your expectations.`,
            features: {
                list1: "Industry specific designers",
                list2: "Money back guarantee",
                list3: "100% original designs",
                list4: "24x7 customer support",
            }
        },
    ],
    [
        {
            image: TabImage2,
            title: "2D Illustration",
            desc: `We got highly skilled artists who prefer hand-drawn Illustrators for 2D Illustration. We
            possess the perfect yet unique, creative styles and ideas for visual storytellers. We understand
            your unique and creative needs and requirements and present you with the best of the best 2D
            Illustration.`,
            features: {
                list1: "Fetches Audience",
                list2: "Unique ideas",
                list3: "Communicating Designs",
                list4: "Easy to understand",
            }
        },
    ],
    [
        {
            image: TabImage3,
            title: "3D Illustration",
            desc: `We got the perfect solution for your 3D illustration with our highly skilled and experienced 3D
            designers. We offer various styles and specialties, from constructive visualization to character
            design, through our 3D illustration services. Check out our interesting 3D illustrative designs.`,
            features: {
                list1: "Realistic, easy, quick",
                list2: "Effective Marketing",
                list3: "project execution",
                list4: "Expert designers",
            }
        },
    ],
    [
        {
            image: TabImage4,
            title: "Whiteboard Illustration",
            desc: `Spice up your story with our excellent and unique whiteboard illustrations. Give an astonishing
            twist to your story with the help of our highly experienced and qualified whiteboard designers.
            Learn more about how to enhance your whiteboard story with the help of our illustrations.`,
            features: {
                list1: "Engaging and Interactive",
                list2: "fun, warm, and charming",
                list3: "different and fresh",
                list4: "sky’s NOT the limit.",
            }
        },
    ],
    [
        {
            image: TabImage5,
            title: "Mascot Illustration",
            desc: `A mascot is a brand representative of any firm; that's why it requires much more focus and
            accuracy when designing one. Our Illustrative mascot designers make sure that you get the
            perfect illustration for your mascot, and it presents the whole organization's idea.`,
            features: {
                list1: "Enhanced communication",
                list2: "Flexibility of personification",
                list3: "Memorability & recognizability",
                list4: "Consistent visual marking",
            }
        },
    ],
    [
        {
            image: TabImage6,
            title: "Flat Illustration",
            desc: `Our Illustrative Flat designs are two-dimensional art styles that are perceived to be more
            straightforward and more precise. Any organization needs a logo for its firm. For such
            businesses, we recommend out flat illustrative designs. They are attractive and highly
            affordable.`,
            features: {
                list1: "readability & legibility",
                list2: "clear visual hierarchy",
                list3: "easy adjustability",
                list4: "effective legibility",
            }
        },
    ],

];


const Illustrative = () => {
    const swiperRef = useRef(null);
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

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: {
                nextEl: `.swiper-button-next`,
                prevEl: `.swiper-button-prev`
            },
            loop: 'true',
            speed: 400,
            pagination: "false",
            slidesPerView: 'auto',
            freeMode: true,
            grabCursor: true,
            spaceBetween: "20",
            autoplay: {
                delay: 1500,
                disableOnInteraction: "false",
                stopOnLastSlide: 'false'
            },
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                480: {
                    slidesPerView: "1",
                },
                780: {
                    slidesPerView: "3",
                },

            }

        };
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <div className='bg-[#000000] '>
                <div className='py-[80px] block bg-[url("../../public/illustration-experts/illus-tab-sec-bg.png")] h-[100%] bg-cover bg-center' >
                    <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto ">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                <h2 className='text-[#fff] text-center font-[700] montserrat text-[30px] lg:text-[35px] leading-[40px] pb-3'>Our Best Illustrative Design Types</h2>
                                <p className='text-[#f2f2f2] text-center text-[16px] lg:text-[15px] montserrat leading-[1.5]'>From custom book cover illustrations to mascot logos, we’ve been providing our clients with a range of illustration design services.</p>
                                <div className={`mt-6 lg:mt-0 `}>
                                    <div className="border-b border-gray-200 pb-[10px] relative " >
                                        <div className="swiper-button-prev absolute top-0 left-[-15px] md:left-[-55px]"></div>
                                        <swiper-container ref={swiperRef} init="false" >
                                            {tabInfo && tabInfo.map((item, index) => (
                                                <swiper-slide key={index}>
                                                    <div
                                                        className={` justify-center  px-5 md:px-8 py-3 text-[15px] lg:text-[18px] montserrat cursor-pointer text-center   ${activeTab === index ? "text-primary-100 border-b-2 border-primary-100" : "text-[#898989]"}`}
                                                        onClick={() => handleTabClick(index)}>
                                                        <div className='flex justify-center'>
                                                            <Image src={item.image} alt='Infinity Animation' /></div>
                                                        {item.label}
                                                    </div>
                                                </swiper-slide>
                                            ))
                                            }
                                            <swiper-pagination className="hidden"></swiper-pagination>
                                        </swiper-container>
                                        <div className="swiper-button-next absolute top-0 right-[-15px] md:right-[-55px]"></div>
                                    </div>
                                    {tabContents[activeTab].map((item, index) => (
                                        <div key={index} className="grid grid-cols-12 gap-y-8 justify-content-center py-0 lg:py-[40px]">
                                            <div className={`col-span-12 lg:col-span-6 content-center px-[15px] relative`}>
                                                <div className={`flex justify-center mt-16 lg:mt-0`}>
                                                    <Image
                                                        src={item.image}
                                                        alt="Infinity Animation"
                                                        quality={85}
                                                        className='w-[40%] h-auto'
                                                    />
                                                </div>
                                            </div>
                                            <div className={`col-span-12 lg:col-span-6 `}>
                                                <h2 className=" text-[#ffffff] text-[28px] lg:text-[36px] font-[700] montserrat mb-2 lg:mb-5">
                                                    {item.title}
                                                </h2>
                                                <p className="text-[16px] lg:text-[15px] text-[#f2f2f2] font-[400] montserrat font-sans tracking-wider text-justify mb-2 lg:mb-5">
                                                    {item.desc}
                                                </p>
                                                <div className='grid grid-cols-12 gap-y-4 content-start justify-items-stretch border-t border-gray-200 py-[20px]'>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[16px] lg:text-[15px] text-[#f2f2f2] font-[400] montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} alt='Icon' />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[16px] lg:text-[15px] text-[#f2f2f2] font-[400] montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} alt='Icon' />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[16px] lg:text-[15px] text-[#f2f2f2] font-[400] montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} alt='Icon' />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[16px] lg:text-[15px] text-[#f2f2f2] font-[400] montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} alt='Icon' />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4 md:gap-8 py-[10px]">
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
                                                            bg="bg-transparent"
                                                            color={`text-white`}
                                                            border={`border-2 border-[#fff]`}
                                                            hover="hover:bg-prime"
                                                            href="javascript:$zopim.livechat.window.show();"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Illustrative