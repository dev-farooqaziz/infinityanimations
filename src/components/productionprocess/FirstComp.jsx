import React from 'react'

const FirstComp = () => {


    const FirstTwoCol = [
        {
            cardTitle: 'Project Consultation',
            cardDesc: 'We make sure to get on a call with you for efficient workflow. We start by getting a complete from you and create a requirement outline then we confer on the video animation style, your vision and goal, and tech video length. This phase is utmost necessary to drive the best outcome of your tech video’s message.',
            cardNum: "01",
        },
        {
            cardTitle: 'Scriptwriting',
            cardDesc: 'After a solid brief session with you, we write a compelling and captivating script in the pre-production process. Our scriptwriters ensure to come up with an engaging story to tell your target audience comprehensively.',
            cardNum: "02",
        }
    ]

    return (
        <>
            <div className="grid grid-cols-2 gap-5 mb-5">
                {FirstTwoCol.map((cardContent, index) => (
                    <div key={index} className='bg-white/15 backdrop-blur-md py-7 px-4 relative rounded-[20px]'>
                        <div className="number">
                            <span className='text-white text-[30px] font-bold font-sans bg-primary-100 rounded-full h-[50px] w-[50px] flex items-center justify-center absolute right-[23px] top-[20px] ring-2 ring-white ring-offset-4 ring-offset-[#262626]'>{cardContent.cardNum}</span>
                        </div>
                        <div className="content mt-12">
                            <div className="w-max">
                                <h3 className='text-[28px] font-bold font-sans pb-[2px] lg:w-10/12'>{cardContent.cardTitle}</h3>
                                <hr className='border border-white w-full' />
                            </div>
                            <p className='text-white font-[16px] font-sans leading-snug mt-4 w-10/12'>{cardContent.cardDesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FirstComp
