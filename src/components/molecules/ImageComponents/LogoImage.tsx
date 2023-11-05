import Image from 'next/image'
import React from 'react'
import img from '@/public/logo-main.png'

type Props = {
  classes: string,
  Alt?: string,
  w: number,
  h: number

}

const LogoImage = (props: Props) => {
  return (
    <div>
      <Image
        width={props.w}
        height={props.h}
        // objectFit="fit"
        src={img}
        alt={props.Alt ?? "logo"}
        className={props.classes}
      />
    </div>
  )
}

export default LogoImage;