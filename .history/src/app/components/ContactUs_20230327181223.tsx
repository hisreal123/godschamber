import React from 'react'

export default function ContactUs() {
    return (
        <>
            <section className=" bg-[url('/assets/map_black.jpeg')] bg-cover bg-no-repeat bg-top px-5 py-10 h-[500px] ">
                <h1 className='text-center my-10 text-white font-bold  text-2xl'>CONTACT US </h1>
                <div className=' flex flex-col items-center md:flex-row relative'>
                    <form action="" method="post">
                        <div className="inputsWrapper flex flex-col  items-center space-y-5" >
                            <input type="text" placeholder=' YOUR NAME *' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                            <input type="email" placeholder=' YOUR EMAIL *' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                            <input type="text" placeholder=' SUBJECT*' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                        </div>
                        <textarea placeholder=' YOUR MESSAGE' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none mt-5 md:mt-0 md:text-md lg:text-lg w-full ' rows={6} />

                        <button type='submit' className='rounded-md  bg-red-600 hover:bg-red/60  px-4 py-3 w-full '>SEND MESSAGE </button>
                    </form>
                </div>
            </section>
        </>
    )
}
