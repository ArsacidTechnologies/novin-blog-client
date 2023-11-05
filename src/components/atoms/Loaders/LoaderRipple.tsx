import React, { FC } from 'react'

export interface ILoaderRippleProps {

}

const LoaderRipple: FC<ILoaderRippleProps> = ({ }) => {
  return (
    <div className="spinner-wave">
      <div className="spinner-wave-dot"></div>
      <div className="spinner-wave-dot"></div>
      <div className="spinner-wave-dot"></div>
      <div className="spinner-wave-dot"></div>
    </div>
  )
}

export default LoaderRipple;