import axios, { AxiosError } from 'axios'
import React from 'react'
import { configDefaultForAxios } from './userApi'
import { BugtechSearchType } from '@/src/shared/types/searchBugtech'

type Props = {}

export const searchFunction = async (searchString: string, perPage: number = 5): Promise<BugtechSearchType[] | string[]> => {
  if (searchString.length > 2) {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}pro/psearch`, {
      "text": searchString,
      "perPage": perPage
    }, configDefaultForAxios
    ).catch((error) => {
      console.log(error.toJSON());
      return error.toJSON();
    });
    return response.data as BugtechSearchType[];
  }
  return []
}