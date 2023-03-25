import Image from 'next/image'
import React from 'react'


const ImageStyle = `
  height:  '100%'
`
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
          <Image src={imgSrc}  style={} fill={true} alt={alt} />
        </div>
        <div className={`${btmStyle} btm`} >
          <h3 className={`${textStyle} btm`}>{text}</h3>
        </div>
      </div>
    </>
  )
}
