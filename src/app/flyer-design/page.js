"use client"
import React from "react";
import PortfolioInner from "@/components/PortfolioInner/PortfolioInner";

// Images
import Portfolio1 from "media/new-portfolio/flyer/portfolio-1.jpg"
import Portfolio2 from "media/new-portfolio/flyer/portfolio-2.jpg"
import Portfolio3 from "media/new-portfolio/flyer/portfolio-3.jpg"
import Portfolio4 from "media/new-portfolio/flyer/portfolio-4.jpg"
import Portfolio5 from "media/new-portfolio/flyer/portfolio-5.jpg"
import Portfolio6 from "media/new-portfolio/flyer/portfolio-6.jpg"
import Portfolio7 from "media/new-portfolio/flyer/portfolio-7.png"
import Portfolio8 from "media/new-portfolio/flyer/portfolio-8.jpg"
import Portfolio9 from "media/new-portfolio/flyer/portfolio-9.jpg"
import Portfolio10 from "media/new-portfolio/flyer/portfolio-10.jpg"
import Portfolio11 from "media/new-portfolio/flyer/portfolio-11.png"
import Portfolio12 from "media/new-portfolio/flyer/portfolio-12.png"
import Portfolio13 from "media/new-portfolio/flyer/portfolio-13.jpg"
import Portfolio14 from "media/new-portfolio/flyer/portfolio-14.jpg"
import Portfolio15 from "media/new-portfolio/flyer/portfolio-15.jpg"
import Portfolio16 from "media/new-portfolio/flyer/portfolio-16.png"

export default function Page() {
    const portfolioContent = [
        {
            title: "UI/ UX Design",
            image: Portfolio1
        },
        {
            title: "3D LOGO",
            image: Portfolio2
        },
        {
            title: "App Banner design",
            image: Portfolio3
        },
        {
            title: "Banner design",
            image: Portfolio4
        },
        {
            title: "book Cover",
            image: Portfolio5
        },
        {
            title: "Book illustrations",
            image: Portfolio6
        },
        {
            title: "Brochure Design",
            image: Portfolio7
        },
        {
            title: "Business Card",
            image: Portfolio8
        },
        {
            title: "Icons Design",
            image: Portfolio9
        },
        {
            title: "Label design",
            image: Portfolio10
        },
        {
            title: "Logo Design",
            image: Portfolio11
        },
        {
            title: "2d logo",
            image: Portfolio12
        },
        {
            title: "Mascot Design",
            image: Portfolio13
        },
        {
            title: "Package design",
            image: Portfolio14
        },
        {
            title: "Pop Art",
            image: Portfolio15
        },
        {
            title: "Poster Design",
            image: Portfolio16
        }
    ]

    const portfolio = {
        title: "Flyer Design",
        portfolioContent: portfolioContent,
        gridThree: true,
    }
    return (
        <>
            <PortfolioInner content={portfolio} />
        </>
    )
}