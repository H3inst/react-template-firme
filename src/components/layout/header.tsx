import * as Mantine from "@mantine/core";
import clsx from "clsx";

import { NavLink } from "react-router";

import routes from "../../configs/routes";

export default function Header() {
  return (
    <Mantine.Paper component="header" w="100%" mt="md" px="xl" shadow="md">
      <Mantine.Group wrap="nowrap" h="100%" align="center">
        <Mantine.Title order={3} w={100} mb={2}>
          Demo
        </Mantine.Title>
        <Mantine.Group justify="center">
          <NavLink
            className={({ isActive }) => clsx("custom-link", { isActive })}
            to={routes.posts}
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx("custom-link", { isActive })}
            to={routes.photos}
          >
            Photos
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx("custom-link", { isActive })}
            to={routes.users}
          >
            Users
          </NavLink>
        </Mantine.Group>
      </Mantine.Group>
    </Mantine.Paper>
  );
}
