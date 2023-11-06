import React, { FC } from 'react'
import dayjs from 'dayjs'
import jalaliday from "jalaliday";
import "dayjs/locale/fa";
dayjs.extend(jalaliday);
export interface IJalaliUnitProps {
  date?: Date
}

const JalaliUnit: FC<IJalaliUnitProps> = ({ date }) => {
  const datejs = dayjs(date)
    .calendar("jalali")
    .locale("fa")
    .format("DD MMMM YYYY ");
  return (<span className="font-light text-foreground/80">{datejs}</span>)
}

export default JalaliUnit;