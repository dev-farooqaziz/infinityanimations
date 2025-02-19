"use client"
import NewPortfolio from "@/components/NewPortfolio/NewPortfolio";
import React from "react";

// Images
import Portfolio1 from "media/new-portfolio/portfolio-1.png"
import Portfolio2 from "media/new-portfolio/portfolio-2.png"
import Portfolio3 from "media/new-portfolio/portfolio-3.png"
import Portfolio4 from "media/new-portfolio/portfolio-4.png"
import Portfolio5 from "media/new-portfolio/portfolio-5.png"
import Portfolio6 from "media/new-portfolio/portfolio-6.png"
import Portfolio7 from "media/new-portfolio/portfolio-7.png"
import Portfolio8 from "media/new-portfolio/portfolio-8.png"
import Portfolio9 from "media/new-portfolio/portfolio-9.png"
import Portfolio10 from "media/new-portfolio/portfolio-10.png"
import Portfolio11 from "media/new-portfolio/portfolio-11.png"
import Portfolio12 from "media/new-portfolio/portfolio-12.png"
import Portfolio13 from "media/new-portfolio/portfolio-13.png"
import Portfolio14 from "media/new-portfolio/portfolio-14.png"
import Portfolio15 from "media/new-portfolio/portfolio-15.png"
import Portfolio16 from "media/new-portfolio/portfolio-16.png"
import Portfolio17 from "media/new-portfolio/portfolio-17.png"
import Portfolio18 from "media/new-portfolio/portfolio-18.png"
import Portfolio19 from "media/new-portfolio/portfolio-19.png"
import Portfolio20 from "media/new-portfolio/portfolio-20.png"
import Portfolio21 from "media/new-portfolio/portfolio-21.png"
import Portfolio22 from "media/new-portfolio/portfolio-22.png"
import Portfolio23 from "media/new-portfolio/portfolio-23.png"
import Portfolio24 from "media/new-portfolio/portfolio-24.png"
import Portfolio25 from "media/new-portfolio/portfolio-25.png"

export default function Page() {
    const portfolioContent = [
        {
            title: "UI/ UX Design",
            image: Portfolio1,
            href: "/ui-ux-design/"
        },
        {
            title: "3D LOGO",
            image: Portfolio2,
            href: "/3d-logo/"
        },
        {
            title: "App Banner design",
            image: Portfolio3,
            href: "/app-banner-design/"
        },
        {
            title: "Banner design",
            image: Portfolio4,
            href: "/banner-design/"
        },
        {
            title: "book Cover",
            image: Portfolio5,
            href: "/book-cover-design/"
        },
        {
            title: "Book illustrations",
            image: Portfolio6,
            href: "/book-illustrations/"
        },
        {
            title: "Brochure Design",
            image: Portfolio7,
            href: "/brochure-design/"
        },
        {
            title: "Business Card",
            image: Portfolio8,
            href: "/business-card/"
        },
        {
            title: "Icons Design",
            image: Portfolio9,
            href: "/icons-design/"
        },
        {
            title: "Label design",
            image: Portfolio10,
            href: "/label-design/"
        },
        {
            title: "Logo Design",
            image: Portfolio11,
            href: "/logo-design/"
        },
        {
            title: "2d logo",
            image: Portfolio12,
            href: "/2d-logo-design/"
        },
        {
            title: "Mascot Design",
            image: Portfolio13,
            href: "/mascot-design/"
        },
        {
            title: "Package design",
            image: Portfolio14,
            href: "/package-design/"
        },
        {
            title: "Pop Art",
            image: Portfolio15,
            href: "/popart/"
        },
        {
            title: "Poster Design",
            image: Portfolio16,
            href: "/poster-design/"
        },
        {
            title: "Social Media Post",
            image: Portfolio17,
            href: "/social-media-post/"
        },
        {
            title: "Sticker Design",
            image: Portfolio18,
            href: "/sticker-design/"
        },
        {
            title: "T-shirt Design",
            image: Portfolio19,
            href: "/t-shirt-design/"
        },
        {
            title: "vector Illustrations",
            image: Portfolio20,
            href: "/vector-illustrations/"
        },
        {
            title: "Magazine Design",
            image: Portfolio21,
            href: "/magazine-design/"
        },
        {
            title: "Isometric Illustration",
            image: Portfolio22,
            href: "/isometric-illustration/"
        },
        {
            title: "Photo Editing",
            image: Portfolio23,
            href: "/photo-editing/"
        },
        {
            title: "catalogue Design",
            image: Portfolio24,
            href: "/catalogue-design/"
        },
        {
            title: "Flyer Design",
            image: Portfolio25,
            href: "/flyer-design/"
        },
    ]

    const portfolio = {
        portfolioContent: portfolioContent,
    }
    return (
        <>
            <NewPortfolio content={portfolio} />
        </>
    )
}