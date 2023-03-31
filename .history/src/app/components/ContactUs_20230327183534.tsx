import React from 'react'

export default function ContactUs() {
    return (
        <>
            <section className=" bg-[url('/assets/map_black.jpeg')] bg-cover bg-no-repeat bg-top px-5 py-10 h-[500px] ">
                <h1 className='text-center my-10 text-white font-bold  text-2xl'>CONTACT US </h1>

                <form action="" className=' bg-red-200 flex flex-co, '>
                    <input type="text" placeholder=' YOUR NAME *' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                    <input type="email" placeholder=' YOUR EMAIL *' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                    <input type="text" placeholder=' SUBJECT*' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />

                    <textarea placeholder='YOUR MESSAGE' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none mt-5 md:mt-0 md:text-md lg:text-lg mx-auto w-full' rows={4} />

                    <button type='submit' className='rounded-md bg-red-600 hover:bg-red/60  px-4 py-3 w-full mt-4 mb-5 '>SEND MESSAGE</button>
                </form>

            </section>
        </>
    )
}
