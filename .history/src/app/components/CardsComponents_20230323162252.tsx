import Image from 'next/image'
import React from 'react'


type CardComponentProps = {
  text: string
  imgSrc: any
  style: string
  alt: string
}
export default function CardsComponents({
  text,
  imgSrc,
  style,
  alt
}: CardComponentProps) {

  return (
    <>
      <div className={ ` ${style}container`}>
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
