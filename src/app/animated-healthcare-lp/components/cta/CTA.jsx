"use client"

const CTA = ({ text, icon, bg, color, border, hover, href, iconCss }) => {
    return (

        <>
            {icon ? <div dangerouslySetInnerHTML={{
                __html:
                    `
                    <a href=${href} class="h-[40px] xl:h-[50px] px-6 rounded-md text-[16px] xl:text-[18px] tracking-wider font-normal font-sans flex items-center gap-x-2 ${color} ${bg} ${hover} ${border}"> 
                       ${text}
                        <img src=${icon} alt="Icons" class="object-contain ${iconCss}" />
                    </a>
                `
            }} />
                :
                <a href={href} className={`${color} ${bg} ${hover} ${border} h-[40px] xl:h-[50px] px-6 rounded-md flex items-center gap-x-2 text-[16px] xl:text-[18px] tracking-wider font-normal font-sans`}>
                    {text}
                </a>}
        </>
    );
}

export default CTA