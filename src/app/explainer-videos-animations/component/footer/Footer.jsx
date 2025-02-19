"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Axios from "axios";
import { usePathname } from 'next/navigation';
import styles from '@/app/explainer-videos-animations/component/footer/footer.module.css';
// Import Components
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
// ==== Images 
import payment from "media/banner/payment.png"
import top from "media/banner/top.png"
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

const Video = () => {
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
            <section className={`newcon ${styles.touch}`}>
                <div className={`container mx-auto ${styles.pointer} `}>
                    <div className={`md:grid md:grid-cols-2 items-center ${styles.world}`}>
                        <div>
                            <h3 className={styles.touchnow}>Get In <span className="colorred2">Touch</span> Now!</h3>
                            <p className={styles.wordsmosth}>Its High Time to Showcase
                                Your
                                Store to the World</p>
                            <form>
                                <div className={styles.form2} >
                                    <div className="relative w-full">
                                        <input type="text" minLength="4" name="name" className="form-control" placeholder="Enter Your Name" onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-56%]">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative w-full">
                                        <input type="email" name="email" className="form-control" placeholder="Enter Your Email" onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-56%]">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={`relative ${styles.form2}`}>
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" className="form-control" placeholder="Enter Your Number" onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-56%]">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <textarea name="message" className={styles.megg} id="exampleFormControlTextarea1" placeholder="Type Message" rows="5"></textarea>
                                    <button type="submit" className={styles.showcas} disabled={isDisabled} onClick={handleFormSubmit}>{formStatus}</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.newtab}>
                            <ul className={styles.newfight}>
                                <li className="fontmontserratregular text-white pb-3"><IoCall /><a className="text-white" href="tel:012-345-6789">  012-345-6789</a></li>
                                <li className="fontmontserratregular text-white pb-3"><MdEmail /><a className="text-white" href="mailto:info@xyz.com">  info@xyz.com</a></li>
                                <li className="fontmontserratregular text-white pb-3"><FaGlobe /><a className="text-white" href="javascript:;/">  infinityanimations</a></li>
                                <li><Image src={payment} className=" " alt="" /></li>
                                <ul className="flex items-center gap-4 mt-4 md:mt-6">
                                    {
                                        socialLinks.map((e, i) => {
                                            return (
                                                <li key={i} className="bg-transparent border border-[#fc0] w-[40px] h-[40px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                                    <Link target="_blank" href={e.link}>
                                                        <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>

                <a className={styles.animatio} href="#header">
                    <Image src={top} alt="" />
                </a>
            </section>
            <section className={styles.longton}>
                <div className={`container mx-auto `}>
                    <div className={`md:grid md:grid-cols-1 items-center ${styles.world1}`}>
                        <p>© 2024 - Dreamweave Media Inc</p>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Video
