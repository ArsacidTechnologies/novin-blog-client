import { IComment, ILike } from '@/src/shared/types/comment';
import { queryCommentIsLikedByUser } from '@/src/store/api/commentApi';
import { useAppSelector } from '@/src/store/hooks';
import { selectUser, selectUserRole } from '@/src/store/slices/userSlice';
import { Badge, Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import React, { FC } from 'react'
import { AiFillLike } from "react-icons/ai";

export interface ILikeCommentProps {
  comment: IComment,
  likes?: number
}

const LikeComment: FC<ILikeCommentProps> = ({ likes, comment }) => {
  const userRole = useAppSelector(selectUserRole)
  const user = useAppSelector(selectUser)

  const { data } = useQuery({ queryKey: ['likes', comment], queryFn: () => queryCommentIsLikedByUser(comment?.commentId, user.userId) },)


  const likeComment = () => {

    if (userRole !== 'subscriber') {
      alert('You need to be subscriber to have permision to like!');
      return;
    }

  }



  return (
    <div className='flex w-full justify-start text-start'>
      <Badge content={likes ?? 0} shape="circle" color="primary">
        <Button
          onClick={likeComment}
          className='bg-white'
          radius="full"
          isIconOnly
          aria-label="likes numbers"
          variant="light"
        >
          <div className={`${(data as ILike)?.likeId !== undefined ? "text-red-700" : "text-gray-500"}  hover:text-red-300`}>
            <AiFillLike size={24}></AiFillLike>
          </div>
        </Button>
      </Badge>
    </div>
  )
}

export default LikeComment;

// {
//   "userId": 1,
//   "userName": "Subscriber",
//   "firstName": null,
//   "familyName": null,
//   "email": "Subscriber@gmail.com",
//   "role": 2,
//   "joinedDate": "2023-11-04T02:01:37.7642289"
// },
// {
//   "userId": 2,
//   "userName": "Author",
//   "firstName": null,
//   "familyName": null,
//   "email": "Author@gmail.com",
//   "role": 3,
//   "joinedDate": "2023-11-04T02:02:20.9142674"
// },
// {
//   "userId": 3,
//   "userName": "Reviewer",
//   "firstName": null,
//   "familyName": null,
//   "email": "Reviewer@gmail.com",
//   "role": 1,
//   "joinedDate": "2023-11-04T02:22:40.7290181"
// }