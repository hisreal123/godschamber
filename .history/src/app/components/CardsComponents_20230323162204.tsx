import Image from 'next/image'
import React from 'react'


type CardComponentProps = {
  img: string
  text: string
  imgSrc: any
  style: string
  alt: string
}
export default function CardsComponents({
  img,
  text,
  imgSrc,
  style,
  alt
}: CardComponentProps) {

  return (
    <>
      <div className="container">
        <div className="top">
          <Image src={imgSrc} width={100} height={100} alt={alt} />
        </div>
        <div className="btm">
          {}
        </div>
      </div>
    </>
  )
}
