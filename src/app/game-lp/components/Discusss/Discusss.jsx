"use client"
import React from 'react'
import Axios from "axios";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { useEffect, useState } from 'react'
// Images
import ProcessImage from "media/game-lp/processImage.png"
import ProcessBg from "media/game-lp/processbg.png"
import BtnBg2 from "media/game-lp/formbtn.png"
const Discusss = () => {
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
        requirments: ""
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
        if (!data.requirments.trim()) {
            errors.requirments = "requirments is required";
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
                            "name": "requirments",
                            "value": data.requirments
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
        <section className='py-[50px] lg:py-[90px]'>
            <div className="max-w-7xl px-4 lg:px-0 md:mx-8 xl:mx-auto relative group">
                <Image src={ProcessBg} alt='Background Image' fill={true} className='object-cover object-center z-[-1]' />
                <div className="grid grid-cols-12 items-center">
                    <div className="lg:col-span-6 lg:block hidden">
                        <div className='absolute top-[-60px] lg:top-[-95px] left-0 group-hover:top-[-50px] lg:group-hover:top-[-85px] group-hover:duration-1000 ease-in-out duration-1000'>
                            <Image src={ProcessImage} alt='Process' className='w-8/12 lg:w-9/12 xl:w-10/12 lg:mx-auto' />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className='pt-[40px] lg:pt-[60px] pb-[40px] sm:pr-[20px] lg:pr-[60px]'>
                            <div className="txt">
                                <h2 className='text-[25px] sm:text-[30px] lg:text-[40px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-semibold poppins mb-2 sm:mb-4 sm:text-left text-center'>Reach Out and Let’s Discuss
                                    Your Next Project</h2>
                                <p className='text-[17px] leading-[33px] font-normal poppins mb-5 sm:mb-3 lg:mb-7 xl:mb-10 sm:text-left text-center'>We're excited to collaborate! Share your project details, and let's create something amazing together.</p>
                            </div>
                            <div className="forms">
                                <form>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-8 lg:gap-y-12 xl:gap-y-16">
                                        <div className="relative">
                                            <input type="text" name="name" placeholder='Name *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' onChange={handleDataChange} required />
                                            {errors.name && (
                                                <span className="text-[11px] font-normal block p-2 poppins text-white absolute left-0 bottom-[-70%] z-50">
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input type="text" name="email" placeholder='Email *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' onChange={handleDataChange} required />
                                            {errors.email && (
                                                <span className="text-[11px] font-normal block p-2 poppins text-white absolute left-0 bottom-[-70%] z-50">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input type="text" name="phone" placeholder='Phone Number *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' onChange={handleDataChange} required />
                                            {errors.phone && (
                                                <span className="text-[11px] font-normal block p-2 poppins text-white absolute left-0 bottom-[-70%] z-50">
                                                    {errors.phone}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input type="text" name="requirments" placeholder='Your Requirments *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' onChange={handleDataChange} required />
                                            {errors.requirments && (
                                                <span className="text-[11px] font-normal block p-2 poppins text-white absolute left-0 bottom-[-70%] z-50">
                                                    {errors.requirments}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="btn mt-6 lg:mt-8">
                                            <button className=' text-black text-[16px] font-normal poppins w-full h-[50px] flex items-center justify-center relative z-10' onClick={handleFormSubmit} disabled={isDisabled}>
                                                <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-fill object-center' />
                                                {formStatus}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discusss
