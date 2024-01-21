export interface IGetPostWithComments {
  post?: Post;
  comments?: Comment[];
}

export interface Comment {
  commentId?: number;
  content?: string;
  userId?: number;
  user?: Author;
  postId?: number;
  post?: Post;
  status?: number;
  createdDate?: Date;
}

export interface Post {
  postId?: number;
  status?: number;
  title?: string;
  content?: string;
  authorId?: number;
  author?: Author;
  createdDate?: Date;
  updatedDate?: Date;
}

export interface Author {
  userId?: number;
  userName?: string;
  email?: string;
  role?: number;
  joinedDate?: Date;
}
