import { IComment, ICommentWithLikeCount, ILike } from "@/src/shared/types/comment";
import axios from "axios";
import { configDefaultForAxios } from "./userApi";



//--------------------------------------------------------------------------------//
export const getCommentsByIdApi = async (id: number): Promise<IComment[]> => {
  try {
    const { data }: { data: IComment[] } = await axios.get(`https://localhost:7029/api/Comment/${id}`, configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw [];
  }
};
//--------------------------------------------------------------------------------//
export const queryCommentIsLikedByUser = async (comentId?: number, userId?: number): Promise<ILike | string> => {
  try {
    if (comentId === undefined || userId === undefined) {
      return {}
    }
    const { data }: { data: ILike } = await axios.get(`https://localhost:7029/api/Comment/Like/${comentId}/${userId}`, configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
//--------------------------------------------------------------------------------//
export const getCommentsWithLikesByIdApi = async (comentId?: number): Promise<ICommentWithLikeCount[] | string> => {
  try {
    if (comentId === undefined) {
      return []
    }
    const { data }: { data: ICommentWithLikeCount[] } = await axios.get(`https://localhost:7029/api/Comment/WithLikes/${comentId}`, configDefaultForAxios)
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};