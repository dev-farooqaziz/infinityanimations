import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import AwardWinning from './components/AwardWinning/AwardWinning'
import Portfolio from './components/Portfolio/portfolio'
import Services from './components/Services/Services'
import Packages from './components/Packages/Packages'
import WorldClass from './components/WorldClass/WorldClass'
import SmallBanner from './components/SmallBanner/SmallBanner'
import ExplainerVideo from './components/explainer-video/ExplainerVideo'
import AnimationProcess from './components/AnimationProcess/AnimationProcess'
import WhyChoose from './components/whyChoose/WhyChoose'
import ClientReads from './components/ClientReads/ClientReads'
import Brand from './components/BrandShine/Brand'
import Faqs from './components/faqs/Faqs'
import Footer from './components/Footer/Footer'
// Images
import SaleShine from "media/explainer-videos/salesimage.png"


const page = () => {
    // ===== sales
    const sales = {
        title: "Ignite sales with a single click-craft compelling videos instantly!",
        subtitle: "",
        desc: "Animated videos are a great way to fascinate your viewers with rich, intriguing, and playful scenes. It is evaluated according to a study that animations videos can boost your company",
        btnTxt: "Let's Begin Your Animated Journey Together!",
        branImage: SaleShine,
    }
    //===== FAQS =====//
    const accordionData = [
        {
            question: 'How Many People Will Work On My Video?',
            list: [
                "Understanding your business and marketing objectives",
                "Story and script development",
                "Storyboard",
                "Voiceover",
                "Illustration",
                "Animation",
                "Delivery/publication",
            ]
        },
        {
            question: 'How Many People Will Work On My Video?',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
        },
        {
            question: 'Do I Get Full Copyrights To The Video?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        },
        {
            question: 'Do You Produce All Types Of Animation Videos And Provide Video Concept Too, If I Have No Concept Idea?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        }
    ];
    const faqs = {
        accordionData: accordionData,
    }
    return (
        <>
            <Header />
            <Banner />
            <WorldClass />
            <Services />
            <SmallBanner />
            <Packages />
            <Portfolio />
            <AwardWinning />
            <ExplainerVideo />
            <Brand content={sales} />
            <AnimationProcess />
            <WhyChoose /> 
            <ClientReads />
            <Faqs content={faqs} />
            <Footer />
        </>
    )
}

export default page
