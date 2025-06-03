import { Fragment } from "react/jsx-runtime";

import { parseAsInteger, useQueryState } from "nuqs";
import { useGetPosts } from "./services/getPosts";
import { useGetComments } from "./services/getComments";
import { useStore } from "../../stores/userSlice";

import PostsRender from "./presentation";
import DetailModal from "./components/detail";

import type { IPost } from "./types/posts";

export default function PostsPage() {
  const storedPosts = useStore((store) => store.posts);
  const savePost = useStore((store) => store.savePost);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [post, setPost] = useQueryState("post", parseAsInteger);

  const { data: posts = [], isPending: isPendingPosts } = useGetPosts({
    _start: page * 10,
    _limit: 10,
  });

  const { data: comments = [], isPending: isPendingComments } =
    useGetComments(post);

  const onChangePage = (newPage: number) => {
    void setPage(newPage);
  };

  const onToggleDetail = (postId: number | null) => {
    void setPost(postId);
  };

  const onSavePost = (post: IPost) => {
    if (storedPosts.some((p) => p.postId === post.postId)) {
      alert("The post was already added");
      return;
    }
    savePost(post);
  };

  const renderComponent = () => {
    return (
      <Fragment>
        <PostsRender
          posts={posts}
          isLoadingPosts={isPendingPosts}
          currentPage={Number(page)}
          onChangePage={onChangePage}
          onOpenDetail={onToggleDetail}
          onSavePost={onSavePost}
        />
        <DetailModal
          comments={comments}
          opened={Boolean(post)}
          onClose={() => {
            onToggleDetail(null);
          }}
          isLoading={isPendingComments}
        />
      </Fragment>
    );
  };

  return renderComponent();
}
