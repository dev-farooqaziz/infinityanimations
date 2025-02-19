"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Axios from "axios";
import { usePathname } from "next/navigation"
// Import Components
import styles from '@/app/explainer-videos-animations/component/banner/banner.module.css';
import icon1 from "media/banner/cut.png"
import icon2 from "media/banner/call.png"
import icon3 from "media/banner/bnr-logo.png"
import icon4 from "media/banner/off.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { register } from "swiper/element/bundle";
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Autoplay]);
// icons
import PlayIcon from "media/icons/video-icon.png"
import usePopup from "@/app/configs/store/Popup";

const Banner = () => {

  const { popup, togglePopup } = usePopup()
  const popupHandle = () => {
    togglePopup(popup)
  }

  const swiperElRef = useRef(null);
  useEffect(() => {
    register();
    const params = {
      slidesPerView: 3,
      injectStyles: [
        `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00C0E4;
        }
      `,
      ],
    };
    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);


  const slides = [
    {
      avatar: "../../banner/1.mp4",
    },
    {
      avatar: "../../banner/2.mp4",
    },
    {
      avatar: "../../banner/3.mp4",
    },
    {
      avatar: "../../banner/2.mp4",
    },
  ];

  //========== Form
  const [ip, setIP] = useState('');
  const [pagenewurl, setPagenewurl] = useState('');
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('Get a Free Quote');
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  //========== Fetch IP data from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get('https://ipwho.is/');
      setIP(res.data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const router = usePathname();
  const currentRoute = router;

  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formValidateHandle = () => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    const phoneRegex = /^[0-9]+$/;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone number is required";
    }
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");
    setIsDisabled(true);

    const errors = formValidateHandle();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const currentdate = new Date().toLocaleString();
      const dataToSend = {
        ...data,
        pageUrl: pagenewurl,
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        currentdate: currentdate,
      };
      const JSONdata = JSON.stringify(dataToSend);

      try {
        //========== First API call to your server
        await fetch('/api/email/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSONdata
        });

        //========== Second API call to SheetDB
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
          "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
          "Brand": "Infinity Animations",
          "Page": `${currentRoute}`,
          "Date": currentdate,
          "Time": currentdate,
          "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
          method: "POST",
          body: bodyContent,
          headers: headersList
        });
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
          "fields": [
            {
              "objectTypeId": "0-1",
              "name": "email",
              "value": data.email
            },
            {
              "objectTypeId": "0-1",
              "name": "firstname",
              "value": data.name
            },
            {
              "objectTypeId": "0-1",
              "name": "phone",
              "value": data.phone
            },
            {
              "objectTypeId": "0-1",
              "name": "message",
              "value": data.message
            }
          ],
          "context": {
            "ipAddress": ip.ip,
            "pageUri": pagenewurl,
            "pageName": currentRoute
          },
          "legalConsentOptions": {
            "consent": {
              "consentToProcess": true,
              "text": "I agree to allow Example Company to store and process my personal data.",
              "communications": [
                {
                  "value": true,
                  "subscriptionTypeId": 999,
                  "text": "I agree to receive marketing communications from Example Company."
                }
              ]
            }
          }
        });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/47083847/011ef447-7771-4b56-8014-8004c3cdcc51", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
        setFormStatus("Success...");
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 2000);
      } catch (error) {
        console.error('Error during form submission:', error);
        setFormStatus("Failed...");
        setIsDisabled(false);
      }
    } else {
      setFormStatus("Failed...");
      setIsDisabled(false);
    }
  };

  const [isIcon, setIsIcon] = useState(true)

  const handleVideoPlay = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      if (video.paused) {
        video.play();
        setIsIcon(false)
      } else {
        video.pause();
        setIsIcon(true)
      }
    }
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
      <section className={`newcon ${styles.banner}`} id="newslides">
        <div className={`container mx-auto  ${styles.count} ${styles.pointer}`}>
          <div className="md:grid xl:grid-cols-2 lg:grid-cols-1">
            <div className={styles.condition}>
              <h1 className={`fontsfpro mb-0 ${styles.heading}`}>
                <span className="colorred">Expand </span>
                Your <span className="colorred">Brand’s</span>
              </h1>
              <h3 className={`fontsfprosemi ${styles.reach}`}>Reach With An Engaging Custom Explainer Video</h3>
              <p className={styles.company}>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
              <div className={styles.helped}>
                <div className={styles.list}>
                  <div className={`${styles.engage1} ${styles.why}`}>
                    <Image src={icon1} className=" " alt="Infinity Animations" />
                    <p>Product Explainer Videos</p>
                  </div>
                  <div className={`${styles.engage2} ${styles.why}`}>
                    <Image src={icon1} className=" " alt="Infinity Animations" />
                    <p>Animated Business Videos</p>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={`${styles.engage3} ${styles.why}`}>
                    <Image src={icon1} className=" " alt="Infinity Animations" />
                    <p>Animated Marketing Videos</p>
                  </div>
                  <div className={`${styles.engage4} ${styles.why}`}>
                    <Image src={icon1} className=" " alt="Infinity Animations" />
                    <p>Corporate Animated Videos</p>
                  </div>
                </div>
              </div>
              <div className={styles.expert}>
                <button onClick={popupHandle} className={styles.started}>Get Started</button>
                <div className={styles.pot}>
                  <Image src={icon2} className={styles.ntoen} alt="Infinity Animations" />
                  <div>
                    <h3>
                      <p className={styles.talktoour}>Talk to our Expert</p>
                      <a href="javascript:$zopim.livechat.window.show();" className={styles.livechat}>Live Chat</a>
                    </h3>
                  </div>
                </div>
                <Image src={icon3} className={styles.newtoen} alt="Infinity Animations" />
              </div>
              <form className="pt-4">
                <div className={styles.animationidea}>
                  <h3>Share Your Animation Idea</h3>
                  <div className={styles.form2}>
                    <div className="relative">
                      <input type="text" minLength="4" name="name" className="form-control" placeholder="Enter Your Name" onChange={handleDataChange} required />
                      {errors.name && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-50%]">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={handleDataChange} required />
                      {errors.email && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-50%]">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={styles.form2}>
                    <div className="relative">
                      <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" className="form-control" placeholder="Enter Phone Number" onChange={handleDataChange} required />
                      {errors.phone && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-50%]">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input type="text" className="form-control" name="message" placeholder="Enter Message" />
                    </div>
                  </div>
                  <button type="submit" className={styles.quote} disabled={isDisabled} onClick={handleFormSubmit}>{formStatus}</button>
                  <div className={styles.noty}>
                    <Image src={icon4} alt="Infinity Animations" />
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className={styles.slider}>
                <swiper-container className="newtranck"
                  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                  pagination={false}
                  init={false}
                  ref={swiperElRef}
                  centered-slides="false"
                  autoplay-delay="3000"
                  loop="true"
                  autoplay={false}

                >
                  {slides.map((testimonial, index) => (
                    <swiper-slide className='newfold newtown' key={index}>
                      <div>
                        <div className="w-[90%] m-auto relative">
                          <div className="card">
                            <button onClick={handleVideoPlay}>
                              <video controls={false} autoPlay={false} src={testimonial.avatar} id="videoPlay"></video>
                              {isIcon ? <Image src={PlayIcon} alt="Play Icon" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width={35} height={35} /> : null}
                            </button>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  ))}

                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
