import React, { FC } from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { SelectArrayType } from '@/src/shared/types/selectArray';

export interface IRoleSelectorProps {
  array: SelectArrayType;

}

const RoleSelector: FC<IRoleSelectorProps> = ({ array }) => {


  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="نوع کاربر"
        className="max-w-xs"
      >
        {array.map((roles) => (
          <SelectItem key={roles.value} value={roles.value}>
            {roles.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default RoleSelector;