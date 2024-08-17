import { useSessionStore } from "@/app/useStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PrivateRoutes() {
  const location = useLocation();
  const isAuthenticated = useSessionStore((state) => state.user.auth);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
