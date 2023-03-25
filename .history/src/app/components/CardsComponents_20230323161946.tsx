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
  style
}: CardComponentProps) {

  return (
    <>
      <div className="container">
        <div className="top">
          <Image href={href} 
        </div>
      </div>
    </>
  )
}
