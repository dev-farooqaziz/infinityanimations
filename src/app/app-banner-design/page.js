"use client"
import React from "react";
import PortfolioInner from "@/components/PortfolioInner/PortfolioInner";

// Images
import Portfolio1 from "media/new-portfolio/app-banner-design/portfolio-1.png"
import Portfolio2 from "media/new-portfolio/app-banner-design/portfolio-2.jpg"
import Portfolio3 from "media/new-portfolio/app-banner-design/portfolio-3.jpg"
import Portfolio4 from "media/new-portfolio/app-banner-design/portfolio-4.png"
import Portfolio5 from "media/new-portfolio/app-banner-design/portfolio-5.jpg"
import Portfolio6 from "media/new-portfolio/app-banner-design/portfolio-6.jpg"
import Portfolio7 from "media/new-portfolio/app-banner-design/portfolio-7.jpg"
import Portfolio8 from "media/new-portfolio/app-banner-design/portfolio-8.jpg"
import Portfolio9 from "media/new-portfolio/app-banner-design/portfolio-9.png" 

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
    ]

    const portfolio = {
        title: "App Banner design",
        portfolioContent: portfolioContent,
        gridThree: false,
    }
    return (
        <>
            <PortfolioInner content={portfolio} />
        </>
    )
}