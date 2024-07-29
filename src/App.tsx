import "./i18n/config";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import backgroundTile from "./assets/backgroundTile.png";
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
    <div
      className="h-dvh w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundTile})` }}
    >
      <Outlet />
    </div>
  );
}

export default App;
