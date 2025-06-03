import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { IUser } from "../features/users/types/users";
import type { IPost } from "../features/posts/types/posts";

interface StoreInitialState {
  users: IUser[];
  posts: IPost[];
}

interface StoreActions {
  saveUser: (user: IUser) => void;
  savePost: (user: IPost) => void;
  removePost: (postId: number) => void;
  removeUser: (userId: number) => void;
}

const INITIAL_STATE = {
  users: [],
  posts: [],
};

export const useStore = create<StoreInitialState & StoreActions>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      saveUser: (user) => {
        set((state) => ({
          users: [...state.users, user],
        }));
      },
      savePost: (post) => {
        set((state) => ({
          posts: [...state.posts, post],
        }));
      },
      removeUser: (userId) => {
        set((state) => ({
          users: state.users.filter((user) => user.userId !== userId),
        }));
      },
      removePost: (postId) => {
        set((state) => ({
          posts: state.posts.filter((post) => post.postId !== postId),
        }));
      },
    }),
    { name: "store" }
  )
);
