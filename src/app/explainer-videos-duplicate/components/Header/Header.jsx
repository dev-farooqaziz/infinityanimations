"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Import Components
import { FaPhoneAlt } from "react-icons/fa";
import {
    Navbar,
    Collapse,
    Typography,
    List,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
// Import Images
// import logo from "media/images/black-logo.gif";
import logo from "media/images/logo.gif";
import usePopup from "@/app/configs/store/Popup";

const megaMenuItems = [
    {
        title: "2d Animation",
        icon: SquaresPlusIcon,
        href: "/2d-animation",
    },
    {
        title: "3d Animation",
        icon: UserGroupIcon,
        href: "/3d-animation",
    },
    {
        title: "Promotional Videos",
        icon: RectangleGroupIcon,
        href: "/promotional-videos",
    },
    {
        title: "Explainer Videos",
        icon: TagIcon,
        href: "/explainer-videos",
    },
    {
        title: "Whiteboard Animation",
        icon: UserGroupIcon,
        href: "/whiteboard",
    },
    {
        title: "Infographics Design",
        icon: PhoneIcon,
        href: "#href",
    },
    {
        title: "Logo Animation",
        icon: NewspaperIcon,
        href: "#href",
    },
];

function NavList() {
    return (
        <List className="mt-4 lg:mt-0 mb-0 pt-4 p-5 pb-4 lg:pb-0 lg:flex-row lg:p-1 gap-3 bg-white lg:bg-transparent border-b-2 border-[prime/100] lg:border-0">
            <Link href="#banner">
                <span className="text-white lg:text-white poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-700 duration-700 ease-in-out lg:p-3">
                    Home
                </span>
            </Link>
            <Link href="#services">
                <span className="text-white lg:text-white poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-700 duration-700 ease-in-out lg:p-3">
                    Services
                </span>
            </Link>
            <Link href="#portfolio">
                <span className="text-white lg:text-white poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-700 duration-700 ease-in-out lg:p-3">
                    Portfolio
                </span>
            </Link>
            <Link href="#contact">
                <span className="text-white lg:text-white poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-700 duration-700 ease-in-out lg:p-3">
                    Contact Us
                </span>
            </Link>
        </List>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    // PopUp Code
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }

    return (
        <header className={`w-full pt-5 relative z-10`}>
            <div className="px-5 lg:max-w-7xl mx-auto">
                <Navbar className="max-w-none backdrop-blur-none shadow-none px-0 py-2 rounded-none bg-transparent border-none">
                    <div className="flex items-center justify-between relative">
                        <Link href="#" className="logo lg:w-[25%]">
                            <Image src={logo} alt='logo' width={150} />
                        </Link>
                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                        <div className="lg:flex hidden items-center gap-x-7">
                            <div className="">
                                <Link
                                    href="tel:012-345-6789"
                                    className="flex items-center gap-x-3 text-primary-100 poppins font-semibold text-[15px]"
                                >
                                    <FaPhoneAlt className="text-[15px]" />
                                    012-345-6789
                                </Link>
                            </div>
                            <div className="lg:block hidden">
                                <button
                                    onClick={popupHandle}
                                    className="text-[13px] sm:text-[15px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[135px] h-[42px] poppins flex items-center justify-center"
                                >
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                        <div className="xl:hidden flex items-center gap-x-3">
                            <div className="">
                                <Link
                                    href="tel:;"
                                    className="flex items-center gap-x-3 text-primary-100 poppins font-semibold text-[13px] sm:text-[15px]"
                                >
                                    <FaPhoneAlt className="text-[15px] sm:block hidden" />
                                    123 456 7890
                                </Link>
                            </div>
                            <button
                                onClick={() => setOpenNav(!openNav)}
                                className="block lg:hidden"
                            >
                                {openNav ? (
                                    <XMarkIcon
                                        className="h-[40px] w-[40px] text-black"
                                        strokeWidth={2}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="h-[40px] w-[40px] text-black"
                                        strokeWidth={2}
                                    />
                                )}
                            </button>
                        </div>

                    </div>
                    {openNav && (
                        <Collapse open={openNav} className="block lg:hidden ">
                            <NavList />
                        </Collapse>
                    )}
                </Navbar>
            </div>
        </header>
    );
};
export default Header;