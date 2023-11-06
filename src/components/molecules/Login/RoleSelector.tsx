import React, { FC } from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { SelectArrayType } from '@/src/shared/types/selectArray';
import { useAppDispatch } from '@/src/store/hooks';
import { setUserRole } from '@/src/store/slices/userSlice';
import { userRoleType } from '@/src/store/slices/userSlice'
export interface IRoleSelectorProps {
  array: SelectArrayType;
  label: string;
}

const RoleSelector: FC<IRoleSelectorProps> = ({ array, label }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="form-field font-Vazir ">
      <label className="form-label text-base font-Vazir text-content1">{label}</label>
      <select
        onChange={(e) => {
          console.log('hi clicked')
          dispatch(setUserRole((e.target.value as userRoleType)))
        }}
        className="select select-lg rounded-medium">
        {array.map((role, index) =>
          <option value={role.value} key={index}>{role.label}</option>
        )}
      </select>
    </div>
  )
}

export default RoleSelector;