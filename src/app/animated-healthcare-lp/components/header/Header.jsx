//========== Imports
"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import CTA from "../cta/CTA";
//========== Import Icons
import { FaBars, FaTimes } from "react-icons/fa";
//========== Import Images
import logo from "media/images/black-logo.gif";
import logo2 from "media/images/logo.gif";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // ========= Header Fixed
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // ========= Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={`w-full py-4 z-[999] rounded-none bg-transparent fixed top-0 left-0 ${isFixed ? 'bg-white shadow-md duration-1000 ease-in-out' : 'duration-1000 ease-in-out shadow-md lg:shadow-none'}`}>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="javascript:;" className="h-full flex items-center cursor-pointer w-[120px] lg:w-[140px]">
                        <Image src={logo} alt="Infinity Animation" />
                    </Link>
                    <div className={`w-[80%] md:w-[50%] lg:w-auto h-[100vh] lg:h-full flex items-center fixed top-0 z-50 lg:static bg-[#484848] lg:bg-transparent ${isMenuOpen ? 'left-0 duration-700 ease-in-out' : 'left-[-100%] duration-700 ease-in-out'}`} id="navbar-default">
                        <ul className="w-full h-full flex lg:items-center flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-12 rtl:space-x-reverse p-5 lg:p-0 relative">
                            <li className="lg:h-full block lg:hidden">
                                <Link href="javascript:;" className="h-full flex items-center cursor-pointer w-[150px]">
                                    <Image src={logo2} alt="Infinity Animation" />
                                </Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link href="#Home" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link href="#WhyUs" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>
                                    <span>Why Us</span>
                                </Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link href="#Services" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>
                                    <span>Video Animation</span>
                                </Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link href="#Portfolio" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>Portfolio</Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link href="#Pricing" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>Pricing</Link>
                            </li>
                            <li className="w-max block lg:hidden">
                                <CTA
                                    text="Contact Us"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    href="tel:012-345-6789"
                                    icon="/healthcare/icons/call.png"
                                    iconCss="flex items-center justify-center w-[20px] h-[20px]"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <CTA
                            text="Contact Us"
                            bg="bg-prime"
                            color={`text-white`}
                            href="tel:012-345-6789"
                            icon="/healthcare/icons/call.png"
                            iconCss="flex items-center justify-center w-[20px] h-[20px]"
                        />
                    </div>
                    <div className="block lg:hidden w-max9">
                        {isMenuOpen ? (
                            <FaTimes className="text-[30px] text-black cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <FaBars className="text-[30px] text-black cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
