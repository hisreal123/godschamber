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
    {
        imgSrc: '/assets/img4.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        href: ' Service Time'
        alt: 'Services'
    },
    {
        imgSrc: '/assets/img1.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        
        href: ' #',
        alt: 'Services'
    },
    {
        imgSrc: '/assets/img1.jpg',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '#',
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

                <div className="px-5 " >
                    {
                        MoreSection2Data.map((data, index) => (
                            <>
                                <div className="wrap ">
                                    <CardsComponents
                                        imgSrc={data.imgSrc}
                                        text={data.title}
                                        desc={data.desc}
                                        alt={data.alt}
                                        href={data.href}
                                        mainStyle=' py-10 flex  flex-col  items-center relative '
                                        topStyle=' h-60 w-60 md:h-50 md:w-50 rounded-full overflow-hidden shadow-xl'
                                        btmStyle='text-center  '
                                        textStyle='font-bold text-lg my-2 font-light'
                                        descStyle='my-3'
                                        hrefStyle='text-red-500 hover:underline'
                                        hrefTitle=''
                                    />
                                </div >
                            </>
                        ))
                    }
                </div>
            </section >
        </>
    )
}
