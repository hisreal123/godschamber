import React from 'react'

export default function ContactUs() {
    return (
        <>
            <section className=" bg-[url('/assets/map_black.jpeg')] bg-cover bg-no-repeat bg-top px-5 h-[500px] ">
                <h1 className='text-center'>CONTACT US </h1>
                <div className=' flex flex-col items-center md:flex-row'>
                    <form action="" method="post">
                        <div className="inputsWrapper ">
                            <input type="text" placeholder=' YOUR NAME *' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                            <input type="email" placeholder=' YOUR EMAIL *' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                            <input type="text" placeholder=' SUBJECT*' className='text-sm rounded-xl px-4 py-3 hover:first-letter:border-red-300 border-2 outline-none md:text-md lg:text-lg' />
                        </div>
                        textar
                    </form>
                </div>
            </section>
        </>
    )
}
