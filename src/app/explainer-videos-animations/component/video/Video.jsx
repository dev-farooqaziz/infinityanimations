"use client"
import Image from "next/image";
// Import Components
import styles from '@/app/explainer-videos-animations/component/video/video.module.css';
import icon1 from "media/banner/animate/img1.png"
import icon2 from "media/banner/animate/img2.png"
import icon3 from "media/banner/animate/img3.png"
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
          slidesToShow: 3,
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
      <section className={`newcon ${styles.video}`}>
        <div className={`container mx-auto ${styles.pointer} `}>
          <div className={`md:grid md:grid-cols-1`}>
            <div className={styles.element}>
              <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Why Explainer <span className="colorred2">Videos </span>
                Are Key To Digital <span className="colorred2">Branding</span></h3>
              <p className={styles.words}>
                Simple words or symbols do not attract as many people as video animation does. If you're about
                to introduce a product or service, animated videos are the perfect way to make a shout out on
                the digital landscapes.
              </p>
            </div>
          </div>
          {isSliderActive ?
            <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`} >
              <div className={styles.attack}>
                <Image src={icon1} className=" " alt="Icon" />
                <div className={styles.brand}>
                  <h3 className="fontsfpro font23">Brand Video</h3>
                  <p className={styles.presence}>We craft animated videos to
                    improve your brand’s presence and it requires a different approach to adopt.</p>
                </div>
              </div>
              <div className={styles.attack}>
                <Image src={icon2} className=" " alt="Icon" />
                <div className={styles.brand}>
                  <h3 className="fontsfpro font23">2D, 3D Animated Videos</h3>
                  <p className={styles.presence}>We make compelling and highly engaging 2D and 3D videos in a variety of styles and at various levels of difficulty.</p>
                </div>
              </div>
              <div className={styles.attack}>
                <Image src={icon3} className=" " alt="Icon" />
                <div className={styles.brand}>
                  <h3 className="fontsfpro font23">Commercial Videos</h3>
                  <p className={styles.presence}>We produce exceptional commercial videos that will keep your clients hooked and boost your brand ngagement.</p>
                </div>
              </div>
            </Slider>
            :
            <div className={`md:grid md:grid-cols-3`}>
              <div className={styles.attack}>
                <Image src={icon1} className=" " alt="Icon" />
                <div className={styles.brand}>
                  <h3 className="fontsfpro font23">Brand Video</h3>
                  <p className={styles.presence}>We craft animated videos to
                    improve your brand’s presence and it requires a different approach to adopt.</p>
                </div>
              </div>
              <div className={styles.attack}>
                <Image src={icon2} className=" " alt="Icon" />
                <div className={styles.brand}>
                  <h3 className="fontsfpro font23">2D, 3D Animated Videos</h3>
                  <p className={styles.presence}>We make compelling and highly engaging 2D and 3D videos in a variety of styles and at various levels of difficulty.</p>
                </div>
              </div>
              <div className={styles.attack}>
                <Image src={icon3} className=" " alt="Icon" />
                <div className={styles.brand}>
                  <h3 className="fontsfpro font23">Commercial Videos</h3>
                  <p className={styles.presence}>We produce exceptional commercial videos that will keep your clients hooked and boost your brand ngagement.</p>
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
