import Image from 'next/image'
import React from 'react'


type CardComponentProps = {
  img: string
  text: string
  link:  any
  style: string
  alt: string
}
export default function CardsComponents({
  img,
  text,
  link,
  style,
  alt
}: CardComponentProps) {

  return (
    <>
      <div className="container">
        <div className="top">
          <Image src={link} width={100} height={100} alt={alt}
        </div>
      </div>
    </>
  )
}
