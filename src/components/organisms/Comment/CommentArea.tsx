'use client'
import { Button, Textarea } from '@nextui-org/react';
import React, { FC, useState } from 'react'

export interface ICommentAreaProps {

}

const CommentArea: FC<ICommentAreaProps> = ({ }) => {
  const [commentString, setCommentString] = useState<string>('')
  return (
    <div className='font-Vazir '>
      <Textarea
        isRequired
        label="دیدگاه شما"
        labelPlacement="outside"
        placeholder="نظر خودتون رو بنویسید . . . "
        className="max-w-lg"
        value={commentString}
        onChange={(e) => {

          if (400 - e.target.value.length >= 0)
            setCommentString(e.target.value)
        }}
      />
      <div className="font-Vazir">
        {commentString.length}
      </div>
      <div className="font-yekan">
        {400 - commentString.length}
      </div>

      <Button className='text-red-500' size='sm' variant='ghost' onClick={() => { }} > ارسال دیدگاه شما</Button>
    </div>
  )
}

export default CommentArea;