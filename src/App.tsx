import "./i18n/config";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "./router/routes";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pathname === "/") {
      return navigate(LOGIN);
    }
  }, [pathname, navigate]);

  return (
    <div className="h-dvh w-full flex justify-center items-center dark:bg-tile-pattern-dark bg-tile-pattern-light">
      <Outlet />
    </div>
  );
}

export default App;
