import Image from 'next/legacy/image'
import Link from 'next/link';
import React from 'react'


const ImageStyle = {
  height: ' 100%',
  width: ' 100%'
};

type CardComponentProps = {
  text: string
  desc?: string
  imgSrc: any
  mainStyle: string
  topStyle?: string
  btmStyle?: string,
  textStyle: string,
  alt?: string | any
}
export default function CardsComponents({
  text,
  desc,
  imgSrc,
  mainStyle,
  topStyle,
  btmStyle,
  textStyle,
  alt
}: CardComponentProps) {

  return (
    <>
      <Link href="#" >
        <div className={`${mainStyle} container`}>
          <div className={`${topStyle} top`}>
            <Image
              src={imgSrc}
              alt={alt}
              height={100}
              width={100}
              layout="responsive"
              objectFit='cover'
              objectPosition="center"

            />
          </div>
          <div className={`${btmStyle} btm`} >
            <h3 className={`${textStyle} btm`}>{text}</h3>
          </div>
            {desc ? (<p>${desc}</p>) : null}<
        </div>
      </Link>
    </>
  )
}
