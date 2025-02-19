"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Axios from "axios";
import { usePathname } from "next/navigation"
import { FaRegCommentAlt } from "react-icons/fa";
//===== Component
import styles from './bannercontact.module.css'
// import Image
import BrandsLogo1 from "media/location-page/brand-1.png"
import BrandsLogo2 from "media/location-page/brand-2.png"
import BrandsLogo3 from "media/location-page/brand-3.png"
import BrandsLogo4 from "media/location-page/brand-4.png"
import BrandsLogo5 from "media/location-page/brand-5.png"
import Profile from "media/location-page/Profile.png"
import phone from "media/location-page/Calling.png"
import message from "media/location-page/Message.png"
import btnIcon from "media/icons/arrow-red.png"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tabInfo = [
  { image: BrandsLogo1 },
  { image: BrandsLogo2 },
  { image: BrandsLogo3 },
  { image: BrandsLogo4 },
  { image: BrandsLogo5 },
  { image: BrandsLogo1 },
  { image: BrandsLogo2 },
  { image: BrandsLogo3 },
  { image: BrandsLogo4 },
  { image: BrandsLogo5 },
];

function BannerContact({ content }) {
  const { title, para: { paraArrayBanner } } = content;

  //========== Form
  const [ip, setIP] = useState('');
  const [pagenewurl, setPagenewurl] = useState('');
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('Get Started');
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

  const testiSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={`w-full flex items-center justify-start pb-6 md:pb-12 lg:pb-20 bg-none bg-no-repeat bg-center bg-cover relative ${styles.padding}`}>
        <div className="container">
          <div className='grid grid-cols-12 justify-items-around w-full'>
            <div className={`col-span-12 lg:col-span-5 flex flex-col`}>
              <div className={`lg:h-full ${styles.sectionRibbon} bg-[#D60925] rounded-[4px] mt-[65px] md:mt-0 w-[95%] mx-auto`}>
                <div className={`${styles.ribbon} bg-white border py-[20px] `}>
                  <span className={` py-3 ${styles.ribbon5} `}>
                    <h4 className={`text-[#fff] text-[25px] md:text-[30px] font-[550] font-sans leading-[30px] text-center mb-2`}>
                      Contact us
                    </h4>
                    <p className="text-[11px] sm:text-[12px] text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-center mb-5">
                      We are always here to help what you need.
                    </p>
                  </span>

                  <div className="form pt-[55px] px-[15px] sm:px-[25px] md:px-[35px] pb-[30px]">
                    <div className="relative">
                      <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                        <Image src={Profile} height='15px' width='15px' />
                        <input type="text" name="name" placeholder='Enter your name' className='mx-3 w-full bg-transparent font-sans placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                      </div>
                      {errors.name && (
                        <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-60%] z-50">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                        <Image src={message} height='15px' width='15px' />
                        <input type="email" name='email' placeholder='Enter Email' className='mx-3 w-full bg-transparent font-sans placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                      </div>
                      {errors.email && (
                        <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-60%] z-50">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                        <Image src={phone} height='15px' width='15px' />
                        <input type="tel" name='phone' minLength="10"
                          maxLength="13"
                          pattern="[0-9]*" placeholder='Enter Phone Number' className='mx-3 w-full bg-transparent font-sans placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                      </div>
                      {errors.phone && (
                        <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-60%] z-50">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                      <FaRegCommentAlt className='text-[#858585] text-[25px]' />
                      <textarea id="message" name="message" rows="2" className="mx-3 w-full bg-transparent font-sans placeholder:text-[#858585] focus:outline-0 text-black resize-none" placeholder="Type Full Details" onChange={handleDataChange} />
                    </div>
                    <button type='submit' className='bg-prime text-white border-0 h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center justify-between gap-x-2 w-full' onClick={handleFormSubmit} disabled={isDisabled}>
                      <span className="text-[16px] xl:text-[18px] font-normal font-sans">{formStatus}</span>
                      <Image src={btnIcon} className="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2 object-contain" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div className={`  col-span-12 lg:col-span-7 flex flex-col justify-center h-full px-[15px] lg:ps-[15%] mx-[15px] sm:mx-[35px] md:mx-0 mt-[55px] lg:mt-5  ${styles.paraBg}`}>
              <h2 className={`text-[#fff] text-[24px] md:text-[35px] sm:text-[40px] font-semibold font-sans leading-tight mt-5 mb-5 text-center lg:text-start`}>
                {title}
              </h2>
              {paraArrayBanner.map((para, index) => (
                <p className="text-[15px] lg:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5">
                  {para}
                </p>
              ))}
              <div className='grid grid-cols-1 '>
                <Slider {...testiSlider} >
                  {tabInfo.map((item, index) => (
                    <div className='h-[80px] content-center'>
                      <Image src={item.image} alt='BrandsLogo' className='mx-auto' />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default BannerContact