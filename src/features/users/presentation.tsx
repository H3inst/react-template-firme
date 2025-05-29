import * as Mantine from "@mantine/core";
import * as Icons from "lucide-react";

import type { IUser } from "./types/users";

interface IUsersRenderProps {
  users: IUser[];
  isLoadingUsers: boolean;
  onOpenUser: (userId: number) => void;
}

export default function UsersRender(props: IUsersRenderProps) {
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
        <Mantine.ActionIcon size="md" variant="subtle">
          <Icons.Pin width={16} />
        </Mantine.ActionIcon>
      </Mantine.Group>
    </Mantine.Paper>
  ));

  const renderComponent = () => {
    return (
      <Mantine.Box mt="xl">
        <Mantine.Title order={1} mb="sm">
          Users
        </Mantine.Title>
        <Mantine.Text mb="lg">
          This page will show you all the available users and their todos.
        </Mantine.Text>
        {props.isLoadingUsers ? (
          <Mantine.Center h="50vh">
            <Mantine.Loader size="xl" />
          </Mantine.Center>
        ) : (
          <Mantine.SimpleGrid cols={2} mb="xl">
            {renderUsers}
          </Mantine.SimpleGrid>
        )}
      </Mantine.Box>
    );
  };

  return renderComponent();
}
