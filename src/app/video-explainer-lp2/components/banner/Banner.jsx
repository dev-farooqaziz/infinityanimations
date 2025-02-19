"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
import { CheckCircle } from 'heroicons-react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css'
// ===== Images
import BannerLogos from "media/video-explainer/bnr-logo.png"
import chatIcon from "media/video-explainer/chat-icon.png"
import Star from "media/banner/star.png"

const Banner = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
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
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='bg-cover bg-right-top bg-[#003465f0] lg:bg-[url("../../public/video-explainer/banner.jpg")] h-[100%] pt-[180px] lg:pt-[265px] pb-[60px] md:pb-[100px] mt-[-85px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[30px] font-[700] uppercase montserrat lg:w-10/12 md:leading-[35px] '>EXPAND YOUR BRAND’S REACH WITH AN ENGAGING CUSTOM EXPLAINER VIDEO</h1>
                            <p className='text-white text-[18px] font-[400] montserrat lg:w-11/12 leading-[25px] py-[25px]'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
                            <ul>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'> Full HD Animations</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Appealing Designs</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Latest Technology</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Award-Winning Agency</span>
                                </li>
                            </ul>
                            <div className='flex items-center gap-5'>
                                <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4 mb-6' />
                                <div className='flex flex-col items-center'>
                                    <div className="flex items-center">
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                    </div>
                                    <p className='mb-0 text-[12px] font-sans'>
                                        <strong>4.8 out of 5</strong> (review rating)
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-2">
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center text-[16px] text-black font-[700] montserrat bg-[#f6c501] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Get Started
                                    </button>
                                </div>
                                <div className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-[#ffcb05] leading-[14px]'>Talk to our Expert</span>
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-white text-[16px] montserrat font-[700]'>Live Chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <form className='bg-[#003465] pt-[20px] md:mr-[98px] md:ml-[40px] relative border-[6px] border-white lg:w-8/12 h-full'>
                                <h3 className='text-white text-[20px] md:text-[25px] leading-[30px] montserrat font-[700] text-left py-[10px] px-[20px]'>Share Your <br className='block' />
                                    <strong className='text-[30px] text-[#f6c501] md:ml-[2rem] font-extrabold '>
                                        Animation Idea
                                    </strong>
                                </h3>

                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-40%] z-50">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name='email' placeholder='Enter Email' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" name='phone' minLength="10"
                                            maxLength="13"
                                            pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>

                                    <textarea name='message' type="text" placeholder='Message' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black resize-none' required onChange={handleDataChange}></textarea>

                                    <button type='submit' className='bg-[#231f20] hover:bg-[#1c2a49] text-white text-[16px] font-[700] montserrat uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </div>

                                <div className={`form_partical absolute top-[-7px] right-[42px] md:right-[12px] ${styles.discountbg}`}>
                                    <h6 className={`absolute font-[700] text-right uppercase left-[-33px] m-auto text-white top-[-20px] z-[1] text-[13px] rotate-[-8deg] right-[-58px] montserrat before:content-[''] before:absolute before:w-[135px] before:h-[52px] before:top-[-15px] before:left-[-17px] before:right-0 ${styles.headingParticle} before:rotate-[10deg] before:bg-cover before:bg-center before:z-[-1] w-[110px]`}>Special Offer</h6>
                                    <h4 className={`text-black relative m-0 top-[-2px] text-[30px] font-[700] right-[-32px] rotate-[-18deg] montserrat`}>50%</h4>
                                    <h5 className='m-0 text-black relative z-1 top-[-13px] text-[11px] montserrat font-[700] right-[-42px] rotate-[-18deg]'>Discount</h5>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner
