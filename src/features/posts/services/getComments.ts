import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import type { ICommentResponse } from "../types/comments";
import { getCommentsAdapter } from "../adapters/comments";

async function getComments(postId: number) {
  const { data: serviceData } = await axios.get<ICommentResponse[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId.toString()}/comments`,
  );
  return serviceData;
}

export function useGetComments(postId: number | null) {
  const query = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      if (postId) return await getComments(postId);
      return [];
    },
    select: getCommentsAdapter,
    refetchOnWindowFocus: false,
  });

  return query;
}
