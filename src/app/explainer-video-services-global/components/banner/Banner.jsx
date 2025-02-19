import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ===== Images
import BannerLogos from "media/animating-studio/BannerLogos.svg"
import Discount from "media/infinity-studio/offer.png"
import Check from "media/infinity-studio/check.png"

const Banner = () => {
    const backgroundVideo = 'https://player.vimeo.com/progressive_redirect/playback/950015917/rendition/720p/file.mp4?loc=external&log_user=0&signature=e0789e199bc0374e4971e5fc0b408a23ea883170eeb1fa2500dbaf2d0117d095';
    //========== Popup
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

    return (
        <>
            <section className='pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[130px] lg:pb-[60px] flex items-center justify-center relative md:z-auto md:bg-transparent z-[9] bg-black '>
                <div className="video-div w-full h-[480px] md:h-full absolute top-0 z-[-1] before:content-[''] before:bg-[#000] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7] hidden md:block">
                    <video id="background-video" src={backgroundVideo} autoPlay loop muted className='relative h-full xl:left-0 w-full object-cover'>
                    </video>
                </div>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12 items-end ">
                        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-[600] poppins lg:w-10/12 leading-[35px] lg:leading-[50px]'>HIRE #1 ANIMATION STUDIO, ENGAGING ANIMATED <span className='text-[#f6c501] '>EXPLAINER VIDEOS </span></h1>
                            <p className='text-white text-[16px] font-[400] poppins lg:w-11/12 leading-[25px] py-[20px]'>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.
                            </p>
                            <div className="grid grid-cols-12 gap-y-6 sm:gap-x-10 items-end pb-0 pt-[25px] md:py-[25px]">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2 rounded-full w-full sm:w-[90%] xl:w-[300px] h-[32px] xl:h-[40px]'>
                                        <div className='w-[30px] xl:w-[38px] h-[30px] xl:h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins text-[12px] xl:text-[16px] pt-[8px]'>Demo/Tutorial Videos</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-full sm:w-[90%] xl:w-[300px] h-[32px] xl:h-[40px]'>
                                        <div className='w-[30px] xl:w-[38px] h-[30px] xl:h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins text-[12px] xl:text-[16px] pt-[8px]'>Training Videos</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-full sm:w-[90%] xl:w-[300px] h-[32px] xl:h-[40px]'>
                                        <div className='w-[30px] xl:w-[38px] h-[30px] xl:h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins text-[12px] xl:text-[16px] pt-[8px]'>Animated commercial Videos</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-full sm:w-[90%] xl:w-[300px] h-[32px] xl:h-[40px]'>
                                        <div className='w-[30px] xl:w-[38px] h-[30px] xl:h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins text-[12px] xl:text-[16px] pt-[8px]'>Promotional Videos</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-full sm:w-[90%] xl:w-[300px] h-[32px] xl:h-[40px]'>
                                        <div className='w-[30px] xl:w-[38px] h-[30px] xl:h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins text-[12px] xl:text-[16px] pt-[8px]'> Marketing Videos</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-full sm:w-[90%] xl:w-[300px] h-[32px] xl:h-[40px]'>
                                        <div className='w-[30px] xl:w-[38px] h-[30px] xl:h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild' />
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins text-[12px] xl:text-[16px] pt-[8px]'>Product Explainer Videos</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex items-start gap-4 md:gap-10 mt-6">
                                <div className='w-[80%] h-auto'>
                                    <Image src={BannerLogos} alt='banner-logos' className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                            <form className='bg-[#003465] relative border-[3.5px] rounded-xl border-white w-full mx-auto'>
                                <div className=' w-[70%] top-0 mx-auto '>
                                    <Image src={Discount} />
                                </div>
                                <h3 className='text-white text-[20px] md:text-[22px] leading-[30px] poppins font-[700] text-center pt-[20px] pb-[10px] px-[20px]'>Share Your <span className='text-[#f6c501] '> Animation Idea </span>
                                </h3>
                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] text-[16px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-40%] z-50">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name='email' placeholder='Enter Email' className='mt-[16px] py-[13px] px-[8px] text-[16px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" name='phone' minLength="10"
                                            maxLength="13"
                                            pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[16px] py-[13px] px-[8px] text-[16px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <textarea name='message' placeholder='Message' className='mt-[16px] py-[13px] px-[8px] text-[16px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black resize-none rounded-md' onChange={handleDataChange}></textarea>

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

