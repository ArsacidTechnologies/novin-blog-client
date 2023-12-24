"use client"
import React, { useState } from 'react'
import SearchInput from '../../atoms/Inputs/SearchInput'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { searchFunction } from '@/src/store/api/search';
import { BugtechSearchType } from '@/src/shared/types/searchBugtech';


import { SearchIcon } from '../../atoms/Icons/SearchIcon';
import SearchInputBox from '../../molecules/Search/SearchInputBox';


interface Props {
}

const SearchInModalOrg: React.FC<Props> = (props) => {
  // const queryClient = useQueryClient()
  const [searchString, setSearchString] = useState('')
  const [searchedItem, setSearchedItem] = useState([])
  const { data, status, isSuccess, error } = useQuery({ queryKey: ['searchString', searchString], queryFn: () => searchFunction(searchString) })

  return (
    <main>
      <div className='grid grid-rows-none w-full justify-center  '>
        <SearchInputBox searchString={searchString} setSearchString={setSearchString} >
          <section className='grid grid-cols-1
        w-full
        lg:max-w-[60vw] max-h-[50vh] max-w-[80vw] 
        overflow-y-scroll overflow-x-hidden'>
            {data?.map((SearchedItem: BugtechSearchType, index) =>
              <div onClick={() => { }} key={index} className='flex text-justify  w-full rounded-lg m-2 bg-slate-400/50 p-2'>
                <p className='p-1 truncate'>{SearchedItem?.main?.sku}</p>
              </div>)}
          </section>
        </SearchInputBox>
      </div>
    </main>
  )
}

export default SearchInModalOrg






