import React, { FC } from 'react'

export interface ITranslateProps {
  text: string;
}

const Translate: FC<ITranslateProps> = ({ }) => {
  // const {t} = useTranslate()

  return (
    <div>
      Translate
    </div>
  )
}

export default Translate;