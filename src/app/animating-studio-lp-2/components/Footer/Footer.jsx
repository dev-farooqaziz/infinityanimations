"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Axios from "axios";
import { usePathname } from "next/navigation"
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
// ==== Images 
import Payment from "media/video-explainer2/payment-img.png"
import UpArrow from "media/video-explainer2/up-arrow.png"
import FooterBg from "media/infinity-studio-lp-2/footer-bg.png"

const Contact = () => {
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

    return (
        <>
            <section className='py-[50px] lg:py-[90px] relative'>
                <Image src={FooterBg} alt='Infinity Animations' fill={true} className='z-[1] object-cover object-center' />
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto  relative z-10">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="address_detail ">
                                <h2 className='text-white poppins text-[25px] md:text-[30px] xl:text-[55px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] xl:leading-[50px] text-left mb-2 sm:mb-5'>
                                    Get in <span className='text-[#F5090B]'>Touch</span> Now!
                                </h2>
                                <p className='text-white text-[11px] sm:text-[13px] xl:text-[15px] leading-[24px] xl:leading-[30px] poppins mb-2 sm:mb-5 lg:mb-8 w-11/12 pr-3'>
                                    At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your
                                </p>
                                <ul>
                                    <li className='py-[12px]'>
                                        <a href="tel:012-345-6789" className='text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Phone className='bg-[#fff] text-[#000] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> 012-345-6789
                                        </a>
                                    </li>
                                    <li className='py-[12px]'>
                                        <a href="mailto:info@xyz.com" className='text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <EnvelopeIcon className='bg-[#fff] text-[#000] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> info@xyz.com
                                        </a>
                                    </li>
                                    <li className='py-[12px]'>
                                        <a href="javascript:;" className='text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] text-white poppins flex items-center gap-4'>
                                            <Globe className='bg-[#fff] text-[#000] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> infinityanimations
                                        </a>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-8/12 sm:w-5/12 lg:w-8/12 mt-5 lg:mt-10 object-contain' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="form">
                                <form>
                                    <div className="flex flex-col lg:flex-row items-center lg:gap-4 ">
                                        <div className="name relative mb-5 w-full">
                                            <input type="text" name="name" placeholder='Enter your name' className='text-[14px] text-[#fff] px-5 font-normal placeholder:text-[#fff] placeholder:font-normal poppins block h-[85px] w-full bg-[#292929] rounded-[15px] border  border-[#888888]' onChange={handleDataChange} required />
                                            {errors.name && (
                                                <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="email relative mb-5 w-full">
                                            <input type="email" name="email" placeholder='Enter Your Email' className='text-[14px] text-[#fff] px-5 font-normal placeholder:text-[#fff] placeholder:font-normal poppins block h-[85px] w-full bg-[#292929] rounded-[15px] border  border-[#888888]' onChange={handleDataChange} required />
                                            {errors.email && (
                                                <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="phone relative mb-5">
                                        <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-[#fff] px-5 font-normal placeholder:text-[#fff] placeholder:font-normal poppins block h-[85px] w-full bg-[#292929] rounded-[15px] border  border-[#888888]' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message relative mb-5">
                                        <textarea name='message' placeholder='Type Message' rows={4} className='pt-4 text-[14px] text-[#fff] px-5 font-normal placeholder:text-[#fff] placeholder:font-normal poppins block h-[200px] w-full resize-none bg-[#292929] rounded-[15px] border  border-[#888888]' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[10px] px-[40px] border-0 text-white text-[16px] leading-[25px] capitalize font-semibold bg-[#F5090B] hover:bg-[#A70A0E] poppins rounded-[5px]' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright py-[20px] bg-[#292929] ">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
                    <p className='text-[14px] text-[#fff] px-5 font-normal poppins text-center'>Copyright © 2024,  <Link target="_blank" className="no-underline" href="javascript:;">Infinity Animations All Rights Reserved</Link></p>
                    <div className="sm:block hidden top-icon absolute right-0 top-[-60px]">
                        <Link href="#" className='bg-black w-[80px] h-[80px] text-center text-white uppercase rounded-[60%] align-middle border-[5px] border-[#FFCC00] absolute right-[10px] xl:right-0 md:flex flex-col justify-center items-center hidden z-10'>
                            <Image src={UpArrow} alt='upArrow' className='mx-auto' />
                            <p className='text-[14px] text-center poppins'>Top</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact

