"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/types/types.module.css';
import icon1 from "media/banner/motion/1.png"
import icon2 from "media/banner/motion/2.png"
import icon3 from "media/banner/motion/3.png"
import icon4 from "media/banner/motion/4.png"
import icon5 from "media/banner/motion/5.png"
import icon6 from "media/banner/motion/6.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";


const Video = () => {


  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
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
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
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

  return (
    <>
      <section className={`newcon ${styles.display}`}>
        <div className={`container mx-auto ${styles.pointer} `}>
          <div className={`md:grid md:grid-cols-1`}>
            <div className={styles.element}>
              <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Types Of <span className="colorred2">Explainer </span>
                Videos</h3>
              <p className={styles.words}>
                Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
              </p>
            </div>
          </div>
        </div>
        <div className={`container mx-auto ${styles.pointer} `}>
          {isSliderActive ?
            <Slider {...awardslogo}>
              <div className={styles.boxpost}>
                <Image src={icon1} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Whiteboard Animation <br></br>
                  Video
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon2} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Motion Graphics

                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon3} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  2D Character Animation<br></br>
                  Videos
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon4} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  3D Animation Video
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon5} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Screencast Videos
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon6} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Typography Videos
                </h4>
              </div>

            </Slider>
            :
            <div className={`md:grid md:grid-cols-3`}>
              <div className={styles.boxpost}>
                <Image src={icon1} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Whiteboard Animation <br></br>
                  Video
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon2} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Motion Graphics

                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon3} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  2D Character Animation <br></br>
                  Videos
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon4} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  3D Animation Video
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon5} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Screencast Videos
                </h4>
              </div>
              <div className={styles.boxpost}>
                <Image src={icon6} className="mt-3 newgost" alt="Infinity Animation" />
                <h4 className="fontsfpro font20 center colorblack mt-3">
                  Typography Videos
                </h4>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default Video
