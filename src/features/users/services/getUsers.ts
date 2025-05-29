import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { getUsersAdapter } from "../adapters/users";

import type { IUserResponse } from "../types/users";

async function getUsers() {
  const { data: serviceData } = await axios.get<IUserResponse[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return serviceData;
}

export function useGetUsers() {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers(),
    select: getUsersAdapter,
    refetchOnWindowFocus: false,
  });

  return query;
}
