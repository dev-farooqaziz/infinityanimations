"use client"
import React from "react";
import PortfolioInner from "@/components/PortfolioInner/PortfolioInner";

// Images
import Portfolio1 from "media/new-portfolio/bussiness-cards/portfolio-1.jpg"
import Portfolio2 from "media/new-portfolio/bussiness-cards/portfolio-2.png"
import Portfolio3 from "media/new-portfolio/bussiness-cards/portfolio-3.png"
import Portfolio4 from "media/new-portfolio/bussiness-cards/portfolio-4.jpg"
import Portfolio5 from "media/new-portfolio/bussiness-cards/portfolio-5.jpg"
import Portfolio6 from "media/new-portfolio/bussiness-cards/portfolio-6.jpg"
import Portfolio7 from "media/new-portfolio/bussiness-cards/portfolio-7.jpg"
import Portfolio8 from "media/new-portfolio/bussiness-cards/portfolio-8.jpg"
import Portfolio9 from "media/new-portfolio/bussiness-cards/portfolio-9.jpg" 
import Portfolio10 from "media/new-portfolio/bussiness-cards/portfolio-10.jpg" 
import Portfolio11 from "media/new-portfolio/bussiness-cards/portfolio-11.jpg" 
import Portfolio12 from "media/new-portfolio/bussiness-cards/portfolio-12.jpg" 
import Portfolio13 from "media/new-portfolio/bussiness-cards/portfolio-13.png" 
import Portfolio14 from "media/new-portfolio/bussiness-cards/portfolio-14.jpg" 

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
    ]

    const portfolio = {
        title: "Business Card",
        portfolioContent: portfolioContent,
        gridThree: true,
    }
    return (
        <>
            <PortfolioInner content={portfolio} />
        </>
    )
}