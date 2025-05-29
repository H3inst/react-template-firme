import type { IPost, IPostResponse } from "../types/posts";

export function getPostsAdapter(posts: IPostResponse[]): IPost[] {
  return posts.map((post) => ({
    userId: post.userId,
    postId: post.id,
    postTitle: post.title,
    postBody: post.body,
  }));
}
