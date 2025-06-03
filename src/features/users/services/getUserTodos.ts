import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { getTodosAdapter } from "../adapters/todos";

import type { ITodosResponse } from "../types/todos";

async function getUserTodos(userId: number) {
  const { data: serviceData } = await axios.get<ITodosResponse[]>(
    `https://jsonplaceholder.typicode.com/users/${userId.toString()}/todos`,
  );
  return serviceData;
}

export function useGetUserTodos(userId: number | null) {
  const query = useQuery({
    queryKey: ["todos", userId],
    queryFn: async () => {
      if (userId) return await getUserTodos(userId);
      return [];
    },
    select: getTodosAdapter,
    refetchOnWindowFocus: false,
  });

  return query;
}
