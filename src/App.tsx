import "./i18n/config";
import React from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "./components/Spinner";

function App() {
  return (
    <React.Suspense
      fallback={
        <div className="h-dvh w-full flex justify-center items-center">
          <Spinner className="dark:text-gray-100 text-orange-500" size={64} />
        </div>
      }
    >
      <Outlet />
    </React.Suspense>
  );
}

export default App;
