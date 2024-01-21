import React, { FC } from 'react'

export interface IFooterLoginProps {

}

const FooterLogin: FC<IFooterLoginProps> = ({ }) => {
  return (
    <footer className='grid grid-cols-3 gap-3 bg-slate-500'>
      <ul className="flex">
        <li>نقشه سایت</li>
      </ul>
      <ul className="flex">
        <li>خدمات مشتریان</li>
      </ul>
      <ul className="flex">
        <li>راهنمای سایت</li>
      </ul>
    </footer>
  )
}

export default FooterLogin;