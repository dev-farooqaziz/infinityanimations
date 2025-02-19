"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
import usePopup from '@/app/configs/store/Popup';
// Images 
import Star from "media/banner/star.png"
import Brands from "media/explainer-videos-new/brands.png"
import Partners from "media/explainer-videos-new/partners.png"
import Particle1 from "media/explainer-videos-new/particle1.png"
import Particle2 from "media/explainer-videos-new/particle2.png"
import Particle3 from "media/explainer-videos-new/particle3.png"
import Particle4 from "media/explainer-videos-new/particle4.png"
import Particle5 from "media/explainer-videos-new/particle5.png"
import Particle6 from "media/explainer-videos-new/particle6.png"
import Particle7 from "media/explainer-videos-new/particle7.png"
import Particle8 from "media/explainer-videos-new/particle8.png"
import Particle9 from "media/explainer-videos-new/particle9.png"
import Particle10 from "media/explainer-videos-new/particle10.png"

const Banner = ({ content }) => {
    const { bannerImage } = content;

    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }

    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('GET IN TOUCH');
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
    // Form Code End
    return (
        <>
            <section className="bg-[url('../../public/explainer-videos-new/banner-bg.png')] bg-cover bg-center bg-no-repeat relative py-[80px] xl:py-[0px] xl:h-[90vh] 2xl:h-screen flex items-center justify-center min-h-[646px] overflow-hidden mt-[60px] md:mt-[66px]">
                <div className="particals">
                    <Image src={Particle1} alt='Infinity Animations' className='absolute top-[4rem] left-[4rem] z-[999] rotate' />
                    <Image src={Particle2} alt='Infinity Animations' className='absolute top-[4rem] left-0 right-0 m-auto z-[999] rotate' />
                    <Image src={Particle3} alt='Infinity Animations' className='absolute left-[2rem] z-[999] rotate' />
                    <Image src={Particle4} alt='Infinity Animations' className='absolute left-0 bottom-0 z-[999] md:block hidden' />
                    <Image src={Particle5} alt='Infinity Animations' className='absolute left-0 right-[10rem] bottom-[1rem] m-auto z-[999] rotate' />
                    <Image src={Particle6} alt='Infinity Animations' className='absolute right-[4rem] bottom-[3rem] z-[999] rotate' />
                    <Image src={Particle7} alt='Infinity Animations' className='absolute right-[-16rem] left-0 bottom-[70px] m-auto z-[999] rotate' />
                    <Image src={Particle8} alt='Infinity Animations' className='absolute left-[53rem] top-[4rem] z-[999] rotate' />
                    <Image src={Particle9} alt='Infinity Animations' className='absolute right-[13px] lg:right-[70px] top-[1rem] z-[999] lg:z-[9991] rotate md:block hidden' />
                    <Image src={Particle10} alt='Infinity Animations' className='absolute bottom-[30%] right-[45rem] z-[999] rotate' />
                </div>
                <div className="lg:block hidden video-div w-full h-auto absolute z-[9] overflow-hidden before:content-[''] before:bg-[#442891] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7]">
                    <video src={bannerImage} autoPlay={true} loop={true} muted={true} className='relative h-full xl:left-0 inline-block'>
                    </video>
                </div>
                <div className="xxl:container max-w-7xl mx-auto px-5 lg:px-8 xl:px-0 relative z-[999]">
                    <div className="grid grid-cols-12 gap-y-6">
                        <div className="col-span-12 lg:col-span-6">
                            <div className='lg:mt-[50px]'>
                                <span className='text-[20px] font-[700] font-sans text-white bg-[#f36e16] py-[5px] px-[10px] inline-block'>GET 60 SECONDS</span>
                                <h1 className='text-[50px] md:text-[70px] font-[700] text-white poppins leading-[1.1] lg:w-8/12 mb-2'>Animated
                                    Video <span className='bg-[#f36e16] px-[10px] relative font-[600] inline-block h-[55px] md:h-[75px]'>$165</span>
                                </h1>
                                <p className='text-white text-[16px] md:text-[19px] mb-[20px] poppins xl:w-10/12 2xl:w-full'>We Deliver Professional Video Solutions and production strategies to deliver impactful and eye-catching videos</p>
                            </div>
                            <div className="btns flex items-center justify-between md:w-8/12 pt-2 mb-[35px]">
                                <div className="btn1">
                                    <button onClick={popupHandle} className='btn_shadow text-[16px] md:text-[18px] text-[#9a9a9a] bg-white py-[10px] px-[25px] md:px-[40px] relative poppins cursor-pointer font-[700] rounded-[30px] uppercase'>
                                        LET'S
                                        <span className='text-[#f36e16]'> ANIMATE</span>
                                    </button>
                                </div>
                                <div className="chat">
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-[#f36e16] font-[700] text-[20px] leading-[1.2] inline-block cursor-pointer poppins text-center'>
                                        <span className='text-white block text-[13px]'>24/7 Available </span>
                                        Live Chat
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Image src={Brands} alt='banner-logos' className='object-contain mt-4 mb-6' />
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
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="form_wrapper px-4 md:px-6 py-6 lg:py-14 rounded-2xl xl:hidden block bg-[#f36e16]">
                                <div className="content">
                                    <h2 className='text-[33px] md:text-[42px] font-[700] text-white xl:text-black poppins leading-[35px] md:leading-[42px] mb-3'>Let’s <br /> Conceptualize</h2>
                                    <p className='text-[17px] md:text-[20px] mb-[25px] leading-[1.2] md:leading-[1.43] font-sans text-white xl:text-[#292b2c]'>Your idea and animate it with creative expertise</p>
                                </div>
                                <form>
                                    <div className="relative">
                                        <input type="text" name='name' placeholder='Full Name *' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' onChange={handleDataChange} required />

                                        {errors.phone && (
                                            <span className="absolute left-[17px] bottom-[-1px] text-[11px] block font-medium lg:text-[12px] text-black poppins">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name="email" placeholder='Email Address' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' onChange={handleDataChange} required />

                                        {errors.phone && (
                                            <span className="absolute left-[17px] bottom-[-1px] text-[11px] block font-medium lg:text-[12px] text-black poppins">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="phone" name="phone" placeholder='Phone No' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="absolute left-[17px] bottom-[-1px] text-[11px] block font-medium lg:text-[12px] text-black poppins">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <textarea name='message' placeholder='Brief Description' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[8px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4 resize-none border' onChange={handleDataChange}></textarea>
                                    </div>
                                    <button type='submit' className='bg-[#442891] text-white rounded-[6px] md:rounded-[30px] py-[8px] px-[35px] btn_shadow border-0 text-[18px] relative poppins cursor-pointer font-[700] uppercase' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Part Start */}
                <div className="form_bg bg-[url('../../public/explainer-videos-new/form-bg.png')] bg-cover bg-center w-[755px] xl:w-[805px] 3xl:w-[955px] h-screen absolute right-0 top-0 z-[999] xl:block hidden">
                    <div className="form_wrapper pt-[11rem] xxl:pt-[15rem] 3xl:pt-[20rem] pr-[7rem] pb-[6rem] pl-[14rem]">
                        <div className="content">
                            <h2 className='text-[42px] font-[700] text-black poppins leading-[42px] mb-3'>Let’s <br /> Conceptualize</h2>
                            <p className='text-[20px] mb-[25px] leading-[1.43] font-sans text-[#292b2c]'>Your idea and animate it with creative expertise</p>
                        </div>
                        <form>
                            <div className="relative">
                                <input type="text" name='name' placeholder='Full Name *' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4' onChange={handleDataChange} required />

                                {errors.phone && (
                                    <span className="absolute left-[17px] bottom-[-1px] text-[11px] lg:text-[13px] block font-medium text-black poppins">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <input type="email" name="email" placeholder='Email Address' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4' onChange={handleDataChange} required />

                                {errors.phone && (
                                    <span className="absolute left-[17px] bottom-[-1px] text-[11px] lg:text-[13px] block font-medium text-black poppins">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <input type="phone" name="phone" placeholder='Phone No' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4' onChange={handleDataChange} required />
                                {errors.phone && (
                                    <span className="absolute left-[17px] bottom-[-1px] text-[11px] lg:text-[13px] block font-medium text-black poppins">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <textarea name='message' placeholder='Brief Description' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[8px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4 resize-none border' onChange={handleDataChange}></textarea>
                            </div>
                            <button type='submit' className='bg-[#442891] text-white rounded-[6px] md:rounded-[30px] py-[8px] px-[35px] btn_shadow border-0 text-[18px] relative poppins cursor-pointer font-[700] uppercase' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                        </form>
                    </div>
                </div>
                {/* Form Part End */}
            </section>
            {/* Brands Section */}
            <section className='py-[50px]'>
                <div className="max-w-7xl mx-auto">
                    <Image src={Partners} alt='Infinity Animations' className='mx-auto' />
                </div>
            </section>
            {/* Brands Section */}
        </>
    )
}

export default Banner
