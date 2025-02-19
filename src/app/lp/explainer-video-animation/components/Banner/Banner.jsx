"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
// Import Css
import styles from "./Banner.module.css"
// Images
import Chats from "media/infinity-studio-lp-new/banner-chat.svg"
import BannerLogos from "media/infinity-studio/bannerLogos.png"
import BannerLogosTwo from "media/infinity-studio-lp-new/bannerLogosTwo.png"
import Logo1 from "media/infinity-studio-lp-new/form-1.png"
import Logo2 from "media/infinity-studio-lp-new/form-2.png"

const Banner = () => {
    //========== Popup
    const backgroundVideo = 'https://player.vimeo.com/progressive_redirect/playback/950015917/rendition/720p/file.mp4?loc=external&log_user=0&signature=e0789e199bc0374e4971e5fc0b408a23ea883170eeb1fa2500dbaf2d0117d095';
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
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className='pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[130px] lg:pb-[60px] flex items-center justify-center relative md:z-auto md:bg-transparent z-[9] bg-black'>
            <div className="video-div w-full h-[480px] md:h-full absolute top-0 z-[-1] before:content-[''] before:bg-[#000] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7] hidden md:block">
                <video id="background-video" src={backgroundVideo} autoPlay loop muted className='relative h-full xl:left-0 w-full object-cover'>
                </video>
            </div>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-y-5 md:gap-y-10 items-center">
                    <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                        <div className="txt">
                            <h1 className='text-[25px] lg:text-[35px] font-semibold poppins leading-[35px] lg:leading-[50px] mb-5'>Boost Sales with Animation Services. Instantaneously Forge Animated Explainer Videos!</h1>
                            <p className='text-[14px] md:text-[16px] poppins leading-[25px] font-normal xl:pr-[20px]'>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.</p>
                            <div className="flex items-center gap-4 lg:gap-8 pt-5 lg:pt-9">
                                <div>
                                    <a href='tel:012-345-6789' className='flex items-center justify-center text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                        Call Now
                                    </a>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image src={Chats} alt='Infinity Animation' />
                                    <div>
                                        <p className='text-[15px] leading-tight text-white poppins font-normal '>Chat Now to Avail 50% OFF</p>
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-[#0DEB48] poppins text-[17px] font-semibold'>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-7 my-5 md:my-0 md:pt-9'>
                                <Image src={BannerLogos} alt='Infinity Animation' className='w-6/12' />
                                <Image src={BannerLogosTwo} alt='Infinity Animation' className='w-4/12' />
                            </div>
                        </div>
                    </div>
                    <div className="2xl:block hidden 2xl:col-span-1"></div>
                    <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                        <div className={`${styles.form} bg-[#FF2D4B] rounded-[19px] py-12 px-6 xl:px-8 md:mr-auto lg:mr-0 ml-auto relative lg:w-[75%] 2xl:w-[90%]`}>
                            <div className="flex items-center gap-x-4">
                                <Image src={Logo1} alt='Infinity Animation' height={100} className='mt-[-49px]' />
                                <p className='text-[15px] font-semibold leading-[22px] md:leading-[26px] text-white poppins'>
                                    SIGN-UP & GET UPTO  <span className='text-[#FFCC00]'>50%</span> Off <br className='md:block hidden' />
                                    ON ALL TYPES OF VIDEO SERVICES
                                </p>
                            </div>
                            <div className="logo absolute w-[25%] right-[-8px] top-[10px] md:w-[20%] md:right-[-10px] md:top-[35px] xl:w-[25%] xl:right-[-15px] xl:top-[25px]">
                                <Image src={Logo2} alt='Infinity Animation' />
                            </div>
                            <form className='pt-5 lg:pt-8'>
                                <div className="name relative mb-4">
                                    <input type="text" name="name" placeholder='Name' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' onChange={handleDataChange} required />
                                    {errors.name && (
                                        <span className="text-[12px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-50%] z-50">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="number relative mb-4">
                                    <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" placeholder='Phone Number' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-50%] z-50">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="email relative mb-4">
                                    <input type="email" name='email' placeholder='Email' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' onChange={handleDataChange} required />
                                    {errors.email && (
                                        <span className="text-[12px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-50%] z-50">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <div className="message mb-4">
                                    <textarea name="message" placeholder='Tell us about your Project' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[100px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0 pt-4 resize-none' onChange={handleDataChange}></textarea>
                                </div>
                                <div className="btn">
                                    <button className='h-[50px] w-full bg-black rounded-[5px] poppins text-[14px] md:text-[16px] leading-[25px] font-semibold' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
