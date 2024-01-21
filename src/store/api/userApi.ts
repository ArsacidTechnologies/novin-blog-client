import { IGetPosts, User } from "@/src/shared/types/posts";
import { IGetPostWithComments } from "@/src/shared/types/postsAndComments";
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

//--------------------------------------------------------------------------------//
export const QueryUserByRoleItIsTemporary = async (role: number): Promise<User | string> => {
  try {
    const { data }: { data: User } = await axios.get(`https://localhost:7029/api/User/ByRole/${role}`, configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    return {};
  }
};
//--------------------------------------------------------------------------------//
export const getPosts = async (): Promise<IGetPosts[]> => {
  try {
    const { data }: { data: IGetPosts[] } = await axios.get('https://localhost:7029/api/Post', configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
//--------------------------------------------------------------------------------//
export const getPostById = async (id: number): Promise<IGetPosts> => {
  try {
    const { data }: { data: IGetPosts } = await axios.get(`https://localhost:7029/api/Post/${id}`, configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    let response: IGetPosts = {}
    return response;
  }
};
//--------------------------------------------------------------------------------//
export const getPostByIdWithComments = async (id: number): Promise<IGetPostWithComments> => {
  try {
    const { data }: { data: IGetPostWithComments } = await axios.get(`https://localhost:7029/api/Post/withComments/${id}`, configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    return {};
  }
};
//--------------------------------------------------------------------------------//

