export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPost {
  userId: number;
  postId: number;
  postTitle: string;
  postBody: string;
}

export interface IPostParams {
  _start?: number;
  _limit?: number;
}

export interface IResult {
  serviceData: IPostResponse[];
  totalCount: number;
}
