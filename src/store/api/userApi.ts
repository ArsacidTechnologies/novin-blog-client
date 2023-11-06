import { IGetPosts } from "@/src/shared/types/posts";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import https from 'https'

export const agentHttpsAxios = new https.Agent({ rejectUnauthorized: false, })
export const configDefaultForAxios = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
  },
  httpsAgent: agentHttpsAxios
}


export const getPosts = async (): Promise<IGetPosts[]> => {
  try {
    const { data }: { data: IGetPosts[] } = await axios.get('https://localhost:7029/api/Post', configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw [];
  }
};
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//

