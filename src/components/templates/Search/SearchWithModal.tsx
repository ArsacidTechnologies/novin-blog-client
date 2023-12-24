"use client"
import React, { FC, useState } from 'react'
import SearchInput from '../../atoms/Inputs/SearchInput';
import SearchInHeaderOrg from '../../organisms/Search/SearchInHeaderOrg';
import SearchInModalOrg from '../../organisms/Search/SearchInModalOrg';
import ModalMotion from '../../organisms/Modal/ModalMotion';

export interface ISearchWithModalProps {

}

const SearchWithModal: FC<ISearchWithModalProps> = ({ }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className='flex w-full justify-center'>
      {!modalOpen &&
        <div onClick={open} className=''>
          <SearchInHeaderOrg />
        </div>}
      <div>
        {modalOpen && <ModalMotion onClose={close} isOpen={modalOpen}>
          <SearchInModalOrg />
        </ModalMotion>}
      </div>
    </div>
  )
}

export default SearchWithModal;