import { create } from "zustand";
import type { IUser } from "../features/users/types/users";
import { persist } from "zustand/middleware";
import type { IPost } from "../features/posts/types/posts";

interface StoreInitialState {
  users: IUser[];
  posts: IPost[];
}

interface StoreActions {
  saveUser: (user: IUser) => void;
  savePost: (user: IPost) => void;
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
    }),
    { name: "store" }
  )
);
