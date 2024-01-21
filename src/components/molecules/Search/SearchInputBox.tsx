import React, { FC } from 'react'
import SearchInput from '../../atoms/Inputs/SearchInput';
import { Input, Divider, Card, CardBody } from "@nextui-org/react";
import { SearchIcon } from "src/components/atoms/Icons/SearchIcon";

export interface ISearchInputBoxProps {
  setSearchString?: React.Dispatch<React.SetStateAction<string>>,
  searchString?: string,
  children?: React.ReactNode
}

const SearchInputBox: FC<ISearchInputBoxProps> = ({ setSearchString, searchString, children }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Input
            className='flex w-[90vw] lg:w-[600px]'
            isClearable
            onClear={() => { setSearchString ? setSearchString('') : {} }}
            value={searchString}
            onChange={(e) => { setSearchString ? setSearchString(e.target.value) : {} }}
            placeholder="Type to search..."
            label="Search" type="search" startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Divider className="my-4" />
          {children}
        </CardBody>
      </Card>
    </div>
  )
}

export default SearchInputBox;