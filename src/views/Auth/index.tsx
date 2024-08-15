import { Spinner } from "@/components/Spinner";
import React from "react";
import { Outlet } from "react-router-dom";

export function Auth() {
  return (
    <div className="h-dvh w-full flex justify-center items-center dark:bg-tile-pattern-dark bg-tile-pattern-light">
      <React.Suspense
        fallback={
          <Spinner className="dark:text-gray-100 text-orange-500" size={64} />
        }
      >
        <Outlet />
      </React.Suspense>
    </div>
  );
}
