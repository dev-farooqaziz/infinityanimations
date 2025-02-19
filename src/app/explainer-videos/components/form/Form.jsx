"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Axios from "axios";
import { usePathname } from "next/navigation"
// ===== Images 
import HandAnimation from "media/explainer-videos/hand-animation.gif"

const Form = () => {
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
            <section className={`pt-[20px] pb-[50px]`} id='portfolio'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="form bg-[#F5090B] rounded-xl px-4 md:px-6 py-4">
                        <h2 className='text-[18px] md:text-[24px] font-sans font-bold leading-[25px] md:leading-[60px] text-white'>🔥 Get Special Offer On Video Animation and So Much More! </h2>
                        <form className='pt-5'>
                            <div className="lg:flex flex-wrap items-center gap-3">
                                <div className="relative mb-2 name">
                                    <input type="text" name="name" placeholder='Name' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[370px] xl:w-[385px] focus:outline-none text-black mb-[15px] lg:mb-0' required onChange={handleDataChange} />
                                    {errors.name && (
                                        <span className="text-[12px] block p-2 font-sans font-semibold text-black absolute left-0 bottom-[-60%]">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="relative mb-2 phone-number">
                                    <input type="text" name="phone" placeholder='Phone Number' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[370px] xl:w-[385px] focus:outline-none text-black mb-[15px] lg:mb-0' required onChange={handleDataChange} />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-sans font-semibold text-black absolute left-0 bottom-[-60%]">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="relative mb-2 email">
                                    <input type="email" name="email" placeholder='Email' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[370px] xl:w-[385px] focus:outline-none text-black mb-[15px] lg:mb-0' required onChange={handleDataChange} />
                                    {errors.email && (
                                        <span className="text-[12px] block p-2 font-sans font-semibold text-black absolute left-0 bottom-[-60%]">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <div className="description">
                                    <textarea name="message" placeholder='Description' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] leading-[45px] text-center font-sans w-full lg:w-[750px] xl:w-[783px] focus:outline-none text-black mb-[15px] lg:mb-0 resize-none' onChange={handleDataChange}></textarea>
                                </div>
                                <button type="submit" className='w-full lg:w-[370px] xl:w-[385px] h-[45px] bg-gradient-to-r from-[#363636] to-[#000000] poppins rounded-[5px] font-semibold text-white relative' disabled={isDisabled} onClick={handleFormSubmit}>
                                    <Image src={HandAnimation} alt='Animating Studio' className='absolute top-[-104px] right-0 ml-auto lg:block hidden' />
                                    <span>{formStatus}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
