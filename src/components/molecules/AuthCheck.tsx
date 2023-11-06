"use client"
import { useAppSelector } from '@/src/store/hooks'
import { selectUserRole } from '@/src/store/slices/userSlice'
import { useRouter } from 'next/navigation'
import React, { FC, useEffect } from 'react'

export interface IAuthCheckProps {

}

const AuthCheck: FC<IAuthCheckProps> = ({ }) => {
  const userRole = useAppSelector(selectUserRole)
  const router = useRouter()
  useEffect(() => {
    if (userRole === 'choosing') {
      router.push('/auth')
    }

    return () => {

    }
  }, [userRole, router])

  return (
    <div className='hidden'>

    </div>
  )
}

export default AuthCheck;