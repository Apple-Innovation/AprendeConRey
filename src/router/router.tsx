import App from "@/App";
import { Login } from "@/views/Login";
import { Register } from "@/views/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <Register />,
        },
      ],
    },
  ],
  {
    basename: "/AprendeConRey",
  }
);
