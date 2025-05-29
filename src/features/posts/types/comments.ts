export interface ICommentResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IComment {
  postId: number;
  commentId: number;
  commentName: string;
  commentBody: string;
  userEmail: string;
}
