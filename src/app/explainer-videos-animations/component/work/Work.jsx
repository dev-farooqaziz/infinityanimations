"use client"
import Image from "next/image";
// Import Components
import styles from '@/app/explainer-videos-animations/component/work/work.module.css';
import log1 from "media/banner/log1.png"
import log2 from "media/banner/log2.png"
import log3 from "media/banner/log3.png"
import log4 from "media/banner/log4.png"
import log5 from "media/banner/log5.png"
import log6 from "media/banner/log6.png"
import log7 from "media/banner/log7.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Video = () => {


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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [


            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    return (
        <>
            <section className={`newcon ${styles.display}`}>
                <div className={`container mx-auto ${styles.pointer} `}>
                    <div className={`md:grid md:grid-cols-1`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>How  <span className="colorred2">We  </span>
                                Work</h3>
                            <p className={styles.words}>
                                There is an immense amount of product animation & graphic content out there but here at Video Explain Art , we make sure our animation service & work stands out.
                            </p>
                        </div>
                        {isSliderActive ?
                            <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`} >
                                <div className="typr1" id="ty121">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Concept & Scripts</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="typr1" id="ty122">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Discussions</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="typr1" id="ty123">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Voiceover</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="typr1" id="ty124">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Illustration</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="typr1" id="ty125">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Animation</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="typr1" id="ty126">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Music</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="typr1" id="ty127">
                                    <a href="#">
                                        <div className={styles.rect1}>
                                            <p className="fontmontserratsemibold colorwhite mt-3">Video Publish</p>
                                        </div>
                                    </a>
                                </div>
                            </Slider>
                            :
                            <div className={styles.mot}>
                                <div className={styles.typr} id="ty1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="260" viewBox="0 0 301 260">
                                        <path id="Polygon_15" data-name="Polygon 15" d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z" fill="#4a4a4a" />
                                    </svg>
                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log2} alt="Logo" />
                                            <p>Concept & Scripts</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.typr} id="ty2">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="255" height="260" viewBox="0 0 301 260">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ff070d" />
                                                <stop offset="1" stopColor="#9c1418" />
                                            </linearGradient>
                                        </defs>
                                        <path id="Polygon_11" dataName="Polygon 11" d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z" fill="url(#linear-gradient)" />
                                    </svg>
                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log1} alt="Logo" />
                                            <p>Discussions</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.typr} id="ty3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="260" viewBox="0 0 301 260">
                                        <path id="Polygon_15" data-name="Polygon 15"
                                            d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z"
                                            fill="#4a4a4a" />
                                    </svg>
                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log3} alt="Logo" />
                                            <p>Voiceover</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.typr} id="ty4">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="255" height="260" viewBox="0 0 301 260">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ff070d" />
                                                <stop offset="1" stopColor="#9c1418" />
                                            </linearGradient>
                                        </defs>
                                        <path id="Polygon_16" dataName="Polygon 16"
                                            d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z"
                                            fill="url(#linear-gradient)" />
                                    </svg>
                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log4} alt="Logo" />
                                            <p>Illustration</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.typr} id="ty5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="260" viewBox="0 0 301 260">
                                        <path id="Polygon_17" data-name="Polygon 17"
                                            d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z"
                                            fill="#4a4a4a" />
                                    </svg>
                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log5} alt="Logo" />
                                            <p>Animation</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.typr} id="ty6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="260" viewBox="0 0 301 260">
                                        <path id="Polygon_18" data-name="Polygon 18"
                                            d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z"
                                            fill="#4a4a4a" />
                                    </svg>
                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log6} alt="Logo" />
                                            <p>Music</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.typr} id="ty7">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="255" height="260" viewBox="0 0 301 260">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ff070d" />
                                                <stop offset="1" stopColor="#9c1418" />
                                            </linearGradient>
                                        </defs>
                                        <path id="Polygon_19" dataName="Polygon 19"
                                            d="M208.452,0a30,30,0,0,1,25.964,14.971l57.885,100a30,30,0,0,1,0,30.058l-57.885,100A30,30,0,0,1,208.452,260H92.548a30,30,0,0,1-25.964-14.971L8.7,145.029a30,30,0,0,1,0-30.058l57.885-100A30,30,0,0,1,92.548,0Z"
                                            fill="url(#linear-gradient)" />
                                    </svg>

                                    <a href="#">
                                        <div className={styles.rect}>
                                            <Image src={log7} alt="Logo" />
                                            <p>Video Publish</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
