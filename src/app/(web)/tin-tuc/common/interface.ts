export interface INewsItem {
  id: number;
  title: string;
  status: string;
  newsDetails: INewsDetails[];
  thumbnail: IThumbnail;
  subject: ISubjectItem[];
  createdAt: string;
  updatedAt: string;
}

export interface INewsDetails {
  id: number;
  lang: string;
  content: string;
  description: string;
  author: string;
}

export interface IThumbnail {
  id: number;
  key: string;
  type: string;
  size: number;
  uploaderId: number;
  url: string;
}

export interface ISubjectItem {
  id: number;
  priority: number;
  thumbnail: IThumbnail;
  subjectDetails: ISubjectDetails[];
  newsToSubject: INewsToSubject[];
}

export interface ISubjectDetails {
  id: number;
  lang: string;
  name: string;
}

export interface INewsToSubject {
  id: number;
  news: string;
}

export interface IParamsLatestNews {
  subjectSlug?: string;
  numberOfNews?: number;
}

export interface IParamsNews {
  slug: string;
}
