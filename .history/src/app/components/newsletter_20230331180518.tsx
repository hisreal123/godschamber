import React from 'react'

export default function newsletter() {
    return (
        <>
            <h1 className='font-bold text-lg lg:text-xl '> Subscribe to our newsletter </h1>

            <form method="post">
                <input type="email" name="" id="" placeholder='YOUR EMAIL*' />
                <button type='submit' className='self-center md:w-fit rounded-md bg-red-600 hover:bg-red/60  px-4 py-3 w-full mt-4 mb-5 md:text-white lg:px-10 hover:bg-red-800 md:font-light '> S</button>
            </form>
        </>
    )
}
