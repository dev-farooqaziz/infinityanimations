"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Axios from "axios";
import { usePathname } from "next/navigation"
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
import { HiMapPin } from 'react-icons/hi2';
// ==== Images 
import Payment from "media/video-explainer/payment-img.png"
import UpArrow from "media/video-explainer/up-arrow.png"
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import youtube from "media/icons/youtube.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
import vimeo from "media/icons/vemio.png";

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
    {
        icon: youtube,
        link: "https://www.youtube.com/"
    },
    {
        icon: vimeo,
        link: "https://www.vimeo.com/"
    },
]

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
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/footer-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>
                                Get A Free Consultation with An Experienced Animation Expert
                            </h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[60px]'>Book a meeting with a member of our team to learn more and get a quote today!</p>
                            <div className="form">
                                <form>
                                    <div className="flex-wrap flex items-center">
                                        <div className="name relative w-full">
                                            <User className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="text" name="name" placeholder='Enter your name' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
                                            {errors.name && (
                                                <span className="text-[12px] block p-2 font-sans font-medium text-black absolute left-0 bottom-[-16%]">
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="email relative w-full">
                                            <EnvelopeIcon className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="email" name="email" placeholder='Enter Email' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
                                            {errors.email && (
                                                <span className="text-[12px] block p-2 font-sans font-medium text-black absolute left-0 bottom-[-16%]">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="phone relative">
                                        <Phone className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-sans font-medium text-black absolute left-0 bottom-[-16%]">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message relative">
                                        <ChatAlt2 className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <textarea name='message' placeholder='Message' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500] resize-none' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[10px] px-[30px] border-0 text-white text-[16px] uppercase font-[600] bg-[#231f20] poppins' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className=" lg:col-span-2"></div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="address_detail">
                                <ul>
                                    <li className='py-[10px]'>
                                        <a href="tel:012-345-6789" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <Phone className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> 012-345-6789
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="mailto:info@xyz.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <EnvelopeIcon className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> info@xyz.com
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="javascript:;" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <Globe className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> infinityanimations
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="javascript:;" target='_blank' className='text-[15px] md:text-[20px] text-white montserrat flex gap-2'>
                                            <HiMapPin className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[32px] h-[25px]' /> Office abc street, New York
                                        </a>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-5/12 lg:w-full my-3 object-contain' />
                                <div>
                                    <ul className="flex items-center gap-4 mt-4 md:mt-6">
                                        {
                                            socialLinks.map((e, i) => {
                                                return (
                                                    <li key={i} className="bg-transparent border border-[#fc0] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                                        <Link target="_blank" href={e.link}>
                                                            <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright py-[20px]">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
                    <p className='text-[14px] pb-[12px] text-[#333] montserrat text-center'>© 2024 <span className='text-[14px] text-[#333] montserrat text-center inline'> - All Rights Reserved By</span> Dreamweave Media Inc</p>
                    <div className="top-icon absolute right-0 top-[-40px]">
                        <Link href="#" className='bg-[#18d689] w-[80px] h-[80px] text-center text-[#333] font-[500] uppercase rounded-[60%] align-middle border-[5px] border-white absolute right-0 lg:flex flex-col justify-center items-center md:block hidden'>
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
