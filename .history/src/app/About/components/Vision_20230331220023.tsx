import React from 'react'

type HereButton = {
    title: string
}



const HereButton = ({ title }: HereButton) => {
    return (
        <a type='button' className='cursor-none border-['>{title}</a>
    )
}



export default function Vision() {
    return (
        <>
            <section className=" py-10 ">
                {/* Vision  */}
                <div className="vision flex flex-col justify-center items-center ">
                    <HereButton title='OUR VISION' />

                    <p className='text-xs md:text-sm text-gray/70  '>Daystar Christian Centre was established on the firm foundation of God’s word given to His servants, Sam & Nike Adeyemi in November 18, 1995, to empower individuals to discover, develop, release and maximize our potentials in God through the word. By the grace of God, Daystar Christian Centre remains committed to executing this mandate through weekly worship gatherings and community outreaches; and God stays faithful to supporting the ministry by a steady increase in our numbers and impact.
                        There is a community for everyone who comes, irrespective of whatever stage of life you are in, there are opportunities to serve and be served, alongside a dedicated team of God’s servants to guide you in your spiritual journey.</p>

                    <div className='divider'></div>
                </div>
                {/* Mission  */}
                {/* Core Values */}
                {/* Core Values */}
                {/* History */}
                {/* Pastor section */}
            </section>
        </>
    )
}
