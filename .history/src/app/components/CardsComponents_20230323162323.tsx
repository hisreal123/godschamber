import Image from 'next/image'
import React from 'react'


type CardComponentProps = {
  text: string
  imgSrc: any
  mainStyle: string
  alt: string
}
export default function CardsComponents({
  text,
  imgSrc,
  mainStyle,
  alt
}: CardComponentProps) {

  return (
    <>
      <div className={ `${mainStyle}container`}>
        <div className="top">
          <Image src={imgSrc} width={100} height={100} alt={alt} />
        </div>
        <div className="btm" >
          {text}
        </div>
      </div>
    </>
  )
}
