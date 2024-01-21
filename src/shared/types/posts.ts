export interface IGetPosts {
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
  firstName?: string;
  familyName?: string;
  userName?: string;
  email?: string;
  role?: number;
  joinedDate?: Date;
}

export interface User extends Author {
}


export enum PostStatus {
  review,
  approved
}

