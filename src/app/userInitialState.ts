export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  auth: boolean;
}
export interface UserInitialStateProps {
  user: User;
  users: User[];
}

export const userInitialState: UserInitialStateProps = {
  user: {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    auth: false,
  },
  users: [
    {
      id: 1,
      name: "Admin John Doe",
      email: "admin@admin.abc",
      username: "admin",
      password: "admin",
      confirmPassword: "admin",
      auth: false,
    },
  ],
};
