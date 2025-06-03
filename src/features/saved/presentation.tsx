import * as Mantine from "@mantine/core";
import * as Icons from "lucide-react";

import type { IPost } from "../posts/types/posts";
import type { IUser } from "../users/types/users";

interface ISavedRenderProps {
  posts: IPost[];
  users: IUser[];
  onOpenUser: (userId: number) => void;
  onOpenPost: (userId: number) => void;
  onRemoveUser: (userId: number) => void;
  onRemovePost: (postId: number) => void;
}

export default function SavedRender(props: ISavedRenderProps) {
  const renderUsers = props.users.map((user) => (
    <Mantine.Paper key={user.userId} p="md" shadow="sm" pos="relative">
      <Mantine.Flex>
        <Mantine.Text fw="bold" w={100}>
          Name
        </Mantine.Text>
        <Mantine.Text>{user.userName}</Mantine.Text>
      </Mantine.Flex>
      <Mantine.Flex>
        <Mantine.Text fw="bold" w={100}>
          Email
        </Mantine.Text>
        <Mantine.Text>{user.userEmail}</Mantine.Text>
      </Mantine.Flex>
      <Mantine.Flex>
        <Mantine.Text fw="bold" w={100}>
          Phone
        </Mantine.Text>
        <Mantine.Text>{user.userPhone}</Mantine.Text>
      </Mantine.Flex>
      <Mantine.Flex>
        <Mantine.Text fw="bold" w={100}>
          Address
        </Mantine.Text>
        <Mantine.Text>
          {user.userAddress.city}, {user.userAddress.street}
        </Mantine.Text>
      </Mantine.Flex>
      <Mantine.Flex>
        <Mantine.Text fw="bold" w={100}>
          Company
        </Mantine.Text>
        <Mantine.Text>{user.userCompany.name}</Mantine.Text>
      </Mantine.Flex>
      <Mantine.Flex>
        <Mantine.Text fw="bold" w={100}>
          Website
        </Mantine.Text>
        <Mantine.Text>{user.userWebsite}</Mantine.Text>
      </Mantine.Flex>

      <Mantine.Group pos="absolute" top={10} right={10} gap={5}>
        <Mantine.ActionIcon
          size="md"
          variant="subtle"
          onClick={() => {
            props.onOpenUser(user.userId);
          }}
        >
          <Icons.ListTodo width={16} />
        </Mantine.ActionIcon>
        <Mantine.ActionIcon
          size="md"
          variant="subtle"
          onClick={() => {
            props.onRemoveUser(user.userId);
          }}
        >
          <Icons.Trash width={16} />
        </Mantine.ActionIcon>
      </Mantine.Group>
    </Mantine.Paper>
  ));

  const renderPosts = props.posts.map((post) => (
    <Mantine.Paper key={post.postId} shadow="sm" mb="lg" p={20} pos="relative">
      <Mantine.Text fw="bold" fz="h4">
        {post.postTitle}
      </Mantine.Text>
      <Mantine.Text>{post.postBody}</Mantine.Text>
      <Mantine.Group wrap="nowrap" pos="absolute" top={10} right={10} gap={5}>
        <Mantine.ActionIcon
          size="md"
          variant="subtle"
          onClick={() => {
            props.onOpenPost(post.postId);
          }}
        >
          <Icons.MessagesSquare width={16} />
        </Mantine.ActionIcon>
        <Mantine.ActionIcon
          size="md"
          variant="subtle"
          onClick={() => {
            props.onRemovePost(post.postId);
          }}
        >
          <Icons.Trash width={16} />
        </Mantine.ActionIcon>
      </Mantine.Group>
    </Mantine.Paper>
  ));

  const renderComponent = () => {
    return (
      <Mantine.Box mt="xl">
        <Mantine.Title order={1} mb="sm">
          Saved items
        </Mantine.Title>
        <Mantine.Text mb="lg">
          This page will show you all the saved users and posts.
        </Mantine.Text>
        <Mantine.Title order={2} mb="sm">
          Users
        </Mantine.Title>
        <Mantine.SimpleGrid cols={2} mb="lg">
          {renderUsers}
        </Mantine.SimpleGrid>
        <Mantine.Title order={2} mb="sm">
          Posts
        </Mantine.Title>
        {renderPosts}
      </Mantine.Box>
    );
  };

  return renderComponent();
}
