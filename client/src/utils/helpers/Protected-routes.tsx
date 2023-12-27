import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../models";
import { useAuthStore } from "../../services/store/auth.store";

function ProtectedRoutes() {
  // const accessToken = useAuthStore((state) => state.accessToken);
  const accessToken = window.localStorage.getItem('access_token')
  return !accessToken ? <Navigate replace to={PUBLIC_ROUTES.LOGIN} /> : <Outlet />
}

export default ProtectedRoutes;