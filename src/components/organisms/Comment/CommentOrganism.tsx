
import { IComment, ICommentWithLikeCount } from '@/src/shared/types/comment';
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, LinkIcon } from '@nextui-org/react';

import React, { FC } from 'react'
import ApproveUnit from '../../molecules/Post/ApproveUnit';
import AuthorUnit from '../../molecules/Post/AuthorUnit';
import LikeComment from '../../molecules/Comment/LikeComment';
import { useAppSelector } from '@/src/store/hooks';
import { selectUserRole } from '@/src/store/slices/userSlice';

export interface ICommentOrganismProps {
  commentWithLike?: ICommentWithLikeCount
}

const CommentOrganism: FC<ICommentOrganismProps> = ({ commentWithLike }) => {
  const userRole = useAppSelector(selectUserRole)

  const testIsAvailable = () => {
    //this feature should handle on auth and user service in backend / just for test
    if (userRole === 'client' && commentWithLike?.comment?.status === 1) {
      return true
    }
    if (userRole === 'subscriber' && commentWithLike?.comment?.status === 1) {
      return true
    }
    return false;
  }





  return (
    <Card className={`${testIsAvailable() ? 'hidden' : ''} w-full bg-background `}>
      <CardHeader className="flex gap-3">
        <AuthorUnit ImgSrc='https://images.unsplash.com/photo-1579047917338-a6a69144fe63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' authorName='کاربر تست' />
      </CardHeader>
      <CardBody className='text-start'>
        <p>{commentWithLike?.comment?.content}</p>
      </CardBody>
      <CardFooter >
        <div className='flex w-full items-start'>
          <div className="w-1/2 justify-start">
            {commentWithLike?.comment && <LikeComment likes={commentWithLike?.likeCount} comment={commentWithLike.comment} />}
          </div>
          <div className="w-1/2 flex justify-end">
            <ApproveUnit postStatus={commentWithLike?.comment?.status} />
          </div>
        </div>
      </CardFooter>

    </Card>
  )
}

export default CommentOrganism;