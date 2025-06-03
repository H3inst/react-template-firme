import { Fragment } from "react/jsx-runtime";

import { parseAsInteger, useQueryState } from "nuqs";
import { useStore } from "../../stores/userSlice";

import SavedRender from "./presentation";
import UserTodosModal from "../users/components/userTodos";
import DetailModal from "../posts/components/detail";
import { useGetComments } from "../posts/services/getComments";

export default function SavedPage() {
  const users = useStore((store) => store.users);
  const posts = useStore((store) => store.posts);
  const removePost = useStore((store) => store.removePost);
  const removeUser = useStore((store) => store.removeUser);

  const [userId, setUserId] = useQueryState("user", parseAsInteger);
  const [postId, setPostId] = useQueryState("post", parseAsInteger);

  const { data: comments = [], isPending: isPendingComments } =
    useGetComments(postId);

  const onOpenUser = (userId: number) => {
    void setUserId(userId);
  };

  const onOpenPost = (postId: number) => {
    void setPostId(postId);
  };

  const user = users.find((u) => u.userId === userId);

  const renderComponent = () => {
    return (
      <Fragment>
        <SavedRender
          users={users}
          posts={posts}
          onOpenUser={onOpenUser}
          onOpenPost={onOpenPost}
          onRemovePost={removePost}
          onRemoveUser={removeUser}
        />
        {user && (
          <UserTodosModal
            user={user}
            opened={Boolean(userId)}
            onClose={() => {
              void setUserId(null);
            }}
          />
        )}
        <DetailModal
          comments={comments}
          opened={Boolean(postId)}
          onClose={() => {
            void setPostId(null);
          }}
          isLoading={isPendingComments}
        />
      </Fragment>
    );
  };

  return renderComponent();
}
