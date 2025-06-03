import * as Mantine from "@mantine/core";

import { useMemo } from "react";
import { useQueryState } from "nuqs";
import { useGetUserTodos } from "../services/getUserTodos";

import type { IUser } from "../types/users";

interface IUserPostsModalProps {
  opened: boolean;
  onClose: () => void;
  user: IUser;
}

const STATUS = [
  { label: "Pending", value: "pending" },
  { label: "Completed", value: "completed" },
];

export default function UserTodosModal(props: IUserPostsModalProps) {
  const [todoStatus, setTodoStatus] = useQueryState("todoStatus");

  const { data: todos = [], isPending: isLoadingTodos } = useGetUserTodos(
    props.user.userId
  );

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (todoStatus === "completed") {
        return todo.todoCompleted;
      }
      if (todoStatus === "pending") {
        return !todo.todoCompleted;
      }
      return true;
    });
  }, [todoStatus, todos]);

  const onChangeTodoStatus = (value: string | null) => {
    void setTodoStatus(value);
  };

  const onCloseModal = () => {
    void setTodoStatus(null);
    props.onClose();
  };

  const renderTodos = filteredTodos.map((todo) => (
    <Mantine.Paper key={todo.todoId} withBorder mb="sm" p="md">
      <Mantine.Group justify="space-between">
        <Mantine.Text>{todo.todoTitle}</Mantine.Text>
        <Mantine.Badge
          variant="light"
          color={todo.todoCompleted ? "lime" : "yellow"}
        >
          {todo.todoCompleted ? "Completed" : "Pending"}
        </Mantine.Badge>
      </Mantine.Group>
    </Mantine.Paper>
  ));

  const renderComponent = () => {
    return (
      <Mantine.Modal
        title={`${props.user.userName} Todos`}
        opened={props.opened}
        onClose={onCloseModal}
        size="xl"
      >
        <Mantine.Select
          label="Todo status"
          value={todoStatus}
          data={STATUS}
          mb="lg"
          placeholder="Select the todo status..."
          onChange={onChangeTodoStatus}
          maw={300}
        />
        {isLoadingTodos ? (
          <Mantine.Center h={500}>
            <Mantine.Loader size="xl" />
          </Mantine.Center>
        ) : (
          renderTodos
        )}
      </Mantine.Modal>
    );
  };

  return renderComponent();
}
