import React from 'react'
import SearchInput from '../../atoms/Inputs/SearchInput'

type Props = {}

function SearchInHeaderOrg({ }: Props) {
  return (
    <div className='flex w-full justify-center'>
      <SearchInput />


    </div>
  )
}

export default SearchInHeaderOrg