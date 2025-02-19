"use client"
import React from "react";
import PortfolioInner from "@/components/PortfolioInner/PortfolioInner";

// Images
import Portfolio1 from "media/new-portfolio/3d/portfolio-1.jpg"
import Portfolio2 from "media/new-portfolio/3d/portfolio-2.jpg"
import Portfolio3 from "media/new-portfolio/3d/portfolio-3.gif"
import Portfolio4 from "media/new-portfolio/3d/portfolio-4.jpg"
import Portfolio5 from "media/new-portfolio/3d/portfolio-5.gif"
import Portfolio6 from "media/new-portfolio/3d/portfolio-6.jpg"
import Portfolio7 from "media/new-portfolio/3d/portfolio-7.png"
import Portfolio8 from "media/new-portfolio/3d/portfolio-8.jpg"
import Portfolio9 from "media/new-portfolio/3d/portfolio-9.jpg" 

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
        title: "3D Logo",
        portfolioContent: portfolioContent,
        gridThree: false,
    }
    return (
        <>
            <PortfolioInner content={portfolio} />
        </>
    )
}