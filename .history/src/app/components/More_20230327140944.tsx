import React from 'react'
import { ClickButton } from './ClickButton'
import { Watch, location } from './SvgIcons/SvgIcons'


export default function More() {
    return (
        <>
            <section class>

                <h1> logo </h1>

                <ClickButton icon={Watch} title='Click for more information ' href="/" style=" flex  items-center justify-center space-x-2 rounded-full bg-white hover:bg-white/50 text-black/80 py-2 px-2 text-center mt-5 md:w-[70%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
            </section>
        </>
    )
}
