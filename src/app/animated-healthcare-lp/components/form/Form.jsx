"use client"
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { usePathname } from "next/navigation"

const Form = ({ bg }) => {
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
            <form>
                <div className="flex flex-col lg:flex-row items-center lg:gap-6">
                    <div className="name relative mb-6 w-full">
                        <input type="text" name="name" placeholder='Name *' className={`text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block h-[50px] w-full ${bg} outline-none`} onChange={handleDataChange} required />
                        {errors.name && (
                            <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                {errors.name}
                            </span>
                        )}
                    </div>
                    <div className="email relative mb-6 w-full">
                        <input type="email" name="email" placeholder='Email *' className={`text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block h-[50px] w-full ${bg} outline-none`} onChange={handleDataChange} required />
                        {errors.email && (
                            <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                                {errors.email}
                            </span>
                        )}
                    </div>
                </div>
                <div className="phone relative mb-6">
                    <input type="phone" name="phone" placeholder='Phone Number *' minLength={7} maxLength={15} className={`text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block h-[50px] w-full ${bg} outline-none`} onChange={handleDataChange} required />
                    {errors.phone && (
                        <span className="text-[11px] block p-2 poppins font-bold text-primary-100 absolute left-0 bottom-[-30%] z-50">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <div className="message relative mb-6">
                    <textarea name='message' placeholder='Message' rows={5} className={`pt-4 text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block w-full resize-none ${bg} outline-none rounded-none`} onChange={handleDataChange}></textarea>
                </div>
                <div className="btn text-center">
                    <button type='submit' className='py-[10px] w-5/12 border-0 text-white text-[16px] leading-[25px] capitalize font-medium bg-[#FF2D4B] poppins rounded-[5px]' onClick={handleFormSubmit} disabled={isDisabled}>
                        {formStatus}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form

