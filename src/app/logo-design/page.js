"use client"
import React from "react";
import PortfolioInner from "@/components/PortfolioInner/PortfolioInner";

// Images
import Portfolio1 from "media/new-portfolio/logo-design/portfolio-1.png"
import Portfolio2 from "media/new-portfolio/logo-design/portfolio-2.jpg"
import Portfolio3 from "media/new-portfolio/logo-design/portfolio-3.jpg"
import Portfolio4 from "media/new-portfolio/logo-design/portfolio-4.jpg"
import Portfolio5 from "media/new-portfolio/logo-design/portfolio-5.jpg"
import Portfolio6 from "media/new-portfolio/logo-design/portfolio-6.jpg"
import Portfolio7 from "media/new-portfolio/logo-design/portfolio-7.jpg"
import Portfolio8 from "media/new-portfolio/logo-design/portfolio-8.jpg"
import Portfolio9 from "media/new-portfolio/logo-design/portfolio-9.jpg"
import Portfolio10 from "media/new-portfolio/logo-design/portfolio-10.jpg"
import Portfolio11 from "media/new-portfolio/logo-design/portfolio-11.jpg"
import Portfolio12 from "media/new-portfolio/logo-design/portfolio-12.jpg"
import Portfolio13 from "media/new-portfolio/logo-design/portfolio-13.png"
import Portfolio14 from "media/new-portfolio/logo-design/portfolio-14.jpg"
import Portfolio15 from "media/new-portfolio/logo-design/portfolio-15.jpg"
import Portfolio16 from "media/new-portfolio/logo-design/portfolio-16.jpg"
import Portfolio17 from "media/new-portfolio/logo-design/portfolio-17.jpg"
import Portfolio18 from "media/new-portfolio/logo-design/portfolio-18.jpg"
import Portfolio19 from "media/new-portfolio/logo-design/portfolio-19.jpg"
import Portfolio20 from "media/new-portfolio/logo-design/portfolio-20.jpg"
import Portfolio21 from "media/new-portfolio/logo-design/portfolio-21.jpg"
import Portfolio22 from "media/new-portfolio/logo-design/portfolio-22.jpg"
import Portfolio23 from "media/new-portfolio/logo-design/portfolio-23.jpg"
import Portfolio24 from "media/new-portfolio/logo-design/portfolio-24.jpg"
import Portfolio25 from "media/new-portfolio/logo-design/portfolio-25.jpg"
import Portfolio26 from "media/new-portfolio/logo-design/portfolio-26.jpg"
import Portfolio27 from "media/new-portfolio/logo-design/portfolio-27.png"
import Portfolio28 from "media/new-portfolio/logo-design/portfolio-28.png"

export default function Page() {
    const portfolioContent = [
        {
            image: Portfolio1
        },
        {
            image: Portfolio2
        },
        {
            image: Portfolio3
        },
        {
            image: Portfolio4
        },
        {
            image: Portfolio5
        },
        {
            image: Portfolio6
        },
        {
            image: Portfolio7
        },
        {
            image: Portfolio8
        },
        {
            image: Portfolio9
        },
        {
            image: Portfolio10
        },
        {
            image: Portfolio11
        },
        {
            image: Portfolio12
        },
        {
            image: Portfolio13
        },
        {
            image: Portfolio14
        },
        {
            image: Portfolio15
        },
        {
            image: Portfolio16
        },
        {
            image: Portfolio17
        },
        {
            image: Portfolio18
        },
        {
            image: Portfolio19
        },
        {
            image: Portfolio20
        },
        {
            image: Portfolio21
        },
        {
            image: Portfolio22
        },
        {
            image: Portfolio23
        },
        {
            image: Portfolio24
        },
        {
            image: Portfolio25
        },
        {
            image: Portfolio26
        },
        {
            image: Portfolio27
        },
        {
            image: Portfolio28
        },
    ]

    const portfolio = {
        title: "Logo Design",
        portfolioContent: portfolioContent,
        gridThree: false,
    }
    return (
        <>
            <PortfolioInner content={portfolio} />
        </>
    )
}