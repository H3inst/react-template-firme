import { BrowserRouter, Route, Routes } from "react-router";
import routes from "../configs/routes";

import LayoutPage from "../features/page";
import PostsPage from "../features/posts/container";
import UsersPage from "../features/users/container";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<LayoutPage />}>
          <Route path={routes.posts} element={<PostsPage />} />
          <Route path={routes.users} element={<UsersPage />} />
          <Route path={routes.photos} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
