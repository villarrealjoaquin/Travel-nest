import { Navigate, Outlet } from "react-router-dom";
import { LocalStorageKeys, PUBLIC_ROUTES } from "../../models";

function ProtectedRoutes() {
  const accessToken = localStorage.getItem(LocalStorageKeys.TOKEN)
  return !accessToken ? <Navigate replace to={PUBLIC_ROUTES.LOGIN} /> : <Outlet />
}

export default ProtectedRoutes;