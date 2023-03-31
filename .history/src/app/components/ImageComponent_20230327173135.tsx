import React from "react";



export function ImageComponent({
  current
}) {
  return <Image key={current} src={imageData[current].imgSrc} alt=" image 1" height={100} width={100} layout="fill" objectFit='cover' objectPosition="center" />;
}
  