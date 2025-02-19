import React from "react";
import { Banner, Clients, Contact, Discuss, Header, OurProcess, Platform, Portfolio, SmallBanner, TechStack, Testimonials, ThreeDArt, TwoDArt, VFX, WhyChoose } from "./components";

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <Clients />
            <TwoDArt />
            <ThreeDArt />
            <VFX />
            <Portfolio />
            <SmallBanner />
            <WhyChoose />
            <OurProcess />
            <Discuss />
            <TechStack />
            <Platform />
            <Testimonials />
            <Contact />
        </>
    )
}