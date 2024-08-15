import App from "@/App";
import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { privateRoutes } from "./private.routes";
import { ROUTES } from "./routes";

const RegisterLazy = React.lazy(() =>
  import("@/views/Auth/SignUp").then((module) => ({
    default: module.SignUp,
  }))
);
const LoginLazy = React.lazy(() =>
  import("@/views/Auth/Login").then((module) => ({
    default: module.Login,
  }))
);
const AuthLazy = React.lazy(() =>
  import("@/views/Auth").then((module) => ({
    default: module.Auth,
  }))
);

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.ROOT,
      element: <App />,
      children: [
        {
          path: ROUTES.ROOT,
          element: <AuthLazy />,
          children: [
            {
              index: true,
              element: <LoginLazy />,
            },
            {
              path: ROUTES.SIGNUP,
              element: <RegisterLazy />,
            },
          ],
        },
        ...privateRoutes(),
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    basename: "/AprendeConRey",
  }
);
