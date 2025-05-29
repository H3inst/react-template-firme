import { Fragment } from "react/jsx-runtime";

import { parseAsInteger, useQueryState } from "nuqs";
import { useMemo } from "react";
import { useGetUsers } from "./services/getUsers";
import { useGetUserTodos } from "./services/getUserTodos";

import UsersRender from "./presentation";
import UserTodosModal from "./components/userTodos";

export default function UsersPage() {
  const [user, setUser] = useQueryState("user", parseAsInteger);
  const [todoStatus, setTodoStatus] = useQueryState("todoStatus");

  const { data: users = [], isPending: isLoadingUsers } = useGetUsers();
  const { data: todos = [], isPending: isLoadingTodos } = useGetUserTodos(user);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (todoStatus === "completed") {
        return todo.todoCompleted;
      }
      if (todoStatus === "pending") {
        return !todo.todoCompleted
      }
      return true;
    });
  }, [todoStatus, todos]);

  const onToggleModal = (userId: number | null) => {
    void setUser(userId);
  };

  const onChangeTodoStatus = (value: string | null) => {
    void setTodoStatus(value);
  };

  const userName = users.find((u) => u.userId === user)?.userName;

  const renderComponent = () => {
    return (
      <Fragment>
        <UsersRender
          users={users}
          isLoadingUsers={isLoadingUsers}
          onOpenUser={onToggleModal}
        />
        <UserTodosModal
          opened={Boolean(user)}
          todos={filteredTodos}
          userName={userName ?? ""}
          isLoading={isLoadingTodos}
          todoStatus={todoStatus}
          onChangeTodoStatus={onChangeTodoStatus}
          onClose={() => {
            onToggleModal(null);
            onChangeTodoStatus(null);
          }}
        />
      </Fragment>
    );
  };

  return renderComponent();
}
