"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ===== Images
import BannerLogos from "media/infinity-studio/bannerLogos.png"
import BannerLogosReel from "media/infinity-studio/play.png"
import Discount from "media/infinity-studio/offer.png"
import Check from "media/infinity-studio/check.png"
import chatIcon from "media/video-explainer/chat-icon.png"

const Banner = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('GET A QUOTE');
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
            <section className='bg-[#003465f0] lg:bg-[url("../../public/infinity-studio/banner.webp")] bg-[length:100%_100%] bg-center bg-no-repeat h-full 3xl:h-[100vh] pt-[115px] md:pt-[150px] 3xl:pt-[230px] pb-[60px] md:pb-[100px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12 items-end ">
                        <div className="col-span-12 lg:col-span-8">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-[600] poppins lg:w-10/12 md:leading-[50px]'>Combining Creativity With Motion & Turning Concepts Into <span className='text-[#f6c501] '> Extraordinary Visual Experiences</span></h1>
                            <p className='text-white text-[16px] font-[400] poppins lg:w-11/12 leading-[25px] py-[20px]'>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.</p>
                            <div className="grid grid-cols-12 gap-y-6 items-end pb-0 pt-[25px] md:py-[25px]">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2 rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Full HD Animations</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Appealing Designs</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Latest Technology</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Award-Winning Agency</span>
                                    </div>
                                </div>

                            </div>
                            <div className="hidden md:flex items-start gap-4 md:gap-10 mt-6">
                                <div className='w-[60%] h-auto'>
                                    <Image src={BannerLogos} alt='banner-logos' className='w-full' />
                                </div>
                                <div className='w-[85px] h-auto text-center'>
                                    <Image src={BannerLogosReel} alt='banner-logos' className='mb-2 mx-auto' />
                                    <span className='text-white font-normal poppins pt-[8px]'>Play Reels</span>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-2">
                                <div className="btn">
                                    <a href='tel:012-345-6789' className='flex items-center text-[16px] text-black font-[700] montserrat bg-[#f6c501] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Call Now
                                    </a>
                                </div>
                                <div className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-[#ffcb05] leading-[14px]'>Chat Now to Avail 50% OFF</span>
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-white text-[16px] montserrat font-[700]'>Live Chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <form className='bg-[#003465] relative border-[3.5px] rounded-xl border-white w-full mx-auto'>
                                <div className=' w-[70%] top-0 mx-auto '>
                                    <Image src={Discount} alt='Infinity Animation' />
                                </div>
                                <h3 className='text-white text-[20px] md:text-[22px] leading-[30px] poppins font-[700] text-center pt-[20px] pb-[10px] px-[20px]'>Share Your <span className='text-[#f6c501] '> Animation Idea </span>
                                </h3>
                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-40%] z-50">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name='email' placeholder='Enter Email' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" name='phone' minLength="10"
                                            maxLength="13"
                                            pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <textarea name='message' type="text" placeholder='Message' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black resize-none rounded-md' required onChange={handleDataChange}></textarea>

                                    <button type='submit' className='bg-[#ffcb05] text-black text-[16px] font-[700] rounded-md poppins uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
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
