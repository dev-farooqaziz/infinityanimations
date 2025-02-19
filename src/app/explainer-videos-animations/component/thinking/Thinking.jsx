"use client"
import Image from "next/image";
// Import Components
import styles from '@/app/explainer-videos-animations/component/thinking/thinking.module.css';
import slider1 from "media/banner/slider1.png"
import slider2 from "media/banner/slider2.png"
import slider3 from "media/banner/slider3.png"
import starp from "media/banner/starp.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "media/banner/prev.png"
import next from "media/banner/next.png"

const Video = () => {
    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 2000,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        nextArrow: <Image src={next} alt='Infinity Animations' />,
        prevArrow: <Image src={prev} alt='Infinity Animations' />,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

        ],

    };

    return (
        <>
            <section className={`newcon newreactslide ${styles.display}`}>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>How <span className="colorred2">Our </span>
                                Clients Are <span className="colorred2">Thanking Us </span> </h3>
                            <p className={styles.words}>
                                Our experts leave no stone unturned in providing the desired outcome of our clients
                            </p>
                        </div>
                        <Slider {...settings} className={styles.newyo}>
                            <div className={styles.note}>
                                <div className={styles.newpath}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.303" height="55.728" viewBox="0 0 81.303 55.728">
                                        <path id="Path_449" data-name="Path 449" d="M-22.39-94.268c16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8a18.135,18.135,0,0,0-18.083,17.8c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342C-25.26-95.13-24.112-93.981-22.39-94.268Zm38.175-37.888c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342-1.435,1.435-.287,2.583,1.435,2.3,16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8A18.135,18.135,0,0,0,15.785-132.156Z" transform="translate(30.139 149.952)" fill="" opacity="0.2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <Image src={slider1} alt='slider-Image' className='' />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.datarow}>
                                        <p className={styles.aswat}>Edd Lockwood</p>
                                        <Image src={starp} alt="" />
                                    </div>
                                    <p className={styles.start}>The story of the business relationship started with a 30 second video in 2019, now Infinity Animations team has produced 27 videos for our multiple brands for us.  </p>
                                </div>
                            </div>
                            <div className={styles.note}>
                                <div className={styles.newpath}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.303" height="55.728" viewBox="0 0 81.303 55.728">
                                        <path id="Path_449" data-name="Path 449" d="M-22.39-94.268c16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8a18.135,18.135,0,0,0-18.083,17.8c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342C-25.26-95.13-24.112-93.981-22.39-94.268Zm38.175-37.888c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342-1.435,1.435-.287,2.583,1.435,2.3,16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8A18.135,18.135,0,0,0,15.785-132.156Z" transform="translate(30.139 149.952)" fill="" opacity="0.2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <Image src={slider2} alt='slider-Image' className='' />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.datarow}>
                                        <p className={styles.aswat}>Kelly Sparks</p>
                                        <Image src={starp} alt="" />
                                    </div>
                                    <p className={styles.start}>From start to finish, the process was straightforward. It was a pleasure to work with the Infinity Animations squad.   </p>
                                </div>
                            </div>
                            <div className={styles.note}>
                                <div className={styles.newpath}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.303" height="55.728" viewBox="0 0 81.303 55.728">
                                        <path id="Path_449" data-name="Path 449" d="M-22.39-94.268c16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8a18.135,18.135,0,0,0-18.083,17.8c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342C-25.26-95.13-24.112-93.981-22.39-94.268Zm38.175-37.888c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342-1.435,1.435-.287,2.583,1.435,2.3,16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8A18.135,18.135,0,0,0,15.785-132.156Z" transform="translate(30.139 149.952)" fill="" opacity="0.2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <Image src={slider3} alt='slider-Image' className='' />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.datarow}>
                                        <p className={styles.aswat}>Jason Gawkward</p>
                                        <Image src={starp} alt="" />
                                    </div>
                                    <p className={styles.start}>The whole team of Infinity Animations was extremely responsive and helpful. The videos were produced on time.  </p>
                                </div>
                            </div>
                            <div className={styles.note}>
                                <div className={styles.newpath}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.303" height="55.728" viewBox="0 0 81.303 55.728">
                                        <path id="Path_449" data-name="Path 449" d="M-22.39-94.268c16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8a18.135,18.135,0,0,0-18.083,17.8c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342C-25.26-95.13-24.112-93.981-22.39-94.268Zm38.175-37.888c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342-1.435,1.435-.287,2.583,1.435,2.3,16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8A18.135,18.135,0,0,0,15.785-132.156Z" transform="translate(30.139 149.952)" fill="" opacity="0.2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <Image src={slider1} alt='slider-Image' className='' />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.datarow}>
                                        <p className={styles.aswat}>Edd Lockwood</p>
                                        <Image src={starp} alt="" />
                                    </div>
                                    <p className={styles.start}>The story of the business relationship started with a 30 second video in 2019, now Infinity Animations team has produced 27 videos for our multiple brands for us.  </p>
                                </div>
                            </div>
                            <div className={styles.note}>
                                <div className={styles.newpath}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.303" height="55.728" viewBox="0 0 81.303 55.728">
                                        <path id="Path_449" data-name="Path 449" d="M-22.39-94.268c16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8a18.135,18.135,0,0,0-18.083,17.8c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342C-25.26-95.13-24.112-93.981-22.39-94.268Zm38.175-37.888c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342-1.435,1.435-.287,2.583,1.435,2.3,16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8A18.135,18.135,0,0,0,15.785-132.156Z" transform="translate(30.139 149.952)" fill="" opacity="0.2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <Image src={slider2} alt='slider-Image' className='' />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.datarow}>
                                        <p className={styles.aswat}>Kelly Sparks</p>
                                        <Image src={starp} alt="" />
                                    </div>
                                    <p className={styles.start}>From start to finish, the process was straightforward. It was a pleasure to work with the Infinity Animations squad.   </p>
                                </div>
                            </div>
                            <div className={styles.note}>
                                <div className={styles.newpath}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.303" height="55.728" viewBox="0 0 81.303 55.728">
                                        <path id="Path_449" data-name="Path 449" d="M-22.39-94.268c16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8a18.135,18.135,0,0,0-18.083,17.8c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342C-25.26-95.13-24.112-93.981-22.39-94.268Zm38.175-37.888c0,15.5,13.777,16.074,13.777,23.249,0,4.018-2.583,8.037-7.463,12.342-1.435,1.435-.287,2.583,1.435,2.3,16.361-4.305,28.7-18.083,27.555-37.888-.574-9.472-7.75-17.8-17.222-17.8A18.135,18.135,0,0,0,15.785-132.156Z" transform="translate(30.139 149.952)" fill="" opacity="0.2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <Image src={slider3} alt='slider-Image' className='' />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.datarow}>
                                        <p className={styles.aswat}>Jason Gawkward</p>
                                        <Image src={starp} alt="" />
                                    </div>
                                    <p className={styles.start}>The whole team of Infinity Animations was extremely responsive and helpful. The videos were produced on time.  </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
