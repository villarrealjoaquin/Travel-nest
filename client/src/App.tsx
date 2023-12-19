import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./models/routes";
import { ApartmentDetailView, ApartmentsDirectory, Home, Login, PublishApartment, Register } from "./pages";
import { ProtectedRoutes } from "./utils";
import './i18n';

function App() {
  return (
    <>
      <Routes>
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        <Route path={PUBLIC_ROUTES.APARTMENTS} element={<ApartmentsDirectory />} />
        <Route path={`${PUBLIC_ROUTES.APARTMENTS}/:id`} element={<ApartmentDetailView />} />
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path={PRIVATE_ROUTES.PUBLISH} element={<PublishApartment />} />
        {/* </Route> */}
      </Routes>
    </>
  )
}
export default App

