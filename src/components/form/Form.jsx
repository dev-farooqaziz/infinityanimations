"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import { usePathname } from "next/navigation"
//========== Import Images
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
//==========
const socialLinks = [
    {
        icon: facebook,
        link: "https://www.facebook.com/"
    },
    {
        icon: twitter,
        link: "https://twitter.com/"
    },
    {
        icon: instagram,
        link: "https://www.instagram.com/"
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/"
    },
]
//==========
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
            <form className="space-y-2 sm:space-y-4 md:space-y-8">
                <div className="relative">
                    <label htmlFor="subject" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Full Name*</label>
                    <input type="text" id="name" name="name" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Full Name" onChange={handleDataChange} />
                    {errors.name && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-35%]">
                            {errors.name}
                        </span>
                    )}
                </div>
                <div className="relative">
                    <label htmlFor="subject" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Phone*</label>
                    <input type="tel" id="phone" name="phone" minLength="10" maxLength="13" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="(000) 000-0000" onChange={handleDataChange} />
                    {errors.phone && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-35%]">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <div className="relative">
                    <label htmlFor="email" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Email Address*</label>
                    <input type="email" id="email" name="email" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Email" onChange={handleDataChange} />
                    {errors.email && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-35%]">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Details*</label>
                    <textarea id="message" name="message" rows="2" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent resize-none" placeholder="Type Full Details" onChange={handleDataChange} />
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between pt-5">
                    <button type="submit" className="py-3 px-16 font-sans tracking-wide text-sm font-medium text-center text-white rounded-lg bg-prime w-full sm:w-fit hover:bg-primary-800 focus:outline-none" onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                    <ul className="flex items-center justify-center sm:justify-start gap-4">
                        {
                            socialLinks.map((e, i) => {
                                return (
                                    <li key={i} className="bg-second hover:bg-[#22212D] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                        <Link target="_blank" href={e.link}>
                                            <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </form>
        </>
    )
}

export default Form
