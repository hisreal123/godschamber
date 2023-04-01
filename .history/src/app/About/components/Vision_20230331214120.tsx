import React from 'react'

type HereButton = {
    title: string
}
const HereButton = (title: string) => {
    return (
        <a type='button' className='cursor-none '>{title}</a>
    )
}
export default function Vision() {
    return (
        <>
            <section>
                {/* Vision  */}
                <div className="vision">
                    <HereButton title='OUR VISION' />
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
