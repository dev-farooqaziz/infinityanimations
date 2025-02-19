"use client"
import Image from "next/image"; 
// Import Components
import styles from '@/app/explainer-videos-animations/component/statistics/statistics.module.css';
import proven from "media/banner/proven.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Video = () => {
  // ===================================
  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
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
    slidesToShow: 1,
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
              <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Types Of <span className="colorred2">Explainer </span>
                Videos</h3>
              <p className={styles.words}>
                Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
              </p>
            </div>
            {isSliderActive ?
              <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`} >
                <div className={styles.soul}>
                  <h3>4+</h3>
                  <p>Years Of <br></br>
                    Experience</p>
                </div>
                <div className={styles.soul1}>
                  <h3>15+</h3>
                  <p>Million <br></br>
                    Views</p>
                </div>
                <div className={styles.soul2}>
                  <h3>1600+</h3>
                  <p>Videos <br></br>
                    Delivered</p>
                </div>
                <div className={styles.soul3}>
                  <h3>1200+</h3>
                  <p> Clients <br></br>
                    Across The World </p>
                </div>
              </Slider>
              :
              <div className={styles.provenbg}>
                <div className={styles.process}>
                  <div className={styles.video}>
                    <div className={styles.soul}>
                      <h3>4+</h3>
                      <p>Years Of <br></br>
                        Experience</p>
                    </div>
                    <div className={styles.soul1}>
                      <h3>15+</h3>
                      <p>Million <br></br>
                        Views</p>
                    </div>
                  </div>
                  <div className={styles.video}>
                    <div className={styles.soul2}>
                      <h3>1600+</h3>
                      <p>Videos <br></br>
                        Delivered</p>
                    </div>
                    <div className={styles.soul3}>
                      <h3>1200+</h3>
                      <p> Clients <br></br>
                        Across The World </p>
                    </div>
                  </div>
                </div>
                <div className={styles.pricing}>
                  <Image src={proven} className={styles.newtoen} alt="" />
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
