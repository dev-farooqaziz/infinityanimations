"use client"
import React from 'react'
import Axios from "axios";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { useEffect, useState } from 'react'
// Images 
import Teliphone from "media/game-lp/number.png"
import Email from "media/game-lp/email.png"
import Location from "media/game-lp/location.png"
import Payment from "media/healthcare/payment.png"
import BtnBg2 from "media/game-lp/formbtn.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaVimeo, FaYoutube } from 'react-icons/fa'


const Contact = () => {
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Submit');
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
            <section className='py-[50px] lg:py-[90px] bg-[#1C1C1C]'>
                <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                    <div className="grid grid-cols-12 items-center gap-x-6 5xl:gap-x-0 gap-y-8">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="txt">
                                <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] leading-[50px] sm:leading-[50px] lg:leading-[60px] font-semibold text-white poppins mb-3'>Let’s Create Your Next
                                    Hit Game Together</h2>
                                <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins mb-7 lg:mb-10 lg:w-11/12 xl:pr-5'>Our mobile games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals.</p>
                                <div className="details">
                                    <Link href="javascript:;" className="flex items-center gap-4 mb-4 lg:mb-7">
                                        <Image src={Location} alt='Location' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>Office abc street, London</span>
                                    </Link>
                                    <Link href="javascript:;" className="flex items-center gap-4 mb-4 lg:mb-7">
                                        <Image src={Location} alt='Location' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>Office abc street, Canada</span>
                                    </Link>
                                    <Link href="javascript:;" className="flex items-center gap-4 mb-4 lg:mb-7">
                                        <Image src={Location} alt='Location' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>Office abc street, New York</span>
                                    </Link>
                                    <Link href="tel:;" className="flex items-center gap-4  mb-4 lg:mb-8">
                                        <Image src={Teliphone} alt='Number' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>012-345-6789</span>
                                    </Link>
                                    <Link href="mailto:info@xyz.com" className="flex items-center gap-4  mb-4 lg:mb-8">
                                        <Image src={Email} alt='Email' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>info@xyz.com</span>
                                    </Link>
                                </div>
                                <div>
                                    <Image src={Payment} alt='Payment-Methods' className='w-8/12 sm:w-5/12 lg:w-6/12 mt-5 lg:mt-8 object-contain' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="form bg-[#FB1E30] py-6 lg:py-10 px-5 xl:px-7 xl:w-11/12 ml-auto">
                                <div className="txt text-center">
                                    <h3 className='text-[30px] leading-[45px] font-semibold poppins mb-2 lg:mb-3'>Request A Free Quote</h3>
                                    <p className='text-[14px] leading-[21px] font-normal poppins mb-4 lg:mb-10'>Our game art team crafts unique and immersive visuals, tailored to elevate your game's world and captivate players.</p>
                                </div>
                                <div className="form">
                                    <form>
                                        <div className="flex flex-col md:flex-row items-center gap-x-4">
                                            <div className="name w-full mb-4">
                                                <input type="text" placeholder='Name *' name="name" className='text-[16px] leading-[33px] font-normal poppins 3 placeholder:text-black placeholder:text-[15px] px-4 h-[50px] w-full' onChange={handleDataChange} required />
                                                {errors.name && (
                                                    <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                                        {errors.name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="email w-full mb-4">
                                                <input type="text" placeholder='Email *' name="email" className='text-[16px] leading-[33px] font-normal poppins text-black placeholder:text-black placeholder:text-[15px] px-4 h-[50px] w-full' onChange={handleDataChange} required />
                                                {errors.email && (
                                                    <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                                        {errors.email}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="phone mb-4">
                                            <input type="text" name="phone" placeholder='Phone Number *' className='text-[16px] leading-[33px] font-normal poppins text-black placeholder:text-black placeholder:text-[15px] px-4 h-[50px] w-full' onChange={handleDataChange} required />
                                            {errors.phone && (
                                                <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                                    {errors.phone}
                                                </span>
                                            )}
                                        </div>
                                        <div className="message mb-4">
                                            <textarea name="message" placeholder='Message' className='text-[16px] leading-[33px] font-normal poppins text-black placeholder:text-black placeholder:text-[15px] px-4 h-[155px] w-full pt-2' onChange={handleDataChange}></textarea>
                                        </div>
                                        <div className="btn">
                                            <button className=' text-white text-[16px] font-normal poppins w-full h-[50px] flex items-center justify-center relative z-10' onClick={handleFormSubmit} disabled={isDisabled}>
                                                <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-fill object-center brightness-100 invert-[1]' />
                                                {formStatus}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* // ========================= CopyRight Start ======================= // */}
            <section className='py-2'>
                <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div>
                            <p className='text-[15px] font-normal leading-[22px] md:leading-[33px] poppins text-white text-center md:text-left'>© Infinity Animations 2024. - All Rights Reserved By Dreamweave Media Inc</p>
                        </div>
                        <div className="flex items-center gap-4 lg:mr-[120px] xl:mr-[80px]">
                            <Link href="javascript:;" className='text-[15px] font-normal leading-[33px] poppins text-white'>
                                Terms of Services
                            </Link>
                            <Link href="javascript:;" className='text-[15px] font-normal leading-[33px] poppins text-white'>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* // ========================= CopyRight End ======================= // */}
        </>
    )
}

export default Contact
