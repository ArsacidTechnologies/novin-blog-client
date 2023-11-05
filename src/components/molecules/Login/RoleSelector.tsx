import React, { FC } from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { SelectArrayType } from '@/src/shared/types/selectArray';

export interface IRoleSelectorProps {
  array: SelectArrayType;
  label: string;
}

const RoleSelector: FC<IRoleSelectorProps> = ({ array, label }) => {


  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 font-Vazir-Bold">
      <Select
        label={label}
        className="max-w-xs font-Vazir-Bold"

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