import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./router";
import theme from "../configs/theme";

import "@mantine/core/styles.css";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <Router />
        </NuqsAdapter>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
