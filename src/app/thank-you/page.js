"use client"
import React, { useEffect, useState } from "react";
import Script from "next/script";
// Import Components
import CTA from "@/components/cta/CTA";

export default function Page() {

    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11475040852" id="gtagCode"></Script>
            <Script id="gtagCode2">
                {
                    ` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11475040852');`
                }
            </Script>
            <Script>
                {`gtag('event', 'conversion', {'send_to': 'AW-11475040852/9LYyCK-D1qcZENT03N8q'});`}
            </Script>

            <section className={`w-full h-[100vh] flex items-center justify-start sm:pb-5`}>
                <div className="container">
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className={`text-[40px] md:text-[50px] xl:text-[60px] font-semibold font-sans tracking-wider mb-1 mt-32`}>
                            Thank You
                        </h1>
                        <div className="flex gap-6">
                            <CTA
                                text="Back To Home"
                                icon="/icons/arrow-red.png"
                                iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                bg="bg-prime"
                                color={`text-white`}
                                border={`border-2 border-[#f5090b]`}
                                hover="hover:bg-transparent"
                                href="/"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


