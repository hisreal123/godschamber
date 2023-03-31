import React from 'react'
import { ClickButton } from './ClickButton'
import { Watch, location } from './SvgIcons/SvgIcons'


export default function More() {
    return (
        <>
            <section>

                <h1> logo </h1>

                <ClickButton icon={Watch} title='Find a location' href="/" style=" flex  items-center justify-center space-x-5 rounded-full bg-red-600 hover:bg-red-800 text-white py-2 px-2 text-center mt-5 md:w-[70%] md:text-xl md:mx-auto md:mt-0 md:mx-auto md:py-4 md:px-5 md:space-x-0 md:text-sm" />
            </section>
        </>
    )
}
