import { Image } from '@nextui-org/react';
import React, { FC } from 'react'

export interface IAuthorUnitProps {
  authorName?: string
  ImgSrc?: string | "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
}

const AuthorUnit: FC<IAuthorUnitProps> = ({ authorName, ImgSrc = "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" }) => {
  return (
    <div className="flex items-center" >
      <Image className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src={ImgSrc} alt="avatar" />
      <h1 className="text-foreground font-Vazir">{authorName}</h1>
    </div>
  )
}

export default AuthorUnit;