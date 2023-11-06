"use client"
import React, { FC, useEffect, useState } from 'react'
import LoaderRipple from '../../atoms/Loaders/LoaderRipple';
import SubmitButton from '../../atoms/Buttons/SubmitButton';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { selectIsLoading, setIsLoading } from '@/src/store/slices/settingSlice';
// import { useRouter } from 'next/router';

export interface ILoadingModalProps {

}

const LoadingModal: FC<ILoadingModalProps> = ({ }) => {
  const isLoading = useAppSelector(selectIsLoading)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setIsLoading(false))
    return () => {
      dispatch(setIsLoading(false))

    }
  }, []);

  return (
    <div className={` top-0 right-0 max-h-screen h-full w-screen z-[1001] bg-background overflow-hidden ${isLoading ? 'fixed' : 'hidden'}`}>
      <div className='flex flex-col w-full h-full justify-center items-center'>
        <h1 className='my-4 font-Vazir font-black	text-3xl '> تامین سرمایه نوین</h1>
        <LoaderRipple />
      </div>
    </div>
  )
}

export default LoadingModal;