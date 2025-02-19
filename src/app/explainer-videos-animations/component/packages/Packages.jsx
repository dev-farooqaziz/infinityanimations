"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/packages/packages.module.css';
import livechat from "media/banner/livechat.png"
import check from "media/banner/check.png"
import checkw from "media/banner/checkw.png"
import star from "media/banner/star.png"
import livechat2 from "media/banner/livechat2.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import usePopup from "@/app/configs/store/Popup";


const Video = () => {

    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }

    // ===================================
    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1201) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // slider 
    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className={`newcon ${styles.display}`}>
                <div class={`container mx-auto`}>
                    <div class={`md:grid md:grid-cols-1`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Our  <span className="colorred2">Packages </span>
                            </h3>
                            <p className={styles.words}>
                                Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
                            </p>
                        </div>
                    </div>
                </div>
                <div class={`container mx-auto ${styles.pointer} `}>

                    {isSliderActive ?
                        <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`} >
                            <div className={styles.pkgcard}>
                                <div className={styles.cardbef}>
                                    <Image src={star} className=" " alt="Star" />
                                </div>
                                <h3 className={styles.startup}>Startup Package</h3>
                                <h4 className={styles.price}>$499</h4>
                                <ul className={styles.priceList}>
                                    <li> <Image src={check} alt="Infinity" /> 30 Seconds Duration</li>
                                    <li> <Image src={check} alt="Infinity" /> Script Writing</li>
                                    <li> <Image src={check} alt="Infinity" /> Custom Artwork</li>
                                    <li> <Image src={check} alt="Infinity" /> Background Music</li>
                                    <li> <Image src={check} alt="Infinity" /> HD Format Video</li>
                                    <li> <Image src={check} alt="Infinity" /> Dedicated Support</li>
                                    <li> <Image src={check} alt="Infinity" /> Professional Voice-over SFX</li>
                                </ul>
                                <div className={styles.pkgcta}>
                                    <div className={styles.speak}>
                                        <p className="">Speak With Us</p>
                                        <a className="" href="tel:012-345-6789">012-345-6789</a>
                                    </div>
                                    <div className={styles.speak}>
                                        <p className="">Want To Discuss</p>
                                        <a className="" href="javascript:$zopim.livechat.window.show();">Live Chat Now</a>
                                    </div>
                                </div>
                                <div className={styles.pkgcta}>
                                    <button onClick={popupHandle} href="tel:012-345-6789" className={styles.popup}>Get Started</button>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.chat} >
                                        Live Chat
                                        <Image src={livechat} alt="Live_Chat" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.pkgcard2}>
                                <div className={styles.cardbef}>
                                    <Image src={star} className=" " alt="Star" />
                                    <Image src={star} className=" " alt="Star" />
                                </div>
                                <h3 className={styles.startup}>Classic Package</h3>
                                <h4 className={styles.price}>$799</h4>
                                <ul className={styles.priceList}>
                                    <li> <Image src={checkw} alt="Infinity" /> 30 Seconds Duration</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Script Writing</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Professional Voice-over & SFX</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Hand-drawn Illustrations</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Unlimited Revisions</li>
                                    <li> <Image src={checkw} alt="Infinity" /> HD Format Video</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Dedicated Support</li>
                                </ul>
                                <div className={styles.pkgcta}>
                                    <div className={styles.speak}>
                                        <p className="">Speak With Us</p>
                                        <a className="" href="tel:012-345-6789">012-345-6789</a>
                                    </div>
                                    <div className={styles.speak}>
                                        <p className="">Want To Discuss</p>
                                        <a className="" href="javascript:$zopim.livechat.window.show();">Live Chat Now</a>
                                    </div>
                                </div>
                                <div className={styles.pkgcta}>
                                    <button onClick={popupHandle} href="tel:012-345-6789" className={styles.popup}>Get Started</button>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.chat} >
                                        Live Chat
                                        <Image src={livechat2} alt="Live_Chat" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.pkgcard}>
                                <div className={styles.cardbef}>
                                    <Image src={star} className=" " alt="Star" />
                                    <Image src={star} className=" " alt="Star" />
                                    <Image src={star} className=" " alt="Star" />
                                </div>
                                <h3 className={styles.startup}>Premium Package</h3>
                                <h4 className={styles.price}>$999</h4>
                                <ul className={styles.priceList}>
                                    <li> <Image src={check} alt="Infinity" /> 30 Seconds Duration</li>
                                    <li> <Image src={check} alt="Infinity" /> Script Writing</li>
                                    <li> <Image src={check} alt="Infinity" /> Professional Voice-over & SFX</li>
                                    <li> <Image src={check} alt="Infinity" /> Custom 2D Character Illustration</li>
                                    <li> <Image src={check} alt="Infinity" /> Unlimited Revisions</li>
                                    <li> <Image src={check} alt="Infinity" /> HD Format Video</li>
                                    <li> <Image src={check} alt="Infinity" /> Dedicated Support</li>
                                </ul>
                                <div className={styles.pkgcta}>
                                    <div className={styles.speak}>
                                        <p className="">Speak With Us</p>
                                        <a className="" href="tel:012-345-6789">012-345-6789</a>
                                    </div>
                                    <div className={styles.speak}>
                                        <p className="">Want To Discuss</p>
                                        <a className="" href="javascript:$zopim.livechat.window.show();">Live Chat Now</a>
                                    </div>
                                </div>
                                <div className={styles.pkgcta}>
                                    <button onClick={popupHandle} href="tel:012-345-6789" className={styles.popup}>Get Started</button>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.chat} >
                                        Live Chat
                                        <Image src={livechat} alt="Live_Chat" />
                                    </a>
                                </div>
                            </div>


                        </Slider>
                        :
                        <div class={`md:grid md:grid-cols-3`}>
                            <div className={styles.pkgcard}>
                                <div className={styles.cardbef}>
                                    <Image src={star} className=" " alt="Star" />
                                </div>
                                <h3 className={styles.startup}>Startup Package</h3>
                                <h4 className={styles.price}>$499</h4>
                                <ul className={styles.priceList}>
                                    <li> <Image src={check} alt="Infinity" /> 30 Seconds Duration</li>
                                    <li> <Image src={check} alt="Infinity" /> Script Writing</li>
                                    <li> <Image src={check} alt="Infinity" /> Custom Artwork</li>
                                    <li> <Image src={check} alt="Infinity" /> Background Music</li>
                                    <li> <Image src={check} alt="Infinity" /> HD Format Video</li>
                                    <li> <Image src={check} alt="Infinity" /> Dedicated Support</li>
                                    <li> <Image src={check} alt="Infinity" /> Professional Voice-over SFX</li>
                                </ul>
                                <div className={styles.pkgcta}>
                                    <div className={styles.speak}>
                                        <p className="">Speak With Us</p>
                                        <a className="" href="tel:012-345-6789">012-345-6789</a>
                                    </div>
                                    <div className={styles.speak}>
                                        <p className="">Want To Discuss</p>
                                        <a className="" href="javascript:$zopim.livechat.window.show();">Live Chat Now</a>
                                    </div>
                                </div>
                                <div className={styles.pkgcta}>
                                    <button onClick={popupHandle} href="tel:012-345-6789" className={styles.popup}>Get Started</button>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.chat} >
                                        Live Chat
                                        <Image src={livechat} alt="Live_Chat" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.pkgcard2}>
                                <div className={styles.cardbef}>
                                    <Image src={star} className=" " alt="Star" />
                                    <Image src={star} className=" " alt="Star" />
                                </div>
                                <h3 className={styles.startup}>Classic Package</h3>
                                <h4 className={styles.price}>$799</h4>
                                <ul className={styles.priceList}>
                                    <li> <Image src={checkw} alt="Infinity" /> 30 Seconds Duration</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Script Writing</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Professional Voice-over & SFX</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Hand-drawn Illustrations</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Unlimited Revisions</li>
                                    <li> <Image src={checkw} alt="Infinity" /> HD Format Video</li>
                                    <li> <Image src={checkw} alt="Infinity" /> Dedicated Support</li>
                                </ul>
                                <div className={styles.pkgcta}>
                                    <div className={styles.speak}>
                                        <p className="">Speak With Us</p>
                                        <a className="" href="tel:012-345-6789">012-345-6789</a>
                                    </div>
                                    <div className={styles.speak}>
                                        <p className="">Want To Discuss</p>
                                        <a className="" href="javascript:$zopim.livechat.window.show();">Live Chat Now</a>
                                    </div>
                                </div>
                                <div className={styles.pkgcta}>
                                    <button onClick={popupHandle} href="tel:012-345-6789" className={styles.popup}>Get Started</button>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.chat} >
                                        Live Chat
                                        <Image src={livechat2} alt="Live_Chat" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.pkgcard}>
                                <div className={styles.cardbef}>
                                    <Image src={star} className=" " alt="Star" />
                                    <Image src={star} className=" " alt="Star" />
                                    <Image src={star} className=" " alt="Star" />
                                </div>
                                <h3 className={styles.startup}>Premium Package</h3>
                                <h4 className={styles.price}>$999</h4>
                                <ul className={styles.priceList}>
                                    <li> <Image src={check} alt="Infinity" /> 30 Seconds Duration</li>
                                    <li> <Image src={check} alt="Infinity" /> Script Writing</li>
                                    <li> <Image src={check} alt="Infinity" /> Professional Voice-over & SFX</li>
                                    <li> <Image src={check} alt="Infinity" /> Custom 2D Character Illustration</li>
                                    <li> <Image src={check} alt="Infinity" /> Unlimited Revisions</li>
                                    <li> <Image src={check} alt="Infinity" /> HD Format Video</li>
                                    <li> <Image src={check} alt="Infinity" /> Dedicated Support</li>
                                </ul>
                                <div className={styles.pkgcta}>
                                    <div className={styles.speak}>
                                        <p className="">Speak With Us</p>
                                        <a className="" href="tel:012-345-6789">012-345-6789</a>
                                    </div>
                                    <div className={styles.speak}>
                                        <p className="">Want To Discuss</p>
                                        <a className="" href="javascript:$zopim.livechat.window.show();">Live Chat Now</a>
                                    </div>
                                </div>
                                <div className={styles.pkgcta}>
                                    <button onClick={popupHandle} href="tel:012-345-6789" className={styles.popup}>Get Started</button>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.chat} >
                                        Live Chat
                                        <Image src={livechat} alt="Live_Chat" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Video
