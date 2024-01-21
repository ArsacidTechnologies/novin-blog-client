import SearchWithModal from '@/src/components/templates/Search/SearchWithModal';
import React from 'react'

type Props = {}

const SearchPage = (props: Props) => {
  return (
    <div>
      <div className='grid grid-cols-3 bg-red-700'>
        <div>s1</div>
        <SearchWithModal></SearchWithModal>
        <div>s3</div>
      </div>
    </div>
  )
}
export default SearchPage;