import React from 'react'


// sendEmail console..
const sendEmail = () => {
    return null;
}


export default function Newsletter() {
    return (
        <>
            <section className='py-16 px-5'>
                <div className='flex flex-col items-center justify-center relative '>
                    <h1 className=' mb-5 text-center font-bold text-3xl lg:text-4xl lg:mb-10 '> Subscribe to our newsletter </h1>

                    <form method="post" class>
                        <input type="email" placeholder=' YOUR EMAIL *' className=' relative w-full lg:w-screen mb-5  text-sm rounded-3xl px-4 py-2 hover:first-letter:border-red-300 border-2 outline-none' />
                        <button type='submit' className='self-center md:w-fit rounded-md bg-red-600 hover:bg-red/60  px-4 py-3 w-full mt-4 mb-5 md:text-white lg:px-10 hover:bg-red-800 md:font-light '> SUBSCRIBE </button>
                    </form>
                </div>
            </section>
        </>
    )
}
