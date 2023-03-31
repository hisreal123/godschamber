import React from 'react'
import { ClickButton } from './ClickButton'
import { Watch, location } from './SvgIcons/SvgIcons'


export default function More() {
    return (
        <>
            <section>
                {/* More info */}
                <div className='h-[300px] bg-blue-700 flex-col  flex items-center  md:flex-row'>
                    <div className="wrap flex flex-col justify-center  md:w-[500px] md:mx-auto md:flex md:flex-row items-center h-full">
                        <h1 className=' self-end md:self-center '> logo </h1>
                        <ClickButton icon={Watch} title='Click for more information ' href="/" style=" flex  items-center justify-center space-x-2 rounded-full bg-white hover:bg-white/90 text-black/80 py-3 px-3 text-center mt-5  md:w-[80%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
                    </div>
                </div>

                {/* What Gof can do through you   */}
                <div className="">

                </div>
            </section>
        </>
    )
}
