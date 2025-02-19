"use client"
import React from "react";
import PortfolioInner from "@/components/PortfolioInner/PortfolioInner";

// Images
import Portfolio1 from "media/new-portfolio/vector-illustration/portfolio-1.png"
import Portfolio2 from "media/new-portfolio/vector-illustration/portfolio-2.jpg"
import Portfolio3 from "media/new-portfolio/vector-illustration/portfolio-3.jpg"
import Portfolio4 from "media/new-portfolio/vector-illustration/portfolio-4.png"
import Portfolio5 from "media/new-portfolio/vector-illustration/portfolio-5.png"
import Portfolio6 from "media/new-portfolio/vector-illustration/portfolio-6.jpg"
import Portfolio7 from "media/new-portfolio/vector-illustration/portfolio-7.png"
import Portfolio8 from "media/new-portfolio/vector-illustration/portfolio-8.jpg"
import Portfolio9 from "media/new-portfolio/vector-illustration/portfolio-9.png"
import Portfolio10 from "media/new-portfolio/vector-illustration/portfolio-10.png"
import Portfolio11 from "media/new-portfolio/vector-illustration/portfolio-11.png"
import Portfolio12 from "media/new-portfolio/vector-illustration/portfolio-12.png"
import Portfolio13 from "media/new-portfolio/vector-illustration/portfolio-13.jpg"
import Portfolio14 from "media/new-portfolio/vector-illustration/portfolio-14.png"
import Portfolio15 from "media/new-portfolio/vector-illustration/portfolio-15.png"
import Portfolio16 from "media/new-portfolio/vector-illustration/portfolio-16.jpg"
import Portfolio17 from "media/new-portfolio/vector-illustration/portfolio-17.jpg"
import Portfolio18 from "media/new-portfolio/vector-illustration/portfolio-18.png"
import Portfolio19 from "media/new-portfolio/vector-illustration/portfolio-19.gif"
import Portfolio20 from "media/new-portfolio/vector-illustration/portfolio-20.gif"
import Portfolio21 from "media/new-portfolio/vector-illustration/portfolio-21.png"
import Portfolio22 from "media/new-portfolio/vector-illustration/portfolio-22.jpg"
import Portfolio23 from "media/new-portfolio/vector-illustration/portfolio-23.png"
import Portfolio24 from "media/new-portfolio/vector-illustration/portfolio-24.png"
import Portfolio25 from "media/new-portfolio/vector-illustration/portfolio-25.png"

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
    ]

    const portfolio = {
        title: "vector Illustrations",
        portfolioContent: portfolioContent,
        gridThree: true,
    }
    return (
        <>
            <PortfolioInner content={portfolio} />
        </>
    )
}