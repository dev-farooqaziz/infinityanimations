import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header/Header"));
const Banner = dynamic(() => import("./Banner/Banner"));
const Clients = dynamic(() => import("./Clients/Clients"));
const TwoDArt = dynamic(() => import("./2dArt/2dArt"));
const ThreeDArt = dynamic(() => import("./3dArt/3dArt"));
const VFX = dynamic(() => import("./VFX/VFX"));
const Portfolio = dynamic(() => import("./Portfolio/Portfolio"));
const SmallBanner = dynamic(() => import("./SmallBanner/SmallBanner"));
const WhyChoose = dynamic(() => import("./WhyChoose/WhyChoose"));
const OurProcess = dynamic(() => import("./OurProcess/OurProcess"));
const Discuss = dynamic(() => import("./Discusss/Discusss"));
const TechStack = dynamic(() => import("./TechStack/TechStack"));
const Platform = dynamic(() => import("./Platform/Platform"));
const Testimonials = dynamic(() => import("./Testimonials/Testimonials"));
const Contact = dynamic(() => import("./Contact/Contact"));

export {
    Header,
    Banner,
    Clients,
    TwoDArt,
    ThreeDArt,
    VFX,
    Portfolio,
    SmallBanner,
    WhyChoose,
    OurProcess,
    Discuss,
    TechStack,
    Platform,
    Testimonials,
    Contact,
}