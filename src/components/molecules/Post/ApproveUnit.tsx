import { IGetPosts, PostStatus } from '@/src/shared/types/posts';
import { useAppSelector } from '@/src/store/hooks';
import { selectUserRole } from '@/src/store/slices/userSlice';
import { Button, Spinner } from '@nextui-org/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { FC } from 'react'

export interface IApproveUnitProps {
  postStatus?: PostStatus
  postId?: number
  approveFunction?: () => {}
}

const ApproveUnit: FC<IApproveUnitProps> = ({ postStatus, postId, approveFunction }) => {
  // const queryClient = useQueryClient()
  // const { data, status, isSuccess, error } = useQuery({ queryKey: ['posts'], queryFn: approveFunction })
  const userRole = useAppSelector(selectUserRole)
  const handleApprove = () => {
    postId
  }

  return (
    <>
      {userRole === 'approver' && <div className='flex'>
        <Button
          onClick={() => {
            handleApprove
          }}

          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" >
          {status !== 'pending' ?
            "تایید پست" :
            <Spinner label="" color="default" labelColor="foreground" />}

        </Button>
        {postStatus === 0 ? <span className="m-2  dot dot-error"></span> : <span className="m-2  dot dot-success"></span>}

      </div>}
    </>
  )
}

export default ApproveUnit;