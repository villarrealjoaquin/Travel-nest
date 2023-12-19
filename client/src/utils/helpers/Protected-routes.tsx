import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../services/store/auth.store";
import { PUBLIC_ROUTES } from "../../models";

function ProtectedRoutes() {
  const accessToken = useAuthStore(state => state.accessToken);
  return !accessToken ? <Navigate replace to={PUBLIC_ROUTES.LOGIN} /> : <Outlet />
}

export default ProtectedRoutes;