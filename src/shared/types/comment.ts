import { Author, User } from "./posts";

export interface IComment {
  commentId?: number;
  content?: string;
  userId?: number;
  user?: User;
  postId?: number;
  post?: null;
  status?: number;
  createdDate?: Date;
}
export interface ILike {
  likeId?: number;
  userId?: number;
  user?: User;
  postId?: number;
  comment?: null;
}

export interface ICommentWithLikeCount {
  comment?: IComment;
  likeCount?: number;
}

// export interface Comment {
//   commentId?: number;
//   content?: string;
//   userId?: number;
//   user?: null;
//   postId?: number;
//   post?: null;
//   status?: number;
//   createdDate?: Date;
// }
