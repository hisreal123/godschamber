import Image from 'next/image'
import React from 'react'


type CardComponentProps = {
  text: string
  imgSrc: any
  mainStyle: string
  topStyle?: string
  btmStyle?: string,
  textStyle: string,
  alt?: string | any
}
export default function CardsComponents({
  text,
  imgSrc,
  mainStyle,
  topStyle,
  btmStyle,
  textStyle,
  alt
}: CardComponentProps) {

  return (
    <>
      <div className={`${mainStyle}container`}>
        <div className={`${topStyle} top`}>
        </div>
        <div className={`${btmStyle} btm`} >
          <h3 className={`${textStyle} btm`}>{text}</h3>
        </div>
      </div>
    </>
  )
}
