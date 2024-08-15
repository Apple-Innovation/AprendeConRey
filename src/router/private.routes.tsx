import { PrivateRoutes } from "@/views/PrivateRoutes";
import React from "react";
import type { RouteObject } from "react-router-dom";
import { ROUTES } from "./routes";

const DashboardLazy = React.lazy(() =>
  import("@/views/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
export function privateRoutes(): RouteObject[] {
  return [
    {
      path: ROUTES.DASHBOARD,
      element: <PrivateRoutes />,
      children: [
        {
          index: true,
          element: <DashboardLazy />,
        },
      ],
    },
  ];
}
