import type { LoginSchema } from "@/views/Auth/Login";
import type { SignupSchema } from "@/views/Auth/SignUp";
import { create } from "zustand";
import {
  type UserInitialStateProps,
  userInitialState,
} from "./userInitialState";

// type State = {
//   firstName: string;
//   lastName: string;
// };

type Action = {
  updateUser: (newState: LoginSchema) => void;
  login: (newState: LoginSchema) => void;
  signup: (newState: SignupSchema) => void;
  logout: () => void;
  // updateLastName: (lastName: State["lastName"]) => void;
};

export const useSessionStore = create<UserInitialStateProps & Action>(
  (set) => ({
    ...userInitialState,
    updateUser: (newState) => set((state) => ({ ...state, ...newState })),
    // updateLastName: (lastName) => set(() => ({ lastName: lastName })),
    login: (newState) =>
      set((state) => {
        const userExist = state.users.some(
          (user) =>
            user.username === newState.username &&
            user.password === newState.password
        );
        return {
          ...state,
          user: { ...state.user, ...newState, auth: userExist },
        };
      }),
    signup: (newState) =>
      set((state) => {
        const userExist = state.users.some(
          (user) => user.email === newState.email
        );
        if (userExist) {
          return state;
        }
        return {
          ...state,
          user: { ...state.user, ...newState, auth: true },
        };
      }),
    logout: () => set(() => userInitialState),
  })
);
