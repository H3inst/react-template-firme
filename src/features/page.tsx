import { Outlet } from "react-router";
import { Container } from "@mantine/core";

import Header from "../components/layout/header";

export default function LayoutPage() {
  const renderComponent = () => {
    return (
      <Container>
        <Header />
        <Outlet />
      </Container>
    );
  };

  return renderComponent();
}
