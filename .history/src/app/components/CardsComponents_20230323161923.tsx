import React from 'react'


type CardComponentProps = {
  img: string
  text: string
  link: string
  style: string
}
export default function CardsComponents({
  img,
  text,
  link,
  style
}: CardComponentProps) {

  return (
    <>
      <div className="container">
        <div className="top">
          Image
        </div>
      </div>
    </>
  )
}
