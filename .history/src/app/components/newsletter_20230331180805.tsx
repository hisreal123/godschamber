import React from 'react'


// sendEmail console
const sendEmail = () => {
    return null;
}
export default function newsletter() {
    return (
        <>
            <section className='py-16'>
                <h1 className='font-bold text-lg lg:text-xl '> Subscribe to our newsletter </h1>

                <form method="post">
                    <input type="email" placeholder=' YOUR EMAIL *' className='text-sm rounded-3xl px-4 py-2 hover:first-letter:border-red-300 border-2 outline-none' />
                    <button type='submit' className='self-center md:w-fit rounded-md bg-red-600 hover:bg-red/60  px-4 py-3 w-full mt-4 mb-5 md:text-white lg:px-10 hover:bg-red-800 md:font-light '> SUBSCRIBE </button>
                </form>
            </section>
        </>
    )
}
