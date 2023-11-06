'use client'

import Link from 'next/link'

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex-col items-center justify-center max-w-full py-4 min-h-[400px] mx-6 lg:mx-14 p-2'>
      {children}
    </section>
  )
}

export default CompanyLayout