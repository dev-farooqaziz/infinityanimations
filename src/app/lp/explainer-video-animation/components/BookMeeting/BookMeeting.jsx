"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
// Images
import MaketBg from "media/infinity-studio-lp-new/marketing-bg.png"
import MerketMen from "media/infinity-studio-lp-new/market-men.png"

const BookMeeting = () => {
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
        <section className='relative py-[50px] lg:py-[90px]'>
            <Image src={MaketBg} alt='Infinity Animation' fill={true} className='z-[-1] object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-7 sm:mb-12 lg:mb-20 lg:w-8/12 mx-auto'>Get a special Offer On <span className='text-[#F5090B]'>Video Animation</span> and So Much More!</h2>
                    </div>
                    <div className="hidden lg:block lg:col-span-6">
                        <Image src={MerketMen} alt='Infinity Animation' className='w-full h-full lg:w-10/12 object-contain' />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div>
                            <h3 className='montserrat text-[30px] md:text-[40px] font-bold leading-[40px] md:leading-[33px] mb-5'>Get A Quote</h3>
                            <form>
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                    <div className="relative mb-1 name">
                                        <input type="text" name='name' placeholder='Enter Your Name' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[45px] px-4 border-0' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-55%] z-50">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative mb-1 email">
                                        <input type="email" name='email' placeholder='Enter Your Number' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[45px] px-4 border-0' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-55%] z-50">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="relative mb-4 number">
                                    <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" placeholder='Enter Your Number' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[45px] px-4 border-0' onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-55%] z-50">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="message">
                                    <textarea name="message" type="message" placeholder='Type Message' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[110px] px-4 pt-4 border-0' onChange={handleDataChange}></textarea>
                                </div>
                                <button type='submit' className='text-white text-[16px] font-semibold poppins leading-[22px] bg-[#FF0000] rounded-[5px] px-9 py-3 w-max mt-3' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookMeeting
