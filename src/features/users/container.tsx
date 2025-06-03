import { Fragment } from "react/jsx-runtime";

import { parseAsInteger, useQueryState } from "nuqs";
import { useGetUsers } from "./services/getUsers";
import { useStore } from "../../stores/userSlice";

import UsersRender from "./presentation";
import UserTodosModal from "./components/userTodos";

import type { IUser } from "./types/users";

export default function UsersPage() {
  const storedUsers = useStore((store) => store.users);
  const saveUser = useStore((store) => store.saveUser);

  const [userId, setUserId] = useQueryState("user", parseAsInteger);

  const { data: users = [], isPending: isLoadingUsers } = useGetUsers();

  const onToggleModal = (userId: number | null) => {
    void setUserId(userId);
  };

  const onSaveUser = (user: IUser) => {
    if (storedUsers.some((u) => u.userId === user.userId)) {
      alert("The user was already added");
      return;
    }
    saveUser(user);
    alert("User saved")
  };

  const user = users.find((u) => u.userId === userId);

  const renderComponent = () => {
    return (
      <Fragment>
        <UsersRender
          users={users}
          isLoadingUsers={isLoadingUsers}
          onOpenUser={onToggleModal}
          onSaveUser={onSaveUser}
        />
        {user && (
          <UserTodosModal
            opened={Boolean(userId)}
            user={user}
            onClose={() => {
              onToggleModal(null);
            }}
          />
        )}
      </Fragment>
    );
  };

  return renderComponent();
}
