import * as Mantine from "@mantine/core";
import * as Icons from "lucide-react";

import type { IPost } from "./types/posts";

interface IPostsRenderProps {
  posts: IPost[];
  currentPage: number;
  isLoadingPosts: boolean;
  onChangePage: (page: number) => void;
  onOpenDetail: (postId: number) => void;
  onSavePost: (post: IPost) => void;
}

export default function PostsRender(props: IPostsRenderProps) {
  const renderPosts = props.posts.map((post) => (
    <Mantine.Paper key={post.postId} shadow="sm" mb="lg" p="md" pos="relative">
      <Mantine.Text fw="bold" fz="h4">
        {post.postTitle}
      </Mantine.Text>
      <Mantine.Text>{post.postBody}</Mantine.Text>
      <Mantine.Group wrap="nowrap" pos="absolute" top={10} right={10} gap={5}>
        <Mantine.ActionIcon
          size="md"
          variant="subtle"
          onClick={() => {
            props.onOpenDetail(post.postId);
          }}
        >
          <Icons.MessagesSquare width={16} />
        </Mantine.ActionIcon>
        <Mantine.ActionIcon
          size="md"
          variant="subtle"
          onClick={() => {
            props.onSavePost(post);
          }}
        >
          <Icons.Pin width={16} />
        </Mantine.ActionIcon>
      </Mantine.Group>
    </Mantine.Paper>
  ));

  const renderComponent = () => {
    return (
      <Mantine.Box mt="xl">
        <Mantine.Title order={1} mb="sm">
          Posts
        </Mantine.Title>
        <Mantine.Text mb="lg">
          This page will show you all the available posts and their comments.
        </Mantine.Text>

        {props.isLoadingPosts ? (
          <Mantine.Center h="50vh">
            <Mantine.Loader size="xl" />
          </Mantine.Center>
        ) : (
          renderPosts
        )}
        <Mantine.Center>
          <Mantine.Pagination
            total={9}
            value={props.currentPage}
            onChange={props.onChangePage}
            mx="auto"
            my="lg"
          />
        </Mantine.Center>
      </Mantine.Box>
    );
  };

  return renderComponent();
}
