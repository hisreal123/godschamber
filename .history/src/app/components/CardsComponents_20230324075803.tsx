import Image from 'next/legacy/image'
import React from 'react'


const ImageStyle = {
  height: ' 100%',
  width: ' 100%'
};

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
    a
      <div className={`${mainStyle} container`}>
        <div className={`${topStyle} top`}>
          <Image
            src={imgSrc}
            alt={alt}
            height={100}
            width={100}
            layout="responsive"
            objectFit='cover'
          />
        </div>
        <div className={`${btmStyle} btm`} >
          <h3 className={`${textStyle} btm`}>{text}</h3>
        </div>
      </div>
    </>
  )
}
