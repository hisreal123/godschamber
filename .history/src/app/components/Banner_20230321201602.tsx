import { ClickButton } from './clickButton';
import React from 'react'
import VideoPlayer from './VideoBackground'


import {Watch, location} from './SvgIcons/SvgIcons'


export default function Banner() {
  return (
    <>
    <div className="wrapper h-screen w-screen ">
        <div className="absolute">
            <h1>
                A PLACE FOR YOU 
            </h1>

            <div className="desc"> Join us this weekend </div>

            <div className="btns flex flex-col">
                <ClickButton icon=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-6-8v6h6v-6z"/></svg>`title='Find a location' href="/" style=" rounded-full bg-red-600 text-white py-2 px-2 text-center" />
                <ClickButton title='Find a location' href="/" style=" rounded-full bg-red-600 text-white py-2 px-2 text-center mt-5" />
            </div>
        </div>
      <VideoPlayer />
    </div>
    </>
  )
}
