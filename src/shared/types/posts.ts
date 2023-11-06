export interface IGetPosts {
  postId?: number;
  status?: number;
  title?: string;
  content?: Content;
  authorId?: number;
  author?: Author;
  createdDate?: Date;
  updatedDate?: Date;
}

export interface Author {
  userId?: number;
  firstName?: string;
  familyName?: string;
  userName?: UserName;
  email?: Email;
  role?: number;
  joinedDate?: Date;
}

export enum Email {
  AuthorGmailCOM = "Author@gmail.com",
  SubscriberGmailCOM = "Subscriber@gmail.com",
}

export enum UserName {
  Author = "Author",
  Subscriber = "Subscriber",
}

export enum Content {
  NovinIbIsAnIranianInvestmentCompanyThatHas = "NovinIb is an Iranian investment company that has ",
  NovinIbIsAnIranianInvestmentCompanyThatHas2 = "NovinIb is an Iranian investment company that has 2",
}

export enum PostStatus {
  review,
  approved
}

