import * as Mantine from "@mantine/core";
import type { ITodo } from "../types/todos";

interface IUserPostsModalProps {
  opened: boolean;
  userName: string;
  todos: ITodo[];
  todoStatus: string | null;
  onClose: () => void;
  onChangeTodoStatus: (todoStatus: string | null) => void;
  isLoading: boolean;
}

const STATUS = [
  { label: "Pending", value: "pending" },
  { label: "Completed", value: "completed" },
];

export default function UserTodosModal(props: IUserPostsModalProps) {
  const renderPosts = props.todos.map((todo) => (
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
        title={`${props.userName} Todos`}
        opened={props.opened}
        onClose={props.onClose}
        size="xl"
      >
        <Mantine.Select
          label="Todo status"
          value={props.todoStatus}
          data={STATUS}
          mb="lg"
          placeholder="Select the todo status..."
          onChange={props.onChangeTodoStatus}
          maw={300}
        />
        {props.isLoading ? (
          <Mantine.Center h={500}>
            <Mantine.Loader size="xl" />
          </Mantine.Center>
        ) : (
          renderPosts
        )}
      </Mantine.Modal>
    );
  };

  return renderComponent();
}
