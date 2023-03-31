import React from 'react'
import { ClickButton } from './ClickButton'
import { Watch } from './SvgIcons/SvgIcons'
import CardsComponents from './CardsComponents'


const MoreSection2Data = [
    {
        imgSrc: '/assets/img1.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        href: ' Service Time',
        alt: 'Services'
    },
]
export default function More() {
    return (
        <>
            <section className='px-5 '>
                {/* More info */}
                <div className='h-[300px] bg-blue-700 flex-col  flex items-center  md:flex-row'>
                    <div className="wrap flex flex-col justify-center  md:w-[500px] md:mx-auto md:flex md:flex-row items-center h-full">
                        <h1 className=' self-end md:self-center '> logo </h1>
                        <ClickButton icon={Watch} title='Click for more information ' href="/" style=" flex  items-center justify-center space-x-2 rounded-full bg-white hover:bg-white/90 text-black/80 py-3 px-3 text-center mt-5  md:w-[80%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
                    </div>
                </div>

                {/* What Gof can do through you   */}
                <div className="">
                    {
                        MoreSection2Data.map((data, index) => (
                            <>
                                <div className="wrap grid grid-cols-1 md">

                                    <CardsComponents
                                        imgSrc={data.imgSrc}
                                        text={data.title}
                                        desc={data.desc}
                                        alt={data.alt}
                                        href={data.href}
                                        mainStyle=''
                                        topStyle='rounded-full '
                                        btmStyle=''
                                        textStyle=''
                                    />
                                </>
                            </div >
                        ))
                    }
                </div>
            </section>
        </>
    )
}
