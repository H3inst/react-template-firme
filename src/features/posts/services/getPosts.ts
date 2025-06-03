import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { getPostsAdapter } from "../adapters/posts";

import type { IPostParams, IPostResponse } from "../types/posts";

async function getPosts(params: IPostParams) {
  const { data: serviceData, headers } = await axios.get<IPostResponse[]>(
    "https://jsonplaceholder.typicode.com/posts",
    { params },
  );
  return { serviceData, totalCount: headers["X-Total-Count"] as string };
}

export function useGetPosts(params: IPostParams) {
  const query = useQuery({
    queryKey: ["posts", params._start],
    queryFn: async () => {
      const response = await getPosts(params);
      return response.serviceData;
    },
    select: getPostsAdapter,
    refetchOnWindowFocus: false,
  });

  return query;
}
