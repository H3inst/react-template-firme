import type { IComment, ICommentResponse } from "../types/comments";

export function getCommentsAdapter(posts: ICommentResponse[]): IComment[] {
  return posts.map((comment) => ({
    postId: comment.postId,
    commentId: comment.id,
    commentBody: comment.body,
    commentName: comment.name,
    userEmail: comment.email,
  }));
}
