import Image from 'next/image'
import React from 'react'


type CardComponentProps = {
  img: string
  text: string
  href: string
  style: string
}
export default function CardsComponents({
  img,
  text,
  href,
  style,
  alt
}: CardComponentProps) {

  return (
    <>
      <div className="container">
        <div className="top">
          <Image href={href} width={100} height={100} alt={}
        </div>
      </div>
    </>
  )
}
